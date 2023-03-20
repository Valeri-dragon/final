import { validation, validateLength } from "./validation";
import { removeMessage, showError, showSuccess } from "./helpers";
const sendForm = (formId) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";
  const inCorrectValue = "Введите данные";

  let str;

  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.classList.contains("error")) {
        success = false;
        statusBlock.textContent = inCorrectValue;
        removeMessage(statusBlock);
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll(".form-group");
    const formInputs = form.querySelectorAll('input[type="text"]');
    const inputName = document.getElementById("username");
    const formData = new FormData(form);

    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      if (val !== "") {
        formBody[key] = val;
        showSuccess(form.elements[key]);
      } else {
        str = "Заполните поля";
        showError(form.elements[key], str);
      }
    });

    validateLength(inputName);
    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          removeMessage(statusBlock);
          formInputs.forEach((input) => {
            input.value = "";
            input.style.border = "";
            input.classList.remove("success");
          });
          if (form.closest(".modal-callback")) {
            setTimeout(() => {
              form.closest(".modal-callback").style.display = "";
              document.querySelector(".modal-overlay").style.display = "";
              document.body.style.paddingRight = "";
              document.body.style.overflow = "";
            }, 2500);
          }
        })
        .catch((error) => {
          statusBlock.textContent = errorText + " " + error;
          removeMessage(statusBlock);
        });
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }
    validation(form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;