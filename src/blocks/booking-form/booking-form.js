import data from '../../data.json';
import addDropdownDate from '../dropdown-date/dropdown-date';

addDropdownDate('.booking-form .js-date-picker');

localStorage.setItem('room', '888');

class BookingForm {
  constructor(form, rooms) {
    this.form = document.querySelector(form);
    this.rooms = rooms;
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

  insertRoomInfo() {
    // const roomData = this.getRoom();
    const roomInfoElem = document.createElement('div');
    const content = `
      <div>
        <span class = "booking-form__num" >№</span><span class = "booking-form__room">${this.roomData.room}</span><span class = "booking-form__class">${this.roomData.class}</span>
      </div>
      <div>
        <span class = "booking-form__price">${this.roomData.price}Р</span><span class = "booking-form__text">в сутки</span>
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
    const total = addServices + services + (price * days);
    if (days === 1) daysPostfix = 'сутки';
    const content = `
    <div class = "booking-form__value-calc">
      <div>${this.roomData.price} x ${days} ${daysPostfix}</div>
      <div>${price * days}</div>
    </div>
    <div class = "booking-form__value-calc">
      <div>Сбор за услуги: скидка ${sale}</div>
      <div>${addServices}</div>
    </div>
    <div class = "booking-form__value-calc">
      <div>Сбор за дополнительные услуги</div>
      <div>${services}</div>
    </div>
    <div class = "booking-form__value-calc booking-form__value-calc_big">
      <div>Итого</div>
      <div>${total}</div>
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

const bookingForm = new BookingForm('.booking-form', data);
bookingForm.init();
