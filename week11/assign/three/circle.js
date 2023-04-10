var x = 300;
var y = 200;

function setup() {
    createCanvas(600, 600);
    background(242, 23, 236);
}

function makeCircle() {
    stroke(242, 23, 236);
    fill(11, 57, 95, [10]);
    circle(x+50, y+100, 100);
}


function draw() {
    x += random(-10, 10);
    y += random(-5, 5);
    makeCircle();
}

function mousePressed() {
    noLoop();
 }