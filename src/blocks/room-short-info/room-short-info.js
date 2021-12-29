import addSpace from '../../libs/add-spaces';
import getDataRoom from '../../libs/data-finder';

function insertRoomInfo(room, elem) {
  const data = getDataRoom(room);
  const roomNode = elem;
  roomNode.firstElementChild.children[1].innerHTML = data.room;
  roomNode.firstElementChild.children[2].innerHTML = data.class;
  roomNode.lastElementChild.children[0].innerHTML = `${addSpace(data.price)}&#8381;`;
}

export default insertRoomInfo;
