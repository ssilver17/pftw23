const myMovies = ["Moonstruck", "But I'm a Cheerleader", "Call Me by Your Name", "The Matrix", "Say Anything"];
console.log(myMovies);
let yourMovie = prompt("What is the name of your favorite movie?");
myMovies.push(yourMovie);
console.log("My movies list updated", myMovies);
console.log(myMovies.toString());
alert("Our movies are " + myMovies.toString());