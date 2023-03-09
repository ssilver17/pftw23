const { createApp } = Vue

createApp({
  data() {
    return {
       firstNum: null,
       secondNum: null,
       operation: "add",
       total: null
    }
  
  },
  methods: {
    calculate: (num1, num2) => {
      switch (createApp.operation) {
        case 'add':
          createApp.total = num1 + num2;
          break;
        case 'subtract':
          createApp.total = num1 - num2;
          break;
        case 'multiply':  
          createApp.total = num1 * num2;
          break;
        case 'divide':
          createApp.total = num1 / num2;
          break;
        default: 
          window.alert('unexpected operator');
          break;
      }
    }
  }
}).mount('#myApp')