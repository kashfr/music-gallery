// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
const domain = `https://www.theaudiodb.com/`;
const apiKey = 523532;
let TADB_Artist_ID = 112024;

let artistData = `https://www.theaudiodb.com/api/v1/json/${apiKey}/artist.php?i=${TADB_Artist_ID}`;
let artist = "kanye_west";
let backgroundImage = document.querySelector(".background-image");
let albumInfo = document.querySelector(".artwork-info");
// document.getElementById("test").innerHTML = "Ye Season";

async function fetchAlbumData() {
  // Write code here.
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${artist}`;
    const res = await axios.get(response);
    const albumData = res.data;
    let description = albumData.album[0].strDescriptionEN;
    let artwork = albumData.album[0].strAlbumThumb;
    let idArtist = albumData.album[0].idArtist;
    console.log(idArtist);
    // backgroundImage.innerHTML = albumData.album[0].strAlbumThumb;
    // const album = res.data.album.strAlbumThumb;
    console.log(albumData);
    console.log(albumData.album[0].strAlbumThumb);
    // console.log(albumData.album[0].strDescriptionEN);
    console.log(description);
  } catch (error) {
    console.log(error);
    alert(`${artist} album not found`);
  }
}
fetchAlbumData();

async function fetchArtistData() {
  // Write code here.
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/523532/artist.php?i=111822`;
    const res = await axios.get(response);
    const artistData = res.data;
    console.log(artistData);
  } catch (error) {
    console.log(error);
    alert(`${artist} artist not found`);
  }
}
fetchArtistData();

// https://www.last.fm/music/Drake/Certified+Lover+Boy

// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=2pac
// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=kanye_west

// console.log(albumInfo);

// let randomNumber = Math.floor( Math.random()*10 )
// if (isAlive === true && hasBlackJack === false)
