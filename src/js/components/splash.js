document.addEventListener("DOMContentLoaded", function () {
  const splash = document.getElementById("splash");
  if (!splash) return;

  // Ждём полной отрисовки path
  window.addEventListener("load", function () {
    // Ждём завершения анимации stroke
    setTimeout(() => {
      splash.classList.add("splash--fill");
      // После заливки — glow и скрытие
      setTimeout(() => {
        splash.classList.add("splash--glow");
        setTimeout(() => {
          splash.classList.add("splash--hide");
          setTimeout(() => {
            splash.remove();
          }, 700);
        }, 1200);
      }, 700); // время появления заливки
    }, 2100); // время отрисовки stroke
  });
});
