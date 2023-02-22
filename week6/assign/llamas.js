const { createApp } = Vue;


createApp({         
    data() {        
       return {
        llamaPoop: "Llama poop has almost no odor.",
        llamaHum: "Llamas communicate by humming.",
        llamaGuard: "Farmers often use llamas to guard herds of small animals.",
        llamaSpit: "Llamas spit to show displeasure.",
        llamaTherapy: "Llamas are sometimes used as therapy animals.",
        llamaLife: "Llamas can live up to 30 years",
        llamaBaby: "A baby llama is called a cria",
        llamaFood: "Llamas are vegetarians",
        llamaHerd: "A group of llamas is called a herd.",
        llamaColor: "Llamas come in a range of colors including, black, gray,beige, brown, red and white.",
        oldEnough: true         //v-if directive, conditional
        }
    }
}).mount("#llamaApp"); 