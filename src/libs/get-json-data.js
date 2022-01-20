async function getJsonData(url, room) {
  const response = await fetch(url);
  const jsonData = await response.json();

  let roomInfo = null;
  for (let i = 0; i < jsonData.length; i += 1) {
    if (jsonData[i].room === room) {
      roomInfo = jsonData[i];
      break;
    }
  }
  return roomInfo;
}

export default getJsonData;
