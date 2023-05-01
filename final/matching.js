const DOWN = "down";
const UP = "up";
let startingX = 60;
let startingY = 180;
let cards = [];
const gameState = {
    totalPairs: 12,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardFaceArray = [];
let cardBack;

let cardAnswerArray = [];
let answerCard;
let startingAX = 720;
let startingAY = 180;
let cardsA = [];
const answerState = {

};

function preload() {
    cardBack = loadImage("images/cardback.jpg");
    cardFaceArray = [
        loadImage("images/q-eight.jpg"),
        loadImage("images/q-eleven.jpg"),
        loadImage("images/q-fifteen.jpg"),
        loadImage("images/q-five.jpg"),
        loadImage("images/q-four.jpg"),
        loadImage("images/q-fourteen.jpg"),
        loadImage("images/q-nine.jpg"),
        loadImage("images/q-one.jpg"),
        loadImage("images/q-seven.jpg"),
        loadImage("images/q-six.jpg"),
        loadImage("images/q-ten.jpg"),
        loadImage("images/q-two.jpg"),
    ]

    cardAnswerArray = [
        loadImage("images/1.png"),
        loadImage("images/2.png"),
        loadImage("images/4.png"),
        loadImage("images/5.png"),
        loadImage("images/6.png"),
        loadImage("images/7.png"),
        loadImage("images/8.png"),
        loadImage("images/9.png"),
        loadImage("images/10.png"),
        loadImage("images/11.png"),
        loadImage("images/14.png"),
        loadImage("images/15.png"),
    ]
}
function setup() {
    createCanvas(1200, 1000);
    background("#f5cbd1"); 

    let selectedFaces = [];     //randomizes question cards
    for(let z = 0; z < 12; z++) {       //loop thru number of matches
        const randomIdx = floor(random(cardFaceArray.length));  //choses random whole number 
        const face = cardFaceArray[randomIdx];  //choses random face from array
        selectedFaces.push(face);
        //selectedFaces.push(face);  //probably only need one of these
        cardFaceArray.splice(randomIdx, 0); //removes the used card 
    }
    selectedFaces = shuffleArray(selectedFaces);  //places random images

    for(let j = 0; j< 4; j++) {         //question cards
        for(let i = 0; i < 3; i++) {   
            const faceImage = selectedFaces.pop();  //pop returns last item removed          
            cards.push(new Card(startingX, startingY, faceImage)); 
            startingX += 210;                       
        }
    startingY +=200;
    startingX = 60;   //sets starting location for new row              
    } 

    let selectedAnswers = [];
    for (let s = 0; s < 12; s++) {
        const randomIdx = floor(random(cardAnswerArray.length));
        const answerFace = cardAnswerArray[randomIdx];
        selectedAnswers.push(answerFace);
    }
    for (let r = 0; r < 4; r++) {           //answer cards
        for (let q = 0; q < 3; q++) {   
            const answerFaceImage = selectedAnswers.pop();      
            cardsA.push(new AnswerCard(startingAX, startingAY, answerFaceImage));
            startingAX += 160;
        }
        startingAY += 200;
        startingAX = 720;   //sets starting location for new row              
    
    }
}

function draw() {
    //background("#f5cbd1");    //why do answer cards disappear when uncommented out?
    noStroke(); 
    fill("#611e28");
    noStroke();
    quad(0, 0, 546, 0, 621, 125, 0, 125);   //header
    fill("#f57a8d");
    quad(560, 0, 800, 0, 875, 125, 635, 125);   //attempts
    fill("#9a700a");
    noStroke();
    quad(814, 0, 1200, 0, 1200, 125, 889, 125);     //matches

    if(gameState.numMatched === gameState.totalPairs) {
        fill("#611e28");
        textSize(65);
        text("YOU WIN!", 90, 85);
        noLoop();
    }
    for(let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill("#611e28");
    textSize(30);
    text("attempts " + gameState.attempts, 650, 75);
    text("matches " + gameState.numMatched, 900, 75);
    fill("#f57a8d");
    textSize(60);
    text("Let's do math!", 100, 85)

    
}

function mousePressed() {
    if(gameState.waiting) {
        return;
    }
    for(let k = 0; k < cards.length; k++) {     
        //first check flip cards length, then
        //we can trigger the flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log("flipped", cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //cards match. time to score
            //mark cards as matched
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty flipped cards array
            gameState.flippedCards.length = 0;
            //increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
    for (let v = 0; v <cardsA.length; v++) {
        if(cardsA[v].didHit(mouseX, mouseY)) {
            console.log("hit");
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {            //problem card
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {
            //fill("#aaa");
            square(this.x, this.y, this.width);
            image(this.cardFaceImg, this.x, this.y, this.width, this.height);
        } else {
            fill("#bef2f9");
            square(this.x, this.y, this.width);
            image(cardBack, this.x, this.y, this.width, this.height);
        }
       
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.width) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip () {
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
  
}

class AnswerCard {          //answer card
    constructor (x, y, cardAnswerImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 150;
        this.cardAnswerImg = cardAnswerImg;
        this.show();
    }
    show () {
        fill("#611e28");
        rect(this.x, this.y, this.width, this.height);
        image(this.cardAnswerImg, this.x, this.y);
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                return true;
            } else {
                return false;
            }
    }
 }  

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);  //pick random index
        
        counter--;  //decrese counter by 1 (decrement)
        
        const temp = array[counter];  //swap the last element with it
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}
