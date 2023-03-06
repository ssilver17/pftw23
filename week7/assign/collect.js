const { createApp } = Vue;
createApp({ 
  data(){
    return {
      collection: [
        {
            title: "Pastel Blues",
            artist: "Nina Simone",
            yearReleased: "1965",
            genre: "Blues, Jazz"
        }, {
            title: "Tankin' My Time",
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
        }   
      ]
    }
  }
}).mount("#myApp");