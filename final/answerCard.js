let answerCard;
let startingAX = 720;
let startingAY = 100;
let cardsA = [];
let cardAnswerArray = [];
const answerState = {

};



function preload() {
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
    background(225);

    let selectedAnswers = [];   
    for (let s = 0; s < 12; s++) {  //randomizes answer cards
        const randomIdx = floor(random(cardAnswerArray.length));
        const answerFace = cardAnswerArray[randomIdx];
        selectedAnswers.push(answerFace);
    }

    for (let r = 0; r < 4; r++) {
        for (let q = 0; q < 3; q++) { 
            const answerFaceImage = selectedAnswers.pop();      
           
            //first row of answer cards
            cardsA.push(new AnswerCard(startingAX, startingAY));
            startingAX += 160;
        }
        startingAY += 200;
        startingAX = 720;
    
    }
}

function mousePressed() {
    for (let v = 0; v <cardsA.length; v++) {
        if(cardsA[v].didHit(mouseX, mouseY)) {
            console.log("hit");
        }
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