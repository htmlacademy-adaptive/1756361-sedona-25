const button = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.site-list');
// const logo = document.querySelector('.site-list__item--logo');
// const img = document.querySelector('.page__main-background');

// console.log(logo, img);
// logo.style.zIndex = '99';
// img.style.zIndex = '0';

button.addEventListener('click', () => {
  button.classList.toggle('main-nav__toggle--closed');
  button.classList.toggle('main-nav__toggle--opened');

  menu.classList.toggle('site-list--menu');
})
