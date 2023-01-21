let grid = undefined;
function setup(){
    createCanvas(1000, 800);
    background(210);
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    background(grid);
    //snowman bottom circle
    fill("#caf9fa");
    stroke("#1e2928");
    ellipse(600, 700, 300, 250);
    //middle circle
    ellipse(600, 500, 225, 200);
    //head
    ellipse(600, 325, 175);


}
