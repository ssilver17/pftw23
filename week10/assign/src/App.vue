<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1>
      <RouterLink to="/">My Vinyl Collection</RouterLink>
    </h1>
    <RouterView />
  </div>

</template>

<style>
  html {
    background: rgb(199, 238, 239);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  h1, a {
    font-size: 3rem;
    text-align: center;
    color: brown;
  }

  a {
    text-decoration: none;
  }

</style>
