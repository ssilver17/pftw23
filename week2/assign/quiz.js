const questions = [
    {question: "What are the two major Native American tribes that live in the area that is now Minnesota",
    answer: "Dakota and Anishinabe"},
    {question: "How many miles of rivers and streams are there is Minnesota?",
    answer: "69,200 miles"},
    {question: "Minnesota shares geographic boundaries with how many sovereign Native Nations?",
    answer: "11"},
    {question: "In what state does the Mississippi River begin?",
    answer: "Minnesota"},
];
console.log(questions);
const randomIdx = Math.round(Math.random() * (questions.length -1));
console.log(randomIdx);
let promptRespsonse = window.prompt("Hello! Do you want to play a game?  " + questions[randomIdx].question);

window.alert("You answered " + promptRespsonse + " . The correct answer was " + questions[randomIdx].answer);