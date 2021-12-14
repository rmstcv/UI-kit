import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// const airDatepicker = new AirDatepicker('.date-picker', {
//   range: true,
//   multipleDatesSeparator: ' - ',
// });

// airDatepicker();

function addAirDatepicker() {
  const airDatepickers = document.querySelectorAll('.date-picker');
  // let dpMax;
  airDatepickers.forEach((airDatepickerItem) => {
    // eslint-disable-next-line
    let dp = new AirDatepicker(airDatepickerItem, {
      range: true,
      multipleDatesSeparator: ' - ',
      inline: true,
      onSelect() {
        // dpMax.update({
        //   minDate: date,
        // });
        console.log(dp.selectedDates);
      },
    });
    dp.setFocusDate(dp.viewDate);
    // let dpMin = 0;
    // let dpMax = 0;
    // dpMin = new AirDatepicker(airDatepickerItem, {
    //   range: true,
    //   onSelect({ date }) {
    //     dpMax.update({
    //       minDate: date,
    //     });
    //     console.log(date);
    //   },
    // });

    // dpMax = new AirDatepicker(airDatepickerItem, {
    //   range: true,
    //   onSelect({ date }) {
    //     dpMin.update({
    //       maxDate: date,
    //     });
    //     console.log(date);
    //   },
    // });
  });
}

addAirDatepicker();
