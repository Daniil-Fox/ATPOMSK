import { validateForms } from "./../functions/validate-forms.js";
const checks = [
  {
    selector: ".checkbox-group",
    errorMessage: "Выберите чекбоксы",
  },
];
const checks2 = [
  {
    selector: ".checkbox-group2",
    errorMessage: "Выберите чекбоксы",
  },
];
const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 2,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];
const rules2 = [
  {
    ruleSelector: "#cta-name",
    rules: [
      {
        rule: "minLength",
        value: 2,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: "#cta-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".modal__form", rules1, checks, afterForm);
validateForms(".cta__form", rules2, checks2, afterForm);
