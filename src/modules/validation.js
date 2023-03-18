import { showError, showSuccess } from "./helpers";

let str;
const validateLength = (e) => {
  if (e.value.length < 2 && e.value.length > 0) {
    str = "Имя не может быть меньше 2 букв";
    showError(e, str);
  }
};
const validateCyrillic = (e) => {
  if (!/[а-яё]+/gi.test(e.value.trim())) {
    str = "Можно использовать кириллицу, пробел или дефис";
    showError(e, str);

    e.value = e.value.replace(/[a-z\s\d]+/gi, "");
  } else {
    e.value = e.value.replace(/[a-z\s\d]+/gi, "");
    showSuccess(e);
  }
};

const validatePhone = (e) => {
  if (
    /^((8|\+375|\+7)[\- ]?)?\(?\d{2,3}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(
      e.value
    )
  ) {
    showSuccess(e);
  } else {
    str = "Номер должен начинаться с +7, 8 или +375";
    e.value = e.value.replace(/[^\+\(\)\-_\d]/gi, "");
    showError(e, str);
  }
};

const checkInputs = (event) => {
  const target = event.target;
  if (target.matches("#phone")) {
    validatePhone(target);
  }

  if (target.name === "fio") {
    validateCyrillic(target);
    validateLength(target);
  }
};
const validation = (form) => {
  form.addEventListener("input", (e) => {
    checkInputs(e);
  });
};

export { validateLength, validation };
