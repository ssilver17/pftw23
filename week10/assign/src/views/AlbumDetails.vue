<script setup>
import { useRoute, RouterLink } from "vue-router";
import albumData from "../assets/album-data.json";
const route = useRoute();
console.log("route param", route.params);
const albumId = route.params.id;
const albumDetails = albumData.find((album) => {
    return albumId === album.id;
})
</script>
<template>
    <div class="detail-container">
        <div>
            <RouterLink to="/albums">Back to collection</RouterLink>
            <h2>{{ albumDetails.title }}</h2>
            <img :src="`/covers/${albumDetails.image}`" :alt="albumDetails.title" 
            class="album-image"/>
            <div class="detail-text">
                <h3>Artist:</h3>
                <p>{{ albumDetails.artist }}</p>
                <h4>Year Released:</h4>
                <p>{{ albumDetails.yearReleased }}</p>
                <h4>Genre:</h4>
                <p>{{ albumDetails.genre }}</p>
            </div>
            <div>
                <h5>Description</h5>
                <p>{{ albumDetails.description }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .detail-container {
        max-width: 600px;
        margin: 0 auto;
    }

    h2 {
        font-size: 2rem;
        font-weight: 900;
    }

    h3, h4, h5 {
        color: brown;
        margin-top:20px;
        margin-bottom: 0;
    }

    p {
        margin: 0;
        color:rgb(33, 33, 33)
    }

    a {
        font-size: 16px;
        color: rgb(30, 30, 30);
    }

    img {
        max-width: 600px;
        width: 100%;
        border: 3px solid  rgb(30, 30, 30);
    }
</style>