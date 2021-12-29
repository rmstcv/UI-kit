// import data from '../../data.json';
import addDropdownDate from '../dropdown-date/dropdown-date';
import insertRoomInfo from '../room-short-info/room-short-info';
import addSpace from '../../libs/add-spaces';
import getDataRoom from '../../libs/data-finder';

addDropdownDate('.booking-form .js-date-picker');
localStorage.setItem('room', '888');

class BookingForm {
  constructor() {
    this.form = document.querySelector('.booking-form');
    this.room = localStorage.getItem('room');
    this.roomData = this.getDataRoom(this.room);
  }

  insertCalcInfo() {
    const calcInfoElem = document.createElement('div');
    const price = Number(this.roomData.price.replace(/\s/g, ''));
    const dayIn = new Date('Tue Jul 23 2019 00:00:00 GMT+0500 (Екатеринбург, стандартное время)');
    const dayOut = new Date('Tue Jul 27 2019 00:00:00 GMT+0500 (Екатеринбург, стандартное время)');
    const days = (dayOut.getTime() - dayIn.getTime()) / 86400000;
    let daysPostfix = 'суток';
    const addServices = 0;
    const sale = 2179;
    const services = 300;
    const total = this.addSpace(addServices + services - sale + (price * days));
    if (days === 1) daysPostfix = 'сутки';
    const content = `
    <div class = "booking-form__value-calc">
      <div>${this.addSpace(this.roomData.price)}&#8381; x ${days} ${daysPostfix}</div>
      <div>${this.addSpace(price * days)}&#8381;</div>
    </div>
    <div class = "booking-form__value-calc">
      <div>Сбор за услуги: скидка ${this.addSpace(sale)}&#8381;</div>
      <div>${addServices}&#8381;</div>
    </div>
    <div class = "booking-form__value-calc">
      <div>Сбор за дополнительные услуги</div>
      <div>${services}&#8381;</div>
    </div>
    <div class = "booking-form__value-calc booking-form__value-calc_big">
      <div>Итого</div>
      <div>${total}&#8381;</div>
    </div>
    `;
    calcInfoElem.classList.add('booking-form__calc-content');
    calcInfoElem.innerHTML = content;
    document.querySelector('.booking-form__calc').appendChild(calcInfoElem);
  }

  init() {
    this.insertRoomInfo(this.room, this.form.firstElementChild);
    this.insertCalcInfo();
  }
}
BookingForm.prototype.insertRoomInfo = insertRoomInfo;
BookingForm.prototype.addSpace = addSpace;
BookingForm.prototype.getDataRoom = getDataRoom;
const bookingForm = new BookingForm();
bookingForm.init();
