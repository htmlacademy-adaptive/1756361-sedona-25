const button = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.site-list');

menu.classList.add('site-list--menu');

button.addEventListener('click', () => {
  button.classList.toggle('main-nav__toggle--closed');
  button.classList.toggle('main-nav__toggle--opened');

  menu.classList.toggle('site-list--menu');
})

var map = new GMaps({
  div: '#gmap',
  lat: 55.7722200,
  lng: 37.6155600,
  zoom: 11
});

map.addMarkers(
  [{
      "lat": "55.767293",
      "lng": "37.544298",
      "icon": "source/img/pin.svg"
  }]
);
