import { Fancybox } from "@fancyapps/ui";

// Создаем аудио элемент
const sound = new Audio("./sound.mp3");
sound.volume = 0.5; // Устанавливаем громкость на 50%
sound.preload = "auto"; // Предзагружаем звук

// Флаг для отслеживания первого открытия
let isFirstOpen = true;

Fancybox.bind("[data-fancybox=sertificate]", {
  // Your custom options
  on: {
    init: (fancybox) => {
      // Перезагружаем звук перед воспроизведением
      sound.currentTime = 0;
      sound.play().catch((error) => {
        console.log("Ошибка воспроизведения звука:", error);
      });
    },
  },
});
