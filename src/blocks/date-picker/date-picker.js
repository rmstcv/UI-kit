import AirDatepicker from 'air-datepicker';

function createAirDatePicker(airDatepickerItem, setDates, showDates) {
  let [dateCheckIn, dateCheckOut] = [];
  const button = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
      const date = new Date('2021-07-26');
      dp.selectDate(date);
    },
  };
  let initDateIn = airDatepickerItem.parentNode.getAttribute('data-dateIn');
  let initDateOut = airDatepickerItem.parentNode.getAttribute('data-dateOut');
  if (!initDateIn) initDateIn = '';
  if (!initDateOut) initDateOut = '';
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
      if (setDates) setDates(dateCheckIn, dateCheckOut);
      if (showDates) showDates(dateCheckIn, dateCheckOut);
    },
    selectedDates: [initDateIn, initDateOut],
  });
  return dp;
}

export default createAirDatePicker;
