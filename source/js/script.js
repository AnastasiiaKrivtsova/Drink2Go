const navMain = document.querySelector('.main-nav__list');
const navToggle = document.querySelector('.main-header__toggle');
const navToggleNoJs = document.querySelector('.main-header__toggle--no-js');

navToggle.classList.remove('main-header__toggle--no-js');
navMain.classList.add('main-nav__list--closed');
navMain.classList.remove('main-nav__list--is-open');
navMain.classList.remove('main-nav__list--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__list--closed')) {
    navMain.classList.remove('main-nav__list--closed');
    navMain.classList.add('main-nav__list--is-open');
    navToggle.classList.add('main-header__toggle--closed');
  } else {
    navMain.classList.add('main-nav__list--closed');
    navMain.classList.remove('main-nav__list--is-open');
    navToggle.classList.remove('main-header__toggle--closed');
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
});

var map = L.map('map').setView([59.968318, 30.317224], 17.61);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myIcon = L.icon({
  iconUrl: 'img/svg/map.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
  // popupAnchor: [-3, -76],
});


L.marker([59.968318, 30.317224], {icon: myIcon}).addTo(map);
