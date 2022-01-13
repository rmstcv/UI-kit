import data from '../../data.json';
import insertRoomInfo from '../room-short-info/room-short-info';
import addStars from '../button-rate/button-rate';
import swiper from '../swiper/swiper';

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
    this.cardRoom.images.forEach((item) => {
      const img = document.createElement('div');
      img.classList.add('swiper-slide');
      img.innerHTML = `<img src=${item} alt="image" loading="lazy" width="270">`;
      this.findElem('.swiper-wrapper').prepend(img);
    });
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
  swiper();
});
