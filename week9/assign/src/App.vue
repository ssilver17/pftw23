<script setup>

</script>

<template>
  <div class="collection-wrapper">
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
            <tr v-for="(object, idx) in collection" v-bind:key="idx"
                v-bind:class="{odd: idx %2 !==0, blues: object.genre.toLowerCase().includes('blues')}">
                <td>{{object.title}}</td>
                <td>{{object.artist}}</td>
                <td>{{object.yearReleased}}</td>
                <td>{{object.genre}}</td>
                <td><button type="button" v-on:click="deleteAlbum (album)">Delete</button></td>
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

</style>
