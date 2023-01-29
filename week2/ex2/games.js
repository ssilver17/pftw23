const games = [
    {title: "Spot It", type: "card game. ", numberOfPlayers: "2-4", rating: "3 out of 4", shortDescription: "Spot it is a speed and observation game for the whole family. Be the first to find and name the matching symbol between any two cards. Collect the most cards to win."},
    {title: "Out Foxed", type: "board game. ", numberOfPlayers: "2-8", rating: "4 out of 4", shortDescription: "Outfoxed is a cooperative game where you move around the board to gather clues with your detective pals to catch the crafty fox before it skips town!"},
    {title: "Wild Bunch", type: "card game. ", numberOfPlayers: "2 or more", rating: "4 out of 4", shortDescription: "The Wild Bunch is a discard game, based on Crazy Eights but features animals instead of numbers."}
];
console.log(games);
let promptRespsonse = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game.");
if (promptRespsonse ==="1"){
    window.alert("You selected " + games[0].title  +  " which is a  " + games[0].type + games[0].shortDescription + " I give this game " + games[0].rating + " stars.")
};

if (promptRespsonse ==="2"){
    window.alert("You selected " + games[1].title  +  " which is a  " + games[1].type + games[1].shortDescription + " I give this game " + games[1].rating + " stars.")
};

if (promptRespsonse ==="3"){
    window.alert("You selected " + games[2].title  +  " which is a  " + games[2].type + games[2].shortDescription + " I give this game " + games[2].rating + " stars.")
};