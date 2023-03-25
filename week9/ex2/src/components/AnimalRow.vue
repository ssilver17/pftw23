<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
    
</script>
<template>
    <h1></h1>
     <div class="animal-row">
      <h2>{{animal.commonName}}</h2>
      <h3>{{animal.binomialName}}</h3>
      <img v-bind:src="animal.image" v-bind:alt="animal.commonName"/>
      <p>{{animal.order}}</p>
      <p>{{animal.family}}</p>
      <p>{{animal.genus}}</p>
      <p>{{animal.species}}</p>
    </div>
</template>
<style scoped>
  h1 {
    text-align: center;
  }

  p {
    font-size:14px;
  }
   .animal-row img {
    max-width: 300px;
    min-width: 300px;
    display: block;
  }

</style>