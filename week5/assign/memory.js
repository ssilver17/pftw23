let myCard;
const DOWN = "down";
const UP = "up";

function setup() {
    createCanvas(900, 1000);
    background("#042152");
    noStroke();   
    let myCard = new Card(); 
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor() {
        this.x = 150;
        this.y = 250;
        this.diameter = 150;
        this.face = "down";
        this.show();
    }

    show () {
        fill("#bef2f9");
        ellipse(this.x, this.y, this.diameter);
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.diameter && 
            mouseY >= this.y && mouseY <= this.y + this.diameter) {
            return true;
        } else {
            return false;
        }
    }
    
}
