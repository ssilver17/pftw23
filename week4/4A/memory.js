const circleDiameter = 150;
//let circleX = 100;
//let circleY = 300;
let startX = 150;
let startY = 250;

function setup() {
    createCanvas(900, 1000);
    background("#042152");
    fill("#e1e8a9");
    //ellipse(circleX, circleY, circleDiameter);
    for(let j = 0; j < 4; j++) {
        for(let i = 0; i < 4; i++) {
            ellipse(startX, startY, circleDiameter);
            startX += 200;
    }    
    startY += 200;
    startX = 150;
    }   
}

function draw() {
    //noLoop();
    
    
    
    
}