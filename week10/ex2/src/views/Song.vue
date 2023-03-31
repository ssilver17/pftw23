<script setup>
import { useRoute } from 'vue-router';
import MusicList from "../data/music-list.json"
const route = useRoute();
console.log(route.params.slug);
const song = MusicList.find(song => {
    return song.slug === route.params.slug
})
</script>

<template>
    <div class="song-detail" :class="{
        rising: song.rank < song.position.positionLastWeek, falling: song.rank > song.position.positionLastWeek, holding: song.rank === song.position.positionLastWeek}">
        <h1>#{{ song.rank }}</h1>
        <h2 class="last-week"> Last week at #{{ song.position.positionLastWeek }}</h2>
        <h2>{{ song.title }}</h2>
        <img :src="song.cover" :alt="song.title" />
        <p>Artist: {{ song.artist }}</p>
        <p></p>
    </div>
</template>

<style scoped>

h1 {
    font-weight: 900;
    text-decoration: underline;
}

.last-week {
    font-size: 14px;
}
.song-detail.rising h1 {
    color: rgb(15, 242, 23);
    
}

.song-detail.falling  h1 {
    color: rgb(219, 9, 9);
}

.song-detail.holding h1 {
    color: orange;
}
</style>