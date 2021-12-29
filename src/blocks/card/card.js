import data from '../../data.json';
import insertRoomInfo from '../room-short-info/room-short-info';

class Card {
  constructor(room) {
    this.room = room;
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

  addCard() {
    const cards = document.querySelectorAll('.room-card');
    let cardElem;
    cards.forEach((elem) => {
      if (elem.getAttribute('data-room') === this.room) cardElem = elem;
    });
    const cardRoom = this.getRoomData(this.room);
    const card = document.createElement('div');
    card.classList.add('room-card');
    const [img] = cardRoom.images;
    card.innerHTML = `<img src=${img} alt="image" loading="lazy" width="270">`;
    cardElem.appendChild(card);
  }
}

const cards = document.querySelectorAll('.room-card');
cards.forEach((elem) => {
  const room = elem.getAttribute('data-room');
  const card = new Card(room);
  card.addCard();
  insertRoomInfo(room, elem.firstElementChild);
});
