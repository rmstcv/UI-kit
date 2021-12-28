import addSpace from '../../libs/add-spaces';

function insertRoomInfo(room) {
  document.querySelector('.room-short-info__room').innerHTML = room.room;
  document.querySelector('.room-short-info__class').innerHTML = room.class;
  document.querySelector('.room-short-info__price').innerHTML = `${addSpace(room.price)}&#8381;`;
}

export default insertRoomInfo;
