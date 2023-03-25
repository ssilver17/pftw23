<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
    
</script>
<template>
    <h1></h1>
     <div class="animal-row">
      <h2>{{props.animal.commonName}}</h2>
      <h3>{{props.animal.binomialName}}</h3>
      <img v-bind:src="props.animal.image" v-bind:alt="props.animal.commonName" />
      <p>{{props.animal.order}}</p>
      <p>{{props.animal.family}}</p>
      <p>{{props.animal.genus}}</p>
      <p>{{props.animal.species}}</p>
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