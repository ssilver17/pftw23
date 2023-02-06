let rotateBy = 5
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy, fillColor, strokeSize) {
    let alt = Math.round(rotateBy / 45);
    fill(fillColor);
    stroke(255);
    strokeWeight(strokeSize);
    square(50, 0 - alt, 100);
    
}

function draw() {
    translate(400, 400);  //resets the center
    rotate(rotateBy);  //rotates canvas
    makeArm(rotateBy, "orange", 2);
    rotateBy += 200;
    rotateBy += 50;
    scale(0.5)
    makeArm(rotateBy, "lightblue", 10);
    scale(0.25)
    makeArm(rotateBy, "hotpink", 20);
    rotateBy += 200;
    rotateBy += 50;
    scale(1)
    makeArm(rotateBy, "hotpink", 50);
    scale(0.5)
    makeArm(rotateBy, "black");
    
}
function mousePressed() {
    noLoop();
}