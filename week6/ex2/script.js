const { createApp } = Vue;  //destructuring

createApp({         //method. only sees inside the element its mounted to
    data() {        //whatever this data method returns we have access to
       return {
        name: "stowe",
        snowy: true,
    }
    }
}).mount("#myApp");   //chaining a function on a function. binds to html div