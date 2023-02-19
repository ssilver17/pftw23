let myCard;
const DOWN = "down";
const UP = "up";

function setup() {
    createCanvas(900, 1000);
    background("#042152");
    noStroke();   
     myCard = new Card(); 
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor() {
        this.x = 150;
        this.y = 250;
        this.width = 150;
        this.height = 150;
        this.face = "down";
        this.show();
    }

    show () {
        fill("#bef2f9");
        square(this.x, this.y, this.width, 20);
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.width) {
            return true;
        } else {
            return false;
        }
    }
    
}
