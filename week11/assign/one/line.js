function setup() {
    createCanvas(600, 600);
    background(179, 226, 48);
  
}

function makeLine() {
    stroke(223, 69, 1);
    line(0, 50, 0, 600);
    stroke(179, 226, 48);
    line(0, 100, 0, 600);

}

function makeCircle() {
    fill(223, 69, 1);
    noStroke();
    ellipse(0, 100, 15);
    fill(179, 226, 48);
    noStroke();
    ellipse(0, 450, 10);
}

function draw() {
    translate(random(600), random(600));
    makeLine();
    makeCircle();
}


function mousePressed() {
    noLoop();
 }