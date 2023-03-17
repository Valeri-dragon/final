
const removeMessage = (elem) => {
  setTimeout(() => {
    elem.textContent = "";
  }, 5000);
};

let error = document.createElement("span");
 error.classList.add("addError");
  error.textContent=''

const showError = (input, message) => {
  const formField = input.parentElement;
formField.classList.remove("success");
formField.classList.add("error");
 error.textContent = message;
 formField.after(error);
 };

const showSuccess = (input) => {
   const formField = input.parentElement;
 formField.classList.remove("error");
   formField.classList.add("success");
   error.textContent = "";
error.remove()
};


export { removeMessage, showError, showSuccess};