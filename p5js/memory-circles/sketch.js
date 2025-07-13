function setup() {
createCanvas(500, 500);
background('#161616');
noFill();
stroke('#E7D184');
}

function draw() {
let t = frameCount * 0.01;
translate(width/2, height/2);
ellipse(sin(t)*150, cos(t)*150, 60, 60);

// Stop after 500 frames for a generative snapshot
if (frameCount > 400) {
  noLoop();
}
}