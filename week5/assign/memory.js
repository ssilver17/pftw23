function setup() {
    createCanvas(900, 1000);
    background("#042152");
    noStroke();   
    let myCard = new Card(); 
}

class Card {
    constructor() {
        this.x = 150;
        this.y = 250;
        this.diameter = 150;
        this.show();
    }

    show () {
        fill("#bef2f9");
        ellipse(this.x, this.y, this.diameter);
    }
}

