// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
const domain = `https://www.theaudiodb.com/`;
const apiKey = 523532;
let TADB_Artist_ID = "";

// let artistData = `https://www.theaudiodb.com/api/v1/json/${apiKey}/artist.php?i=${TADB_Artist_ID}`;
// let artist = document.querySelector("input-el").value;
let backgroundImage = document.querySelector(".background-image");
let albumInfo = document.querySelector(".artwork-info");
let artistPic = document.querySelector("#artist-pic");

let inputEL = document.querySelector("#input-el");
let inputBTN = document.querySelector("#input-btn");

// window.onload() => {
//   console.log(new Date())
// }

// $(document).ready(() => {
//   console.log(new Date())
// })

async function fetchAlbumData() {
  let artist = document.querySelector("#input-el").value;
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${artist}`;
    const res = await axios.get(response);
    console.log(res);
    if (res.data) {
      const albumData = res.data.album;
      const random = Math.floor(Math.random() * albumData.length);
      console.log(random);
      let description = albumData[random].strDescriptionEN;
      // document.querySelector("#album-info").innerText = description;
      let artwork = albumData[random].strAlbumThumb;
      let idArtist = albumData[random].idArtist;
      if (artwork === "" || artwork === null) {
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundImage = `url("${artwork}")`;
      }
      if (!description) {
        document.querySelector("#album-info").innerText = "try another album";
      } else {
        document.querySelector("#album-info").innerText = description;
      }
      // let newArtistInfo = document.createElement("p");
      // newArtistInfo.textContent = `${description}`;
      // test.appendChild(newArtistInfo);
      // console.log(description);
      // console.log(artwork);
      // console.log(idArtist);

      const album = albumData[random].strAlbumThumb;
      console.log(albumData);
      // console.log(albumData.album[0].strAlbumThumb);
      // console.log(albumData.album[0].strDescriptionEN);
      fetchArtistData(idArtist);
      // console.log(description);
    }
  } catch (error) {
    console.log(error);
    // alert(`${artist} album not found`);
  }
}
fetchAlbumData();

async function fetchArtistData(id) {
  // Write code here.
  try {
    const response = `https://www.theaudiodb.com/api/v1/json/${apiKey}/artist.php?i=${id}`;
    const res = await axios.get(response);
    console.log(res);
    const artistData = res.data;
    // console.log(artistData.artists[0].strArtistThumb);
    // artistPic.src = `${artistData.artists[0].strArtistThumb}`;
    document.querySelector(
      "#artist-pic"
    ).src = `${artistData.artists[0].strArtistThumb}`;
    console.log(artistData.strArtistThumb);
  } catch (error) {
    console.log(error);
    // alert(`${artist} artist not found`);
  }
}

inputEL.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    console.log("Enter was pressed");
    inputBTN.click();
  }
});

inputBTN.addEventListener("click", () => {
  alert("Button was clicked");
});

// var evt = new KeyboardEvent("keydown", {
//   bubbles: true,
//   cancelable: true,
//   keyCode: 13,
// });
// element.dispatchEvent(evt);

// document.getElementById("input-el").addEventListener(
//   "keydown",
//   function (e) {
//     if (!e) {
//       let e = window.event;
//     }
//     e.preventDefault(); // sometimes useful

//     // Enter is pressed
//     if (e.keyCode == 13) {
//       fetchAlbumData();
//       console.log("test");
//     }
//   },
//   false
// );

// function handle(e) {
//   if (e.key === "Enter") {
//     alert("Enter was just pressed.");
//   }

//   return false;
// }

// inputEL.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     alert("Enter was just pressed.");
//   }
//   event.preventDefault();
//   document.getElementById("input-btn").click();
// });

// https://www.last.fm/music/Drake/Certified+Lover+Boy

// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=2pac
// https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=kanye_west

// console.log(albumInfo);

// let randomNumber = Math.floor( Math.random()*10 )
// if (isAlive === true && hasBlackJack === false)
