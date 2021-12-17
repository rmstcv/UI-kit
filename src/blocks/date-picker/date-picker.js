import AirDatepicker from 'air-datepicker';

function createAirDatePicker(airDatepickerItem, callback) {
  let [dateCheckIn, dateCheckOut] = [];
  const button = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
      const date = new Date('2021-07-26');
      dp.selectDate(date);
    },
  };
  const dp = new AirDatepicker(airDatepickerItem, {
    range: true,
    multipleDatesSeparator: ' - ',
    inline: true,
    // navTitles: {
    //   days: 'MMMM yyyy',
    // },
    buttons: ['clear', button],
    onSelect() {
      [dateCheckIn, dateCheckOut] = dp.selectedDates;
      // localStorage.setItem('dateIn', dateCheckIn);
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
      if (callback) callback();
    },
  });
  return dp;
}

export default createAirDatePicker;
