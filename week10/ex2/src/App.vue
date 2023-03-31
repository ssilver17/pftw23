<script setup>
import {RouterView, RouterLink} from "vue-router"
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink></nav>
    <RouterView />
</template>

<style>
  a {
    color: rgb(226, 21, 171);
    font-weight: 600;
}
</style>
