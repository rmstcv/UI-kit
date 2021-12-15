// import AirDatepicker from 'air-datepicker';
// // import 'air-datepicker/air-datepicker.css';

// class DatePicker {
//   constructor(airDatepickerItem) {
//     this.airDatepickerItem = airDatepickerItem;
//   }

//   searchElemForPicker(items) {
//     let item;
//     items.forEach((elem) => {
//       if (this.airDatepickerItem.closest('.dropdown-date') === elem.closest('.dropdown-date')) {
//         item = elem;
//       }
//     });
//     return item;
//   }

//   setDatesForPicker(dateCheckIn, dateCheckOut) {
//     const checkInInputs = document.querySelectorAll('.dropdown-date__input-check-in');
//     const checkOutInputs = document.querySelectorAll('.dropdown-date__input-check-out');
//     const checkInInput = this.searchElemForPicker(checkInInputs);
//     const checkOutInput = this.searchElemForPicker(checkOutInputs);
//     if (dateCheckIn) {
//       checkInInput.value = dateCheckIn;
//     }
//     if (dateCheckOut) {
//       checkOutInput.value = dateCheckOut;
//     } else {
//       checkOutInput.value = '';
//     }
//   }

//   initialDatePicker() {
//     const setDatesForPicker = this.setDatesForPicker.bind(this);
//     const airDatepickerItem = this.airDatepickerItem;
//     let [dateCheckIn, dateCheckOut] = [];
//     const dp = new AirDatepicker(this.airDatepickerItem, {
//       range: true,
//       multipleDatesSeparator: ' - ',
//       inline: true,
//       onSelect() {
//         [dateCheckIn, dateCheckOut] = dp.selectedDates;
//         dateCheckIn = dp.formatDate(dateCheckIn, 'dd.MM.yyyy');
//         if (dateCheckOut) dateCheckOut = dp.formatDate(dateCheckOut, 'dd.MM.yyyy');
//         // setDatesForPicker(dateCheckIn, dateCheckOut);
//         airDatepickerItem.setAttribute('data-datesOfCheck', 22);
//         console.log(airDatepickerItem);
//       },
//     });
//     dp.setFocusDate(dp.viewDate);
//     dp.selectDate('2021-12-06');
//     dp.selectDate('2021-12-17');
//   }
// }

// function addAirDatePicker() {
//   const airDatepickers = document.querySelectorAll('.date-picker');
//   airDatepickers.forEach((airDatepickerItem) => {
//     const datePicker = new DatePicker(airDatepickerItem);
//     datePicker.initialDatePicker();
//   });
// }

// addAirDatePicker();

import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

// function addAirDatePicker() {
//   const airDatepickers = document.querySelectorAll('.date-picker');
//   airDatepickers.forEach((airDatepickerItem) => {
//     // const datePicker = new DatePicker(airDatepickerItem);
//     // datePicker.initialDatePicker();
//     let [dateCheckIn, dateCheckOut] = [];
//     const dp = new AirDatepicker(airDatepickerItem, {
//       range: true,
//       multipleDatesSeparator: ' - ',
//       inline: true,
//       onSelect() {
//         [dateCheckIn, dateCheckOut] = dp.selectedDates;
//         dateCheckIn = dp.formatDate(dateCheckIn, 'dd.MM.yyyy');
//         if (dateCheckOut) dateCheckOut = dp.formatDate(dateCheckOut, 'dd.MM.yyyy');
//         // setDatesForPicker(dateCheckIn, dateCheckOut);
//         airDatepickerItem.setAttribute('data-datesOfCheck', [dateCheckIn, dateCheckOut]);
//       },
//     });
//     dp.setFocusDate(dp.viewDate);
//     dp.selectDate('2021-12-06');
//     dp.selectDate('2021-12-17');
//   });
// }

// addAirDatePicker();

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

  setDatesForPicker(dateCheckIn, dateCheckOut) {
    const checkInInput = this.searchElemForPicker('.dropdown-date__input-check-in');
    const checkOutInput = this.searchElemForPicker('.dropdown-date__input-check-out');
    // const dates = this.airDatepickerItem.getAttribute('data-datesOfCheck').split(',');
    // console.log(dates);
    // const [dateCheckIn, dateCheckOut] = dates;
    if (dateCheckIn) {
      checkInInput.value = dateCheckIn;
    }
    if (dateCheckOut) {
      checkOutInput.value = dateCheckOut;
    } else {
      checkOutInput.value = '';
    }
  }

  // addDateUpdater() {
  //   const airDatepicker = this.searchElemForPicker('.air-datepicker');
  //   airDatepicker.addEventListener('click', () => {
  //     this.setDatesForPicker();
  //   });
  // }
}

function addAirDatePicker(airDatepickerItem, callback) {
  let [dateCheckIn, dateCheckOut] = [];
  const dp = new AirDatepicker(airDatepickerItem, {
    range: true,
    multipleDatesSeparator: ' - ',
    inline: true,
    onSelect() {
      [dateCheckIn, dateCheckOut] = dp.selectedDates;
      dateCheckIn = dp.formatDate(dateCheckIn, 'dd.MM.yyyy');
      if (dateCheckOut) dateCheckOut = dp.formatDate(dateCheckOut, 'dd.MM.yyyy');
      // setDatesForPicker(dateCheckIn, dateCheckOut);
      airDatepickerItem.setAttribute('data-datesOfCheck', [dateCheckIn, dateCheckOut]);
      if (callback) callback(dateCheckIn, dateCheckOut);
    },
  });
  dp.setFocusDate(dp.viewDate);
  dp.selectDate('2021-12-06');
  dp.selectDate('2021-12-17');
}

function addDropdownDatePicker() {
  const airDatepickers = document.querySelectorAll('.date-picker');
  airDatepickers.forEach((airDatepickerItem) => {
    const dropdownDatePicker = new DatePicker(airDatepickerItem);
    // dropdownDatePicker.addDateUpdater();
    addAirDatePicker(airDatepickerItem, dropdownDatePicker.setDatesForPicker);
  });
}

addDropdownDatePicker();
// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

// function searchElemForPicker(airDatepickerItem, items) {
//   let item;
//   items.forEach((elem) => {
//     if (airDatepickerItem.closest('.dropdown-date') === elem.closest('.dropdown-date')) {
//       item = elem;
//     }
//   });
//   return item;
// }

// function setDatesForPicker(dateCheckIn, dateCheckOut, airDatepickerItem) {
//   const checkInInputs = document.querySelectorAll('.dropdown-date__input-check-in');
//   const checkOutInputs = document.querySelectorAll('.dropdown-date__input-check-out');
//   const checkInInput = searchElemForPicker(airDatepickerItem, checkInInputs);
//   const checkOutInput = searchElemForPicker(airDatepickerItem, checkOutInputs);
//   if (dateCheckIn) {
//     checkInInput.value = dateCheckIn;
//   }
//   if (dateCheckOut) {
//     checkOutInput.value = dateCheckOut;
//   } else {
//     checkOutInput.value = '';
//   }
// }

// function addAirDatePicker() {
//   const airDatepickers = document.querySelectorAll('.date-picker');
//   airDatepickers.forEach((airDatepickerItem) => {
//     const dp = new AirDatepicker(airDatepickerItem, {
//       range: true,
//       multipleDatesSeparator: ' - ',
//       inline: true,
//       onSelect() {
//         let [dateCheckIn, dateCheckOut] = dp.selectedDates;

//         dateCheckIn = dp.formatDate(dateCheckIn, 'dd.MM.yyyy');
//         if (dateCheckOut) dateCheckOut = dp.formatDate(dateCheckOut, 'dd.MM.yyyy');
//         setDatesForPicker(dateCheckIn, dateCheckOut, airDatepickerItem);
//       },
//     });
//     dp.setFocusDate(dp.viewDate);
//     dp.selectDate('2021-12-06');
//     dp.selectDate('2021-12-17');
//   });
// }

// addAirDatePicker();
