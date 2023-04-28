let answerCard;
let startingAX = 720;
let startingAY = 100;
let cardsA = [];
const answerState = {

};

function setup() {
    createCanvas(1200, 1000);
    background(225);
    for (let r = 0; r < 4; r++) {
        for (let q = 0; q < 3; q++) {   //first row of answer cards
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


class AnswerCard {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 150;
        this.show();
    }
    show () {
        fill("#611e28");
        rect(this.x, this.y, this.width, this.height)
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