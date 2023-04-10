

function setup() {
    createCanvas(600, 600);
    background(18, 68, 159);
    frameRate(5)
}

function redAngle() {
    strokeWeight(3);
    stroke(212, 29, 82);
    for (var x = 0; x < 600; x +=5) {
    line(100, 0, 500, 235);
    line(x, 0, 600, 200);
    }
}


function blueAngle() {
    strokeWeight(1);
    stroke(18, 68, 159);
    for (var x = 10; x < 600; x +=5) {
    line(0, 225, x, 0);
    line(x, 550, x, 200);
    }
}

function draw() {
    translate(random(50), random(600));
    redAngle();
    blueAngle();
}


function mousePressed() {
    noLoop();
 }