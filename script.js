

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
const domain = `https://www.theaudiodb.com/`;
const apiKey = 523532;
const TADB_Artist_ID = 112024;

const artistData = `https://www.theaudiodb.com/api/v1/json/${apiKey}/artist.php?i=${TADB_Artist_ID}`
const artist = "kanye_west";
console.log(artistData)



// const artwork = await axios.get;

async function fetchData() {
  // Write code here.
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${artist}`;
    const res = await axios.get(response);
    const artistData = res.data;
    console.log(res.data.strAlbumThumb)
    console.log(artistData)
  } catch (error) {
    console.log(error);
    alert(`${artist} artist not found`);
  }
}
fetchData()

async function fetchArtistData() {
  // Write code here.
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/523532/artist.php?i=112024`;
    const res = await axios.get(response);
    const artistData = res.data;
    console.log(artistData)
  } catch (error) {
    console.log(error);
    alert(`${artist} artist not found`);
  }
}
fetchArtistData()

// https://www.last.fm/music/Drake/Certified+Lover+Boy

// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=2pac
// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=kanye_west