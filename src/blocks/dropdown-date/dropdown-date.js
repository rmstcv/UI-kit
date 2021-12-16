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

  setDatesForPicker(dateCheckIn, dateCheckOut) {
    const checkInInput = this.searchElemForPicker('.dropdown-date__input-check-in');
    const checkOutInput = this.searchElemForPicker('.dropdown-date__input-check-out');
    const checkInput = this.searchElemForPicker('.dropdown-date__input-check');
    // const dates = this.airDatepickerItem.getAttribute('data-datesOfCheck').split(',');
    // const [dateCheckIn, dateCheckOut] = dates;
    if (checkInput) {
      if (dateCheckOut) {
        checkInput.value = `${dateCheckIn} - ${dateCheckOut}`;
      } else {
        checkInput.value = `${dateCheckIn} - ДД.ММ.ГГГГ`;
      }
    }
    if (checkInInput && checkOutInput) {
      if (dateCheckIn) {
        checkInInput.value = dateCheckIn;
      }
      if (dateCheckOut) {
        checkOutInput.value = dateCheckOut;
      } else {
        checkOutInput.value = 'ДД.ММ.ГГГГ';
      }
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
    // dropdownDatePicker.addDateUpdater();
    const dp = createAirDatePicker(airDatepickerItem, dropdownDatePicker.setDatesForPicker);
    dp.setFocusDate(dp.viewDate);
    fetch('../../db.json')
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('dateIn', result.dateIn);
        dp.selectDate(localStorage.getItem('dateIn'));
        dp.selectDate(result.dateOut);
      });
    // dp.selectDate('2021-08-06');
    // dp.selectDate('2021-08-17');
    dropdownDatePicker.showDatePicker();
  });
}

addDropdownDatePicker();
