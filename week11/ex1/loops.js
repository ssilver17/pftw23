let angle = 0;
let rotateby = 30;

function setup() {
    createCanvas(600, 300);
    background('#ffe900');
    noStroke();
    angleMode(DEGREES);
    frameRate(3);
}

function makeOval() {
    fill(179, 31, 40, 50);
    ellipse(random(150), random(200), random(400), random(150)); //red
    fill(0, 174, 195, 50);
    ellipse(random(400), random(118), random(200), random(450));  //blue
    fill(150, 44, 133, 50);
    ellipse(random(50), random(50), random(50), random(100));  //purple
    fill(232, 159, 19, 50);
    ellipse(random(640), random(300), random(50), random(100));  //orange
}

function draw() {
    translate(random(200), random(200));
    rotate(rotateby);
    makeOval();
    rotateby += 20;
}


function mousePressed() {
   noLoop();
}

