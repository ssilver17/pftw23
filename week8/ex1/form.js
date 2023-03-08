const { createApp } = Vue

createApp({
  data() {
    return {
        firstName: "",
        lastName: "",
        street: "",
        state: "MN",
        colors: [],
        status: "",
    }
  }
}).mount('#myApp')