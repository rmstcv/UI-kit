import createAirDatePicker from '../date-picker/date-picker';

function addCurrentDate() {
  const picker = document.querySelector('.forms-block__date-picker .js-date-picker');
  createAirDatePicker(picker);
  const airPicker = document.querySelector('.forms-block__date-picker .air-datepicker.-inline-');
  airPicker.style.position = 'relative';
  picker.style.position = 'relative';
  const elem = document.querySelector('.forms-block__date-picker .js-date-picker .air-datepicker-body--cells.-days-');
  elem.children[10].classList.add('-current-');
}

function remNav() {
  const navsPrev = document.querySelectorAll('.swiper-button-prev');
  const navsNext = document.querySelectorAll('.swiper-button-next');
  navsPrev[1].style.display = 'none';
  navsNext[1].style.display = 'none';
}

remNav();
addCurrentDate();
