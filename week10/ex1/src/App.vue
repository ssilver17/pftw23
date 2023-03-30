<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/alpaca">Alpaca</RouterLink> |
    <RouterLink to="/llama">Llama</RouterLink>
  </nav>
</template>

<style scoped>

</style>
