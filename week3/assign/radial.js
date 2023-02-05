let rotateBy = 5
//let fillColor = (25, 215, 232)
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 180);
    fill("orange");
    stroke(255);
    strokeWeight(2);
    square(50, 50 + alt, 100);
    square(0, 0 - alt, 100);
}

function draw() {
    translate(360, 360);  //resets the center
    rotate(rotateBy);  //rotates canvas
    makeArm(rotateBy);
    rotateBy += 200;
    rotateBy += 50;

}
function mousePressed() {
    noLoop();
}