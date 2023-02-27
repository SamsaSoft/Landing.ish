//валидация

let validator = new JustValidate("#form");

validator.addField("#email", [
  {
    rule: "customRegexp",
    value:
      /^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/gi,
    errorMessage: "Ошибка",
  },
  {
    rule: "required",
    errorMessage: "Введите правильно",
  },
  {
    rule: "email",
    errorMessage: "Введите правильно электронную почту",
  },
]);
