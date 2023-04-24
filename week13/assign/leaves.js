var pos;
var angle = 0.0;


function setup() {
    createCanvas(1200, 800);
    angleMode(DEGREES);
    frameRate(3);

    pos = 0.0
    inc = 2.0
}

function draw() {
    background(12, 31, 60);
    moon();
    tree();
    randomSeed(99);
    for (var i = 0; i < width; i += 5) {
        var scalar = random(0.05, .75);
        dotA(i, 0, scalar);
    }    
}

function tree() {
    fill(78, 55, 18);
    noStroke();
    rect(0, 0, 225, 800);
    fill(12, 31, 60);
    ellipse(225, 300, 200, 1000);   //tree trunk

    fill(64, 123, 45);              //leaves
    ellipse(100, 100, 400, 500);

    fill(61, 112, 47, 200);
    ellipse(300, 50, 400, 300);

    fill(83, 210, 26, 150);
    ellipse(300, 200, 300, 300);

    fill(73, 139, 15, 200);
    ellipse(475, 100, 200, 300);

    fill(61, 112, 47, 150);
    ellipse(600, 50, 200, 200);
}

function dotA(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    var mySinVal = sin(pos);
    amplified = mySinVal * 10;
    
    fill(255, 242, 99);
    noStroke();
    rotate(30); 
    ellipse(1000, 800, amplified, 5);
    pos = pos + inc;
    pop();
}

function moon() {
    fill("#f8f3b9");
    noStroke();
    ellipse(1000, 100, 100, 100);

    fill(12, 31, 60);
    ellipse(980, 110, 100, 100);

}




