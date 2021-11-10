// Background Overlay
// function on() {
//   document.getElementById("overlay").style.display = "block";
// }

function off() {
  document.getElementById("overlay").style.display = "none";
}

async function fetchData(artist) {
  const response = `http://musicbrainz.org/ws/2/artist/?query=artist:sting%20AND%20type:group%20AND%20country:US&fmt=json`;
  console.log(url)
  // const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  // Write code here.
  try {
    const res = await axios.get(http://musicbrainz.org/ws/2/artist/?query=${artist}:sting%20AND%20type:group%20AND%20country:US&fmt=json);
    const countryData = res.data[0];
    showCountryData(countryData);
  } catch (error) {
    console.log(error);
    alert(`${country} not found`);
  }
}
