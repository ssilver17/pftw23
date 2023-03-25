<script setup>
const camelids = [
      {
        commonName: "Lama",
        binomialName: "Lama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Lama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg",
        id: 0
        },
      {
        commonName: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg",
        id: 1
      },
    ]

</script>

<template>
  <div class="container">
    <h1>Camelids</h1>
    <div v-for="animal in camelids" v-bind:key="camelids.id" class="animal-row">
      <h2>{{animal.commonName}}</h2>
      <h3>{{animal.binomialName}}</h3>
      <img v-bind:src="animal.image" v-bind:alt="animal.commonName"/>
      
    </div>
  </div>
  
</template>

<style scoped>
  .container {
    width: 600px;
    margin: 20px auto 0;
    font-size: 18px;
  }

  .container h1 {
    text-align: center;
  }

  .container p {
    font-size:12px;
  }
  .container .animal-row img {
    max-width: 300px;
    min-width: 300px;
    display: block;
  }
  
</style>
