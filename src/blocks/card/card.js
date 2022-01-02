import data from '../../data.json';
import insertRoomInfo from '../room-short-info/room-short-info';
import addStars from '../button-rate/button-rate';

class Card {
  constructor(cardElem) {
    this.room = cardElem.getAttribute('data-room');
    this.cardRoom = this.getRoomData(this.room);
    this.cardElem = cardElem;
  }

  findElem(elemClass) {
    const elems = document.querySelectorAll(elemClass);
    let elem;
    for (let i = 0; i < elems.length; i += 1) {
      if (elems[i].closest('.room-card') === this.cardElem) {
        elem = elems[i];
      }
    }
    return elem;
  }

  getRoomData() {
    let roomInfo;
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].room === this.room) {
        roomInfo = data[i];
        break;
      }
    }
    return roomInfo;
  }

  addCardImage() {
    const card = document.createElement('div');
    card.classList.add('room-card__image');
    const [img] = this.cardRoom.images;
    card.innerHTML = `<img src=${img} alt="image" loading="lazy" width="270">`;
    this.cardElem.prepend(card);
  }

  addStarsRate() {
    const star = this.findElem('.rate-buttons');
    star.setAttribute('data-rate', this.cardRoom.stars);
    addStars(star);
  }

  addRoomRate() {
    const rate = this.findElem('.room-card__rate-info');
    rate.innerHTML = `${this.cardRoom.reviews} <span>Отзывов</span>`;
  }

  cardInit() {
    this.addCardImage();
    this.addRoomRate();
    this.addStarsRate();
  }
}
Card.prototype.addStars = addStars;
const cards = document.querySelectorAll('.room-card');
cards.forEach((elem) => {
  const room = elem.getAttribute('data-room');
  const card = new Card(elem);
  card.cardInit();
  insertRoomInfo(room, elem.childNodes[1].childNodes[0]);
});
