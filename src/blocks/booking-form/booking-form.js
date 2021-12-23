import data from '../../data.json';
import addDropdownDate from '../dropdown-date/dropdown-date';

addDropdownDate('.booking-form .js-date-picker');

localStorage.setItem('room', '888');

class BookingForm {
  constructor(form) {
    this.form = document.querySelector(form);
    this.rooms = data;
    this.roomData = this.getRoom();
  }

  getRoom() {
    const room = localStorage.getItem('room');
    let roomInfo;
    for (let i = 0; i < this.rooms.length; i += 1) {
      if (this.rooms[i].room === room) {
        roomInfo = this.rooms[i];
        break;
      }
    }
    return roomInfo;
  }

  static addSpace(num) {
    const digitNum = num.toString().split('');
    const digitNumNew = [];
    for (let i = 0; i < digitNum.length; i += 1) {
      digitNumNew.unshift(digitNum[digitNum.length - 1 - i]);
      if ((i + 1) % 3 === 0) {
        digitNumNew.unshift(' ');
      }
    }
    return digitNumNew.join('');
  }

  insertRoomInfo() {
    const roomInfoElem = document.createElement('div');
    const content = `
      <div>
        <span class = "booking-form__num" >№</span><span class = "booking-form__room">${this.roomData.room}</span><span class = "booking-form__class">${this.roomData.class}</span>
      </div>
      <div>
        <span class = "booking-form__price">${BookingForm.addSpace(this.roomData.price)}&#8381;</span><span class = "booking-form__text">в сутки</span>
      </div>
    `;
    roomInfoElem.classList.add('booking-form__room-info');
    roomInfoElem.innerHTML = content;
    this.form.prepend(roomInfoElem);
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
    const total = BookingForm.addSpace(addServices + services - sale + (price * days));
    if (days === 1) daysPostfix = 'сутки';
    const content = `
    <div class = "booking-form__value-calc">
      <div>${BookingForm.addSpace(this.roomData.price)}&#8381; x ${days} ${daysPostfix}</div>
      <div>${BookingForm.addSpace(price * days)}&#8381;</div>
    </div>
    <div class = "booking-form__value-calc">
      <div>Сбор за услуги: скидка ${BookingForm.addSpace(sale)}&#8381;</div>
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
    this.insertRoomInfo();
    this.insertCalcInfo();
    console.log(this.form);
  }
}

const bookingForm = new BookingForm('.booking-form');
bookingForm.init();
