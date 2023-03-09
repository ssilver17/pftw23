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
      switch (this.operation) {
        case 'add':
          this.total = num1 + num2;
          break;
        case 'subtract':
          this.total = num1 - num2;
          break;
        case 'multiply':  
          this.total = num1 * num2;
          break;
        case 'divide':
          this.total = num1 / num2;
          break;
        default: 
          window.alert('unexpected operator');
          break;
      }
      this.firstNum = this.secondNum =null;
      
    }
  }
}).mount('#myApp')