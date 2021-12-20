import createAirDatePicker from '../date-picker/date-picker';

class DatePicker {
  constructor(airDatepickerItem) {
    this.airDatepickerItem = airDatepickerItem;
    this.showDates = this.showDates.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
  }

  searchElemForPicker(elem) {
    const items = document.querySelectorAll(elem);
    let searchedElem;
    items.forEach((item) => {
      if (this.airDatepickerItem.closest('.js-dropdown-date') === item.closest('.js-dropdown-date')) {
        searchedElem = item;
      }
    });
    return searchedElem;
  }

  searchElemsForPicker(elems) {
    const items = document.querySelectorAll(elems);
    const searchedElems = [];
    items.forEach((item) => {
      if (this.airDatepickerItem.closest('.js-dropdown-date') === item.closest('.js-dropdown-date')) {
        searchedElems.push(item);
      }
    });
    return searchedElems;
  }

  static setDates(dateCheckIn, dateCheckOut) {
    if (dateCheckIn) {
      localStorage.setItem('dateIn', dateCheckIn);
    } else {
      localStorage.removeItem('dateIn');
    }
    if (dateCheckOut) {
      localStorage.setItem('dateOut', dateCheckOut);
    } else {
      localStorage.removeItem('dateOut');
    }
  }

  showDates(dateIn, dateOut) {
    let dateCheckIn = new Date(dateIn);
    let dateCheckOut = new Date(dateOut);
    const checkInInput = this.searchElemForPicker('.js-dropdown-date__input-check-in');
    const checkOutInput = this.searchElemForPicker('.js-dropdown-date__input-check-out');
    const checkInput = this.searchElemForPicker('.js-dropdown-date__input-check');
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
    const items = this.searchElemsForPicker('.js-dropdown-date__check-wrapper');
    items.forEach((item) => {
      item.addEventListener('click', () => {
        this.airDatepickerItem.classList.toggle('date-picker_hide');
      });
    });
  }

  initDatePicker() {
    const initDateIn = this.airDatepickerItem.getAttribute('data-dateIn');
    const initDateOut = this.airDatepickerItem.getAttribute('data-dateOut');
    localStorage.removeItem('dateIn');
    localStorage.removeItem('dateOut');
    this.showDatePicker();
    this.showDates(initDateIn, initDateOut);
  }
}

function addDropdownDate(picker) {
  const airDatepickers = document.querySelectorAll(picker);
  airDatepickers.forEach((airDatepickerItem) => {
    const DropDate = new DatePicker(airDatepickerItem);
    const args = [
      airDatepickerItem,
      DatePicker.setDates,
      DropDate.showDates,
    ];
    createAirDatePicker(...args);
    DropDate.initDatePicker();
  });
}

addDropdownDate('.js-dropdown-date__date-picker-double .js-date-picker');
addDropdownDate('.js-dropdown-date__date-picker-single .js-date-picker');
