import createAirDatePicker from '../date-picker/date-picker';

createAirDatePicker(document.querySelector('.forms-block__date-picker .js-date-picker'));

function addCurrentDate() {
  const elem = document.querySelector('.forms-block__date-picker .js-date-picker .air-datepicker-body--cells.-days-');
  elem.children[10].classList.add('-current-');
}

addCurrentDate();
