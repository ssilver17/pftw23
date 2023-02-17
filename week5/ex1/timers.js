let blockX = 0;
let blockY = 0;
let blockColor = HSB, 255;
let drawTimer;
const speed = 15;
const distance = 5;

function setup() {
    createCanvas(500, 500);
    background("#184a5a"); 
}

function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if(isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    blockColor = keyToNumber
    console.log("key to number ", keyToNumber);
}

drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    if(blockY - 50 > height && blockX - 50 > width) {
        window.clearInterval(drawTimer);
        alert("done!");
    }
        

}, speed);