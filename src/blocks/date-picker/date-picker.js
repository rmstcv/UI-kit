import AirDatepicker from 'air-datepicker';

function createAirDatePicker(airDatepickerItem, callback) {
  let [dateCheckIn, dateCheckOut] = [];
  let dateFormat = 'dd.MM.yyyy';
  if (airDatepickerItem.parentNode.classList.contains('dropdown-date__date-picker-double')) {
    dateFormat = 'dd.MMM';
  }
  const dp = new AirDatepicker(airDatepickerItem, {
    range: true,
    multipleDatesSeparator: ' - ',
    inline: true,
    onSelect() {
      [dateCheckIn, dateCheckOut] = dp.selectedDates;
      dateCheckIn = dp.formatDate(dateCheckIn, dateFormat);
      if (dateCheckOut) dateCheckOut = dp.formatDate(dateCheckOut, dateFormat);
      airDatepickerItem.setAttribute('data-datesOfCheck', [dateCheckIn, dateCheckOut]);
      if (callback) callback(dateCheckIn, dateCheckOut);
      localStorage.setItem('dateIn', dateCheckIn);
    },
  });
  return dp;
}

export default createAirDatePicker;
