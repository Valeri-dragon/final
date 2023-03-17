import { showError, showSuccess } from "./helpers";
const validation = (form) => {
  
  let str;
  const validateCyrillic = (e) => {
    if (!/[а-яё]+/gi.test(e.value.trim())) {
      str = "Можно использовать кириллицу, пробел или дефис";
      showError(e, str);

      e.value = e.value.replace(/[a-z\s\d]+/gi, "");
    } else if (e.value.length !== 2) {
      str = "Имя не может быть меньше 2 букв";
      showError(e, str);
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
  
  form.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "username":
        validateCyrillic(e.target) && showSuccess(e);

        break;
      case "phone":
        validatePhone(e.target);
        break;
         }
  });
};
export default validation;
