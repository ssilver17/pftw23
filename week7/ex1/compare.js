const { createApp } = Vue;

createApp ({
    data() {
        return {
            linkStyle: {
                background: "orange",  
                padding: "10px" 
            },
            display: "clicked"

        }

    }
}).mount("#llamaApp");