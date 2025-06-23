import { Swiper } from "swiper";
import { Pagination, Thumbs } from "swiper/modules";
Swiper.use([Pagination, Thumbs]);

new Swiper(".about__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".about__pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
    },
    769: {
      sliderPerView: 3,
    },
  },
});

const thumbsProd = new Swiper(".product__thumbs", {
  slidesPerView: "auto",
  spaceBetween: 10,
});
new Swiper(".product__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 500,
  thumbs: {
    swiper: thumbsProd,
  },
});
new Swiper(".docs__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  speed: 500,
});
