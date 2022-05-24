const button = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.site-list');

menu.classList.add('site-list--menu');

button.addEventListener('click', () => {
  button.classList.toggle('main-nav__toggle--closed');
  button.classList.toggle('main-nav__toggle--opened');

  menu.classList.toggle('site-list--menu');
})
