const { createApp } = Vue;


createApp({         
    data() {        
       return {
        llamaPoop: "llama poop has almost no odor.",
        llamaHum: "llamas communicate by humming.",
        llamaGuard: "farmers often use llamas to guard herds of small animals.",
        llamaSpit: "llamas spit to show displeasure.",
        llamaTherapy: "llamas are sometimes used as therapy animals.",
        llamaLife: "llamas can live up to 30 years",
        llamaBaby: "A baby llama is called a cria",
        llamaFood: "llamas are vegetarians",
        llamaHerd: "A group of llamas is called a herd.",
        llamaColor: "llamas come in a range of colors including, black, gray,beige, brown, red and white.",
        oldEnough: true         //v-if directive, conditional
        }
    }
}).mount("#llamaApp"); 