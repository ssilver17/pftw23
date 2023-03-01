const { createApp } = Vue;

createApp ({
    data() {
        return {
            llamaUrl: "https://en.wikipedia.org/wiki/Llama",
            alpacaUrl: "https://en.wikipedia.org/wiki/Alpaca",
            linkStyle: {
                background: "orange",  
                padding: "10px" 
            },
            display: "clicked"

        }

    }
}).mount("#llamaApp");