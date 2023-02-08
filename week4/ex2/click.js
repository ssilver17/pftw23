let rectX = 0;
let rectY;
const rectWidth = 50;
const rectHeight = 75;
let clickCount = 0;
let speed;

function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 5);
}

function draw() {
    background("#173454");
    drawShape();
    rectX += speed;

    if(rectX > width) {
    noLoop();
    text("Your score was " + clickCount, 200, 480);
}
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >=rectY && mouseY <= rectY + rectHeight)) {
        clickCount ++;
        console.log("it's a hit!");
}
}

function drawShape() {
    fill("#de218e");
    rect(rectX, rectY, rectWidth, rectHeight);
}