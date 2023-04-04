<script setup>
import { RouterLink } from "vue-router";
defineProps(["id", "title", "image"]);
</script>
<template>
    <div class="album-card">
        <img class="album-image" :src="`/covers/${image}`" :alt="title">
        <div class="footer">
            <RouterLink class="footer-link" :to="`/albums/${id}`">{{ title }}</RouterLink>
        </div>
    </div>
</template>
<style scoped>
.album-card {
    max-width: 400px;
    background-color: aliceblue;
    border: 1px solid grey;
    margin:30px
}

.album-image {
    max-width: 200px;
    display: block;
    width: 100%;
}

.footer {
    border-top: 1px solid grey;
    padding: 10px;
    text-align: center;
}

.footer-link {
  font-size: 16px;
  color: rgb(33, 32, 32);
}
</style>