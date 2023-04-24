var pos;
var angle = 0.0;


function setup() {
    createCanvas(1200, 800);
    angleMode(DEGREES);
    frameRate(1);

    pos = 0.0
    inc = 2.0
}

function draw() {
    background(99, 231, 295);

    tree();
    randomSeed(0);
    for (var i = 100; i < width + 100; i += 10) {
        var scalar = random(0.25, 1.0);
        leafA(i, 110, scalar);
    }
    for (var j = 100; j < width + 100; j += 20) {
        var scalar = random(0.25, 1.0);
        leafB(j, 100, scalar);
    }

    
}

function tree() {
    fill(78, 55, 18);
    noStroke();
    rect(0, 0, 225, 800);
    fill(99, 231, 295);
    ellipse(225, 300, 200, 1000);
}

function leafA(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    var mySinVal = sin(pos);
    amplified = mySinVal * 10;
    
    fill(77, 171, 72);
    noStroke();
    rotate(15); 
    ellipse(300, 100, amplified, 50);
    pos = pos + inc;
    pop();
}

function leafB(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    var mySinVal = sin(pos);
    amplified = mySinVal * 10;
    
    fill(49, 94, 41);
    noStroke();
    rotate(30); 
    ellipse(100, 100, amplified, 75);
    pos = pos + inc;
    pop();
}



