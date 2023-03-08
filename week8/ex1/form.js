const { createApp } = Vue

createApp({
  data() {
    return {
        firstName: "",
        lastName: "",
        street: "",
        state: "MN",
        selectedColors: [],
        colors: [
            {name: "White", value: "white"},
            {name: "Beige", value: "beige"},
            {name: "Fawn", value: "fawn"},
            {name: "Brown", value: "brown"},
            {name: "Black", value: "black"},
            {name: "Gray", value: "gray"},
            {name: "Silver", value: "silver"},
        ],
        status: "",
    }
  }
}).mount('#myApp')