// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
const domain = `https://www.theaudiodb.com/`;
const apiKey = 523532;
let TADB_Artist_ID = 112059;

// let artistData = `https://www.theaudiodb.com/api/v1/json/${apiKey}/artist.php?i=${TADB_Artist_ID}`;
// let artist = "kanye";
let backgroundImage = document.querySelector(".background-image");
let albumInfo = document.querySelector(".artwork-info");
// let artistPic = document.querySelector("#artist-pic");

const test = document.querySelector("#test");
// test.innerHTML = "Ye Season";
// document.getElementById("test").innerHTML = "Ye";

async function fetchAlbumData() {
  // Write code here.
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${TADB_Artist_ID}`;
    const res = await axios.get(response);
    const albumData = res.data;
    // let description = albumData.album[0].strDescriptionEN;
    let artwork = albumData.album[0].strAlbumThumb;
    let idArtist = albumData.album[0].idArtist;
    document.body.style.backgroundImage = `url("${artwork}")`;
    // albumInfo.innerHTML = "";
    let newArtistInfo = document.createElement("p");
    newArtistInfo.textContent = `${description}`;
    // test.appendChild(newArtistInfo);

    console.log(artwork);
    // console.log(idArtist);

    // const album = res.data.album.strAlbumThumb;
    console.log(albumData);
    // console.log(albumData.album[0].strAlbumThumb);
    // console.log(albumData.album[0].strDescriptionEN);
    fetchArtistData(idArtist);
    console.log(description);
  } catch (error) {
    console.log(error);
    alert(`${artist} album not found`);
  }
}
fetchAlbumData();

// function test() {}

async function fetchArtistData(res) {
  // Write code here.
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/${apiKey}/artist.php?i=${res}`;
    const res = await axios.get(response);
    const artistData = res.data.artists[0];
    // artistPic.src = `${artistData.strArtistThumb}`;
    document.getElementById("artist-pic").src = `${artistData.strArtistThumb}`;

    console.log(artistData.strArtistThumb);
  } catch (error) {
    console.log(error);
    alert(`${artist} artist not found`);
  }
}
// fetchArtistData();

// https://www.last.fm/music/Drake/Certified+Lover+Boy

// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=2pac
// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=kanye_west

// console.log(albumInfo);

// let randomNumber = Math.floor( Math.random()*10 )
// if (isAlive === true && hasBlackJack === false)
