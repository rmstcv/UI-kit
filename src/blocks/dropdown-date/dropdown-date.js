import createAirDatePicker from '../date-picker/date-picker';

class DatePicker {
  constructor(airDatepickerItem) {
    this.airDatepickerItem = airDatepickerItem;
    this.setDatesForPicker = this.setDatesForPicker.bind(this);
  }

  searchElemForPicker(elem) {
    const items = document.querySelectorAll(elem);
    let searchedElem;
    items.forEach((item) => {
      if (this.airDatepickerItem.closest('.dropdown-date') === item.closest('.dropdown-date')) {
        searchedElem = item;
      }
    });
    return searchedElem;
  }

  searchElemsForPicker(elems) {
    const items = document.querySelectorAll(elems);
    const searchedElems = [];
    items.forEach((item) => {
      if (this.airDatepickerItem.closest('.dropdown-date') === item.closest('.dropdown-date')) {
        searchedElems.push(item);
      }
    });
    return searchedElems;
  }

  setDatesForPicker() {
    const dateIn = localStorage.getItem('dateIn');
    const dateOut = localStorage.getItem('dateOut');
    let dateCheckIn = new Date(dateIn);
    let dateCheckOut = new Date(dateOut);
    const checkInInput = this.searchElemForPicker('.dropdown-date__input-check-in');
    const checkOutInput = this.searchElemForPicker('.dropdown-date__input-check-out');
    const checkInput = this.searchElemForPicker('.dropdown-date__input-check');
    const optionsDateDouble = {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    };
    const optionsDateSingle = {
      month: 'short',
      day: 'numeric',
    };
    if (checkInput) {
      if (!dateIn) dateCheckIn = 'ДД мес.';
      if (!dateOut) dateCheckOut = 'ДД мес.';
      dateCheckIn = dateCheckIn.toLocaleString('ru', optionsDateSingle);
      dateCheckOut = dateCheckOut.toLocaleString('ru', optionsDateSingle);
      checkInput.value = `${dateCheckIn} - ${dateCheckOut}`;
    }
    if (checkInInput && checkOutInput) {
      if (!dateIn) dateCheckIn = 'ДД.ММ.ГГГГ';
      if (!dateOut) dateCheckOut = 'ДД.ММ.ГГГГ';
      dateCheckIn = dateCheckIn.toLocaleString('ru', optionsDateDouble);
      dateCheckOut = dateCheckOut.toLocaleString('ru', optionsDateDouble);
      checkInInput.value = dateCheckIn;
      checkOutInput.value = dateCheckOut;
    }
  }

  showDatePicker() {
    const items = this.searchElemsForPicker('.dropdown-date__check-wrapper');
    items.forEach((item) => {
      item.addEventListener('click', () => {
        this.airDatepickerItem.parentNode.classList.toggle('dropdown-date__date-picker_hide');
      });
    });
  }
}

function addDropdownDatePicker() {
  const airDatepickers = document.querySelectorAll('.date-picker');
  airDatepickers.forEach((airDatepickerItem) => {
    const dropdownDatePicker = new DatePicker(airDatepickerItem);
    const dp = createAirDatePicker(airDatepickerItem, dropdownDatePicker.setDatesForPicker);
    const initDateIn = airDatepickerItem.parentNode.getAttribute('data-dateIn');
    const initDateOut = airDatepickerItem.parentNode.getAttribute('data-dateOut');
    console.log(initDateIn, initDateOut);
    if (initDateIn) localStorage.setItem('dateIn', initDateIn);
    if (initDateOut) localStorage.setItem('dateOut', initDateOut);
    // dropdownDatePicker.setDatesForPicker();
    dp.setFocusDate(dp.viewDate);
    dp.selectDate(initDateIn);
    dp.selectDate(initDateOut);
    dropdownDatePicker.showDatePicker();
  });
}

addDropdownDatePicker();
