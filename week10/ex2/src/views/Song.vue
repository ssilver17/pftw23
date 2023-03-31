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
        rising: song.rank > song.position.positionLastWeek, falling: song.rank < song.positionLastWeek, holding: song.rank === song.position.positionLastWeek }">
        <h1>{{ song.position }}</h1>
        <h2>{{ song.title }}</h2>
        <img :src="song.cover" :alt="song.title" />
        <p>Artist: {{ song.artist }}</p>
        <p></p>
    </div>
</template>

<style scoped>
.song-detail .rising {
    border: 1px solid rgb(242, 15, 185);
}

.song-detail .falling {
    border: 1px solid rgb(5, 36, 90);
}

.song-detail .holding {
    border: 1px dashed orange;
}
</style>