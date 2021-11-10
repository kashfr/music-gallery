// Background Overlay
// function on() {
//   document.getElementById("overlay").style.display = "block";
// }

function off() {
  document.getElementById("overlay").style.display = "none";
}

async function fetchData() {
  // Write code here.
  try {
    const response = `http://musicbrainz.org/ws/2/artist/?query=artist:sting%20AND%20type:group%20AND%20country:US&fmt=json`;
    const res = await axios.get(response);
    const artistData = res.data;
    console.log(artistData)
  } catch (error) {
    console.log(error);
    alert(`${artist} artist not found`);
  }
}
fetchData()