const circleDiameter = 150;
//let circleX = 100;
//let circleY = 300;
let startX = 150;
let startY = 250;

function setup() {
    createCanvas(900, 1000);
    background("#042152");
    fill("#bef2f9");
    noStroke();
    //ellipse(circleX, circleY, circleDiameter);
    for(let j = 0; j < 4; j++) {            //array for rows 2-4
        for(let i = 0; i < 4; i++) {        //array for fisrt row
            ellipse(startX, startY, circleDiameter);
            startX += 200;                  //horiz gap between circles
    }    
    startY += 200;                          //vertical gap between circles
    startX = 150;                           //x position for row starts 2-4
    }   
}

function draw() {
    fill("#ffba10");
    noStroke();
    quad(0, 0, 600, 0, 675, 125, 0, 125);   //header
    fill("#9a700a");
    noStroke();
    quad(604, 0, 1000, 0, 1000, 125, 679, 125);     //tally

    
    
    
    
}