import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";
Swiper.use([Pagination]);

new Swiper(".about__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".about__pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
