let grid = undefined;
function setup(){
    createCanvas(1000, 800);
    background(210);
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    background(grid);
}
