import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// 新增swiper
var headerswiper = new Swiper(".headerSwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});

var indexswiper = new Swiper(".indexSwiper", {
  slidesPerView: "auto",
  lazy: true,
  freeMode: true,
  spaceBetween: 12,
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  },
});

var contactsoonswiper = new Swiper(".contactsoonSwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});


var feedbackswiper = new Swiper(".feedbackSwiper", {
  slidesPerView: "auto",
  lazy: true,
  freeMode: true,
  spaceBetween: 24,

});