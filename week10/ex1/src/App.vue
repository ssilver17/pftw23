<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/alpaca">Alpaca</RouterLink> |
    <RouterLink to="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
  html {
    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 50px 400px;
  }

  #app {
    margin: 0;
    padding: 0;
  }

  nav {
    text-align: center;
    width: 100%;
    height: 40px;
    background: rgb(190, 151, 11);
  }

  nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
    color: aliceblue;
    font-weight: 900;
    font-size: 20px;
    line-height: 2;
    text-decoration: none;
  }

  nav a.router-link-active {
    text-decoration: underline;
    color: rgb(2, 8, 29);
  }

  .container h1 {
    text-align: center;
    font-size: 48px;
    font-weight: bold;
  }

  .container p {
    font-size: 16px;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
  }

  .container img {
    display: block;
    max-width: 400px;
    width: 100%;
    margin: 20px auto 20px;
  }

</style>
