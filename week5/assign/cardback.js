function setup() {
createCanvas(400, 400);
background("#042152");
}

function draw() {
    fill("#bef2f9");
    noStroke();
    ellipse(200, 200, 150);
    fill("#ffba10");
    noStroke();
    triangle(200, 140, 240, 200, 160, 200);     //top triangle
    triangle(200, 260, 160, 200, 240, 200);     //bottom triangle
    noFill();
    stroke("#ffba10");
    strokeWeight(2)
    ellipse(200, 200, 120);
    ellipse(200, 200, 80, 120);
    ellipse(200, 200, 60, 120);
    ellipse(200, 200, 40, 100);
    ellipse(200, 200, 120, 60);
}