let trap;
let bounce;
let base;
let cowbell;
let crash;

function preload() {
    trap = loadSound('trapLoop.mp3');
    bounce = loadSound('bounce.mp3');
    base = loadSound('base.mp3');
    cowbell = loadSound('cowbell.mp3');
    crash = loadSound('crash.mp3');
}

function setup() {
    createCanvas(1200, 600);
    amplitude = new p5.Amplitude();

    buttonTrap = createButton("trap");
    buttonTrap.mousePressed(togglePlayingTrap);

    buttonBounce = createButton("bounce");
    buttonBounce.mousePressed(togglePlayingBounce);

    buttonBase = createButton("base");
    buttonBase.mousePressed(togglePlayingBase);

    buttonCowbell = createButton("cowbell");
    buttonCowbell.mousePressed(togglePlayingCowbell);

    buttonCrash = createButton("crash");
    buttonCrash.mousePressed(togglePlayingCrash);
}




function togglePlayingTrap() {
    if (!trap.isPlaying()) {
        trap.play();
        trap.setVolume(2);
    } else {
      trap.stop();
      button.html("trap");
   }
}

function togglePlayingBounce() {
    if (!bounce.isPlaying()) {
        bounce.play();
        bounce.setVolume(2);
    } else {
      bounce.stop();
      button.html("bounce");
   }
}

function togglePlayingBase() {
    if (!base.isPlaying()) {
        base.play();
        base.setVolume(2);
    } else {
      base.stop();
      button.html("base");
   }
}

function togglePlayingCowbell() {
    if (!cowbell.isPlaying()) {
        cowbell.play();
        cowbell.setVolume(2);
    } else {
      cowbell.stop();
      button.html("cowbell");
   }
}

function togglePlayingCrash() {
    if (!crash.isPlaying()) {
        crash.play();
        crash.setVolume(2);
    } else {
      crash.stop();
      button.html("crash");
   }
}

function draw() {
    background('#f0ca17');
    let level = amplitude.getLevel();
    let diam1 = map(level, 0, 1, 150, 800);
    let diam2 = map(level, 0, 2, 500, 2000);
    let diam3 = map(level, 0, 1.5, 1000, 1200);
    let diam4 = map(level, 0, 2, 100, 600);
    let diam5 = map(level, 0, 2, 300, 1000);

    noStroke();
    fill(30, 210, 217, 100);
    ellipse(100, 300, diam1, diam1);   //trap

    noStroke();
    fill(240, 23, 171, 80);
    ellipse(400, 550, diam2, diam2);   //bounce

    noStroke();
    fill(4, 33, 82, 200);
    ellipse(1000, 100, diam3, diam3);   //base

    noStroke();
    fill(230, 27, 74, 200);
    ellipse(450, 0, diam4, diam4);   //cowbell

    noStroke();
    fill(100, 33, 99, 200);
    ellipse(100, 50, diam5, diam5);   //crash
}