const { createApp } = Vue

createApp({
  data() {
    return {
        streetAddress: "2501 Stevens Ave",
        city: "Minneapolis",
        state: "Minnesota",
        postalCode: "55404"
    }
  },
  computed: {
    fullAddress() {
        console.log("firing full address");
        return this.streetAddress + " " + this.city + " " + this.state + " " + this.postalCode
    }
  }
}).mount('#myApp')