function setup() {
    createCanvas(600, 600);
}

function createTile(originx, originy, cornerCirclecolor, tileColor, lineColor, centerDot) {
    translate(originx, originy);
    fill(tileColor);
    noStroke();
    rect(0, 0, 200, 200);
    noFill();
    stroke("white");
    strokeWeight(6);
    circle(0, 0, 80);
    circle(200, 0, 80);
    circle(0, 200, 80);
    circle(200, 200, 80);
    stroke("#f5e530");
    strokeWeight(2);
    strokeCap(ROUND);
    line(100, 0, 100, 200); //center fan line
    line(100, 0, 80, 70); //top left
    line(100, 0, 60, 60);  //top left
    line(100, 0, 40, 40);  //top left
    line(100, 0, 120, 70);  //top right
    line(100, 0, 140, 60);  //top right
    line(100, 0, 160, 40);  //top right
    line(100, 200, 80, 70); //bottom left
    line(100, 200, 60, 60);  //bottom left
    line(100, 200, 40, 40);  //bottom left
    line(100, 200, 120, 70);  //bottom right
    line(100, 200, 140, 60);  //bottom right
    line(100, 200, 160, 40);  //bottom right
    fill(centerDot);
    noStroke();
    circle(100, 70, 20); //center circle large
    fill("#e08613");
    circle(100, 50, 10);  //center circle med
    circle(100, 90, 8);  //center circle small
    fill(cornerCirclecolor);
    circle(0, 0, 20);  //corner orange circle
    circle(200, 0, 20);  //corner orange circle
    circle(0, 200, 20);  //corner orange circle
    circle(200, 200, 20);  //corner orange circle
    stroke(lineColor);
    strokeWeight(2);
    strokeCap(SQUARE);
    line(0, 100, 40, 100);
    line(160, 100, 200, 100);
}

function draw() {
    createTile(0, 0, "#fa9616" ,"#3798b9", "#a12506", "#082838");
    createTile(0, 200, "#3798b9", "#fa9616", "#082838", "#a12506");
    createTile(0, 200, "#fa9616" ,"#3798b9", "#a12506", "#082838");
    createTile(200, -400, "#3798b9", "#fa9616", "#082838", "#a12506");
    createTile(0, 200, "#fa9616" ,"#3798b9", "#a12506", "#082838");
    createTile(0, 200, "#3798b9", "#fa9616", "#082838", "#a12506");
    createTile(200, -400, "#fa9616" ,"#3798b9", "#a12506", "#082838");
    createTile(0, 200, "#3798b9", "#fa9616", "#082838", "#a12506");
    createTile(0, 200, "#fa9616" ,"#3798b9", "#a12506", "#082838");
}
    