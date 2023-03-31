<script setup>
import { RouterLink } from "vue-router";
import MusicList from "../data/music-list.json";
console.log("Music list" , MusicList);
</script>

<template>
<div class="song-container">
    <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
        <RouterLink :to="'/song/' + song.slug">{{ song.title }}</RouterLink>
    </div>  
</div>
  
</template>