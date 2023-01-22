let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "blue");
let canvas1 = prompt("enter another basic color in lower case", "orange");
function setup(){
    createCanvas(1000, 800);
    background(canvas1);
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    background(grid);
    //snowman bottom circle
    fill("#caf9fa");
    stroke("#1e2928");
    strokeWeight(5);
    ellipse(600, 700, 300, 250);
    //middle circle
    ellipse(600, 500, 225, 200);
    //head
    ellipse(600, 325, 175);
    //hat brim
    stroke("#455e5c");
    strokeWeight(20);
    line(500, 250, 690, 225);
    //hat shape
    strokeWeight(8);
    fill("#455e5c")
    quad(550, 250, 525, 180, 675, 200, 700, 225);
    //eyes
    stroke(stroke1);
    strokeWeight(60);
    point(550, 310);
    point(610, 310);
    stroke("#1e2928");
    strokeWeight(20);
    point(570, 310);
    point(625, 310);
    //mouth
    stroke("#455e5c");
    strokeWeight(8);
    line(550, 350, 600, 365);
    //arms
    stroke("#455e5c");
    strokeWeight(12);
    line(480, 500, 580, 365);
    line(700, 500, 580, 365);
    //house
    noStroke();
    fill("#14417d")
    square(150, 300, 150);
    //windows
    noStroke();
    fill("#eef0a9")
    square(160, 320, 40, 10);
    square(250, 320, 40, 10);
    //roof
    fill(20)
    triangle(120, 300, 220, 210, 350, 300);
    //door
    rect(240, 390, 30, 60);
    //bushes left
    fill("#116120")
    ellipse(100, 400, 60, 60);
    fill("#1da70f")
    ellipse(75, 410, 40, 40);
    //bushes right
    fill("#116120")
    ellipse(350, 420, 60, 60);
    fill("#1da70f")
    ellipse(375, 430, 40, 40);




    







}
