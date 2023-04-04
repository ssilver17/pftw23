<script setup>
    import albumData from "../assets/album-data.json";
    import AlbumCard from "../components/AlbumCard.vue";
</script>

<template>
    <div class="card-container">
        <AlbumCard 
        :key="album.id" 
        v-for="album in albumData" 
        :id="album.id" 
        :title="album.title" 
        :image="album.image"/>
    </div>
</template>
<style scoped>
    .card-container {
        width: 800px;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

</style>