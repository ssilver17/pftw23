const { createApp } = Vue;
createApp({ 
  data(){
    return {
      newAlbumObj: {
        title: "",
        artist: "",
        yearReleased: "",
        genre: ""
      },
      collection: [
        {
            title: "Pastel Blues",
            artist: "Nina Simone",
            yearReleased: "1965",
            genre: "Blues, Jazz"
        }, {
            title: "Takin' My Time",
            artist: "Bonnie Raitt",
            yearReleased: "1973",
            genre: "Blues, Jazz, Rythem and Blues"
        }, {
            title: "Nighthawks at the Diner",
            artist: "Tom Waits",
            yearReleased: "1975",
            genre: "Jazz, Rock, Spoken Word"
        }, {
            title: "Closing Time",
            artist: "Tom Waits",
            yearReleased: "1963",
            genre: "Blues, Jazz, Rock, Folk"
        }, {
            title: "Le Tigre",
            artist: "Le Tigre",
            yearReleased: "1999",
            genre: "Electroclash, Dance"
        }, {
            title: "Getaway",
            artist: "Abigail Lapell",
            yearReleased: "2019",
            genre: "Rock, Folk, Country"
        },   
      ]
    }
  },
  methods: {
    submitHandler () {
      console.log("submitted");
      this.collection = this.collection.concat(this.newAlbumObj);
      this.resetForm();
    },
    resetForm () {
      this.newAlbumObj = {
        title: "",
        artist: "",
        yearReleased: "",
        genre: ""
      }
    },
    deleteAlbum (album) {
      this.collection = this.collection.filter(collection => {
        return collection !== album;
      })
    }
  }
}).mount("#myApp");