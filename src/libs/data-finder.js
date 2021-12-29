import data from '../data.json';

function getDataRoom(room) {
  let roomInfo;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].room === room) {
      roomInfo = data[i];
      break;
    }
  }
  return roomInfo;
}

export default getDataRoom;
