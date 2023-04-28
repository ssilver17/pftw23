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

    //cardAnswerArray = [
        //loadImage("images/1.png"),
        //loadImage("images/2.png"),
        //loadImage("images/4.png"),
        //loadImage("images/5.png"),
        //loadImage("images/6.png"),
        //loadImage("images/7.png"),
        //loadImage("images/8.png"),
        //loadImage("images/9.png"),
        //loadImage("images10.png"),
        //loadImage("images/11.png"),
        //loadImage("images/14.png"),
        //loadImage("images/15.png"),

    //]
}
function setup() {
    createCanvas(1200, 1000);
    

    let selectedFaces = [];
    for(let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        cardFaceArray.splice(randomIdx, 0); //starting getting an error when I add a number after randomIdx
    }
    selectedFaces = shuffleArray(selectedFaces);
    for(let j = 0; j< 4; j++) {
        for(let i = 0; i < 3; i++) {   
            const faceImage = selectedFaces.pop();               
            cards.push(new Card(startingX, startingY, faceImage)); 
            startingX += 210;                       
    }
    startingY +=200;
    startingX = 60;   //sets starting location for newrow                    
    } 
}

function draw() {
    background("#f5cbd1");
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

class CardB {
    constructor(x, y, cardAnswerImg) {          //answer card  
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 150;
        this.face = DOWN;
        this.cardFaceImg = cardAnswerImg;
        this.isMatch = false;
        this.show();
    }
}    

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrese counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}