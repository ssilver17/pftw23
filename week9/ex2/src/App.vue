<script setup>
const isWorking = true;

</script>

<template>
  <div class="container">
    <h1>My first compiled Vue app</h1>
    <p v-if="isWorking">It is working</p>
  </div>
  
</template>

<style scoped>
  .container {
    width: 600px;
    margin: 20px auto 0;
    text-align: center;
    font-size: 18px;
  }
  .container p {
    font-size: 30px;
  }
  
</style>
