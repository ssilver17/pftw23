var pos;
var angle = 0.0;


function setup() {
    createCanvas(1200, 800);
    angleMode(DEGREES);

    pos = 0.0
    inc = 2.0
}

function draw() {
    background(99, 231, 295);

    tree();
    leaf();
}

function tree() {
    fill(78, 55, 18);
    noStroke();
    rect(0, 0, 225, 800);
    fill(99, 231, 295);
    ellipse(225, 300, 200, 1000);
}

function leaf() {
    var mySinVal = sin(pos);
    amplified = mySinVal * 10;
    
    fill(77, 171, 72);
    noStroke();
    rotate(15); 
    ellipse(200, 200, amplified, 50);

    fill(46, 83, 16);
    noStroke();
    rotate(5); 
    ellipse(300, 100, amplified + 20, 70);
    
    pos = pos + inc;
}



