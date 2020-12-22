
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper('.swiper-container', {
    slidesPerViwe: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });