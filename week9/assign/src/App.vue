<script setup>
import {reactive} from "vue";
import ItemRow from "./components/ItemRow.vue";

const collection = [
{
            title: "Pastel Blues",
            artist: "Nina Simone",
            yearReleased: "1965",
            genre: "Blues, Jazz"
        }, {
            title: "Takin' My Time",
            artist: "Bonnie Raitt",
            yearReleased: "1973",
            genre: "Blues, Jazz, Rythem and Blues"
        }, {
            title: "Nighthawks at the Diner",
            artist: "Tom Waits",
            yearReleased: "1975",
            genre: "Jazz, Rock, Spoken Word"
        }, {
            title: "Closing Time",
            artist: "Tom Waits",
            yearReleased: "1963",
            genre: "Blues, Jazz, Rock, Folk"
        }, {
            title: "Le Tigre",
            artist: "Le Tigre",
            yearReleased: "1999",
            genre: "Electroclash, Dance"
        }, {
            title: "Getaway",
            artist: "Abigail Lapell",
            yearReleased: "2019",
            genre: "Rock, Folk, Country"
        }   
];
const newAlbumObj = {
  title: "",
  artist: "",
  yearReleased: "",
  genre: ""
};
const state = reactive({collection: collection, newAlbumObj: newAlbumObj});
function submitHandler () {
      console.log("submitted");
      state.collection.push({
        title: state.newAlbumObj.title,
        artist: state.newAlbumObj.artist,
        yearReleased: state.newAlbumObj.yearReleased,
        genre: state.newAlbumObj.genre
      });
      state.newAlbumObj.title = "";
      state.newAlbumObj.artist = "";
      state.newAlbumObj.yearReleased = "";
      state.newAlbumObj.genre = "";
    };

</script>

<template>
  <div class="app-wrapper">
    <h1>Vinyl Collection</h1>
    <p>Blues albums are noted with blue text.</p>
    <table>
            <thead>
            <th>Title</th>
            <th>Artist</th>
            <th>Year Released</th>
            <th>Genre</th>
            <th>Remove</th>
        </thead>
        <tbody>
            <tr>
              <td>
                <ItemRow v-for="(album, index) in state.collection" v-bind:key="index " 
                v-bind:item="album" />
              </td>
            </tr>
        </tbody>
        </table>
        
        <form v-on:submit.prevent="submitHandler">
            <fieldset>
                <legend>Add an album to the collection</legend>
                <div>
                    <label for="title">Title</label>
                    <input id="title" type="text" v-model="newAlbumObj.title">
                </div>
                <div>
                    <label for="artist">Artist</label>
                    <input id="artist" type="text" v-model="newAlbumObj.artist">
                </div>
                <div>
                    <label for="yearReleased">Year Released</label>
                    <input id="yearReleased" type="date" v-model="newAlbumObj.yearReleased">
                </div>
                <div>
                    <label for="genre">Genre</label>
                    <input id="genre" type="text" v-model="newAlbumObj.genre">
                </div>
                <button type="submit">Submit</button>
        </fieldset>
        </form>
  </div>

</template>

<style scoped>
  body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color:rgb(219, 19, 119)
  }

  h1 {
    color: rgb(2, 44, 48);
    font-size: 60px;
    font-weight: bold;
    border-bottom: 5px dotted ;
  }

  .app-wrapper {
    margin: 0, auto;
    padding: 50px 50px;
    background-color: rgb(227, 246, 246);
    max-width: 1080px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color:rgb(219, 19, 119)
  }

  table, thead, th, tbody, tr, td {
    border: none;
    padding: 20px;
    text-align: center;
  }

  thead {
    color: rgb(2, 44, 48);
  }

  .odd {
    background: rgba(235, 201, 89, 0.709);
  }

  .blues {
    color:rgb(18, 86, 125);
    font-weight: 600;
  }

  p {
    font-size: 14px;
  }

  button {
    background-color: rgb(85, 178, 231);
    color: aliceblue;
  }

  form {
    background-color: rgba(234, 187, 33, 0.919);
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid rgb(33, 32, 32);
    margin-left: 20px;
    margin-top: 50px;
  }

  legend {
    font-weight: bold;
  }

  fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: none;
    line-height: 2rem;
  }
</style>
