const games = [
    {title: "Spot It", type: "card game", numberOfPlayers: "2-4", rating: "4 out of 4", shortDescription: "Spot it is a speed and observation game for the whole family. Be the first to find and name the matching symbol between any two cards. Collect the most cards to win."},
    {title: "Out Foxed", type: "board game", numberOfPlayers: "2-8", rating: "3 out of 4", shortDescription: "Outfoxed is a cooperative game where you move around the board to gather with your detective pals to catch the crafty fox before it skips town!"},
    {title: "Wild Bunch", type: "card game", numberOfPlayers: "2 or more", rating: "4 out of 4", shortDescription: "The Wild Bunch is a discard game, based on Crazy Eights but features animals instead of numbers."}
];
console.log(games);
let promptRespsonse = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game.");

//const randomIdx = Math.round(Math.random() * games.length -1);

window.alert("You selected " + promptRespsonse);