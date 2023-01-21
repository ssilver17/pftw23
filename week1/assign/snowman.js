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
    ellipse(600, 650, 300);
    //middle circle
    ellipse(600, 400, 225, 250);
    //head
    ellipse(600, 200, 175);


}
