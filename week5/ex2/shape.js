let block1;
let block2;


function setup() {
    createCanvas(500, 500);
    block1 = new Block();
    block2 = new Block();
}

function draw() {
    background("#15414e");
    block1.move();
    block1.show();
    block2.move();
    block2.show();
}

class Block {
    constructor() {
        this.x = 150;
        this.y = 150;  
    }
    move() {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-5, 5);  
    }

    show() {
        stroke("#12eff7");
        strokeWeight(5);
        noFill();
        rect(this.x, this.y, 75, 100, 10, 10, 10, 10);
    }
}    

