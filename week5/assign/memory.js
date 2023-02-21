const DOWN = "down";
const UP = "up";
let startingX = 60;
let startingY = 180;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardFaceArray = [];
let cardBack;

function preload() {
    cardBack = loadImage("images/cardback.png");
    cardFaceArray = [
        loadImage("images/bird01.jpg"),
        loadImage("images/bird02.jpg"),
        loadImage("images/bird03.jpg"),
        loadImage("images/bird04.jpg"),
        loadImage("images/bird05.jpg"),
        loadImage("images/bird06.jpg"),
        loadImage("images/bird07.jpg"),
        loadImage("images/bird09.jpg")
    ]
}
function setup() {
    createCanvas(900, 1000);
    background("#042152");
    noStroke(); 
    fill("#ffba10");
    noStroke();
    quad(0, 0, 600, 0, 675, 125, 0, 125);   //header
    fill("#9a700a");
    noStroke();
    quad(604, 0, 1000, 0, 1000, 125, 679, 125);     //tally

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
        for(let i = 0; i < 4; i++) {   
            const faceImage = selectedFaces.pop();               
            cards.push(new Card(startingX, startingY, faceImage)); 
            startingX += 210;                       
    }
    startingY +=200;
    startingX = 60;   //sets starting location for newrow                    
    } 
}

function draw() {
    if(gameState.numMatched === gameState.totalPairs) {
        fill("#042152");
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
    fill("#042152");
    textSize(30);
    text("attempts " + gameState.attempts, 450, 75);
    text("matches " + gameState.numMatched, 675, 75)

    
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
    constructor(x, y, cardFaceImg) {            
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
