import data from '../../data.json';
import insertRoomInfo from '../room-short-info/room-short-info';

function addCards() {
  console.log(data);
  const cards = document.querySelector('.rooms-cards');
  const card = document.createElement('div');
  card.classList.add('room-card');
  const [img] = data[0].images;
  card.innerHTML = `<img src=${img} alt="image" loading="lazy" width="270">`;
  cards.appendChild(card);
}

function getRoom(room) {
  let roomInfo;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].room === room) {
      roomInfo = data[i];
      break;
    }
  }
  return roomInfo;
}
const cardRoom = getRoom('888');
addCards();
insertRoomInfo(cardRoom);
