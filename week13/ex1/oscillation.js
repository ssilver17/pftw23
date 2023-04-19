var pos;

function setup( ) {

    createCanvas(1200, 600);
    angleMode(DEGREES);

    pos = 0.0;
    inc = 1;

    pos2 = 0.0;
    inc2 = 2;
}

function draw() {
    translate(200, 200);
    background(240, 29, 238, [50]);
    fill(24, 8, 24, 50);
    stroke("#642163");

    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal * 1000;
    amplified2 = mySinVal2 * 50;

    for (x = 0; x <=360; x = x + 1) {
        triangle(200, 400, 200, amplified, amplified2, 800);
        rotate(x)
    };
    
    pos = pos + inc;
    pos2 = pos2 + inc;
}