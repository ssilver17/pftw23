let song;

function preload() {
    song = loadSound('trapLoop.mp3');
}

function setup() {
    song = loadSound('trapLoop.mp3', loaded);
    createCanvas(600, 600);
    amplitude = new p5.Amplitude();
}

function draw() {
    background('#d91e79');
    let level = amplitude.getLevel();
    let diam = map(level, 0, 1, 50, 200);
    noStroke();
    fill("#1ed2d9");
    ellipse(width/2, height/2, diam, diam);   
}

function loaded() {
   button = createButton("play");
   button.mousePressed(togglePlaying);
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(.5);
        button.html("pause");
    } else {
      song.stop();
      button.html("play");
   }
}