let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "blue");
function setup(){
    createCanvas(1000, 800);
    background(210);
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




}
