function setup() {
createCanvas(400, 400);
pixelDensity(1);
noLoop();
}

function draw() {
loadPixels();
for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    let n = noise(x * 0.02, y * 0.02);
    let b = map(n, 0, 1, 0, 255);
    set(x, y, color(b, b, 255));
  }
}
updatePixels();
}