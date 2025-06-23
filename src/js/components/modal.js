import IMask from "imask";

export class Modal {
  constructor() {
    this.modal = document.querySelector("[data-modal]");
    this.openButtons = document.querySelectorAll(".modal-btn");
    this.closeButtons = document.querySelectorAll("[data-modal-close]");
    this.form = this.modal.querySelector("[data-form]");
    this.inputs = this.form.querySelectorAll(".form__input");

    this.isOpen = false;
    this.init();
  }

  init() {
    // Обработчики для плавающих лейблов
    this.inputs.forEach((input) => {
      // Добавляем пустой placeholder для работы :not(:placeholder-shown)
      input.setAttribute("placeholder", " ");

      // Проверяем начальное состояние
      this.checkInputValue(input);

      // Добавляем обработчики событий
      input.addEventListener("input", () => this.checkInputValue(input));
      input.addEventListener("focus", () => this.checkInputValue(input));
      input.addEventListener("blur", () => this.checkInputValue(input));
    });

    // Обработчики открытия/закрытия
    this.openButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.open());
    });

    this.closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.close());
    });

    // Закрытие по Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });

    // Обработка отправки формы
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  checkInputValue(input) {
    // Проверяем, есть ли значение в поле
    const hasValue = input.value.trim().length > 0;

    // Для поля телефона проверяем через маску
    if (input === this.phoneInput) {
      const unmaskedValue = this.phoneMask.unmaskedValue;
      input.classList.toggle("is-filled", unmaskedValue.length > 0);
    } else {
      input.classList.toggle("is-filled", hasValue);
    }
  }

  open() {
    this.isOpen = true;
    this.modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.isOpen = false;
    this.modal.classList.remove("is-open");
    document.body.style.overflow = "";
    this.form.reset();
    this.phoneMask.value = "";
    // Сбрасываем состояние всех полей
    this.inputs.forEach((input) => {
      input.classList.remove("is-filled");
    });
  }
}

// Инициализация модального окна
new Modal();
