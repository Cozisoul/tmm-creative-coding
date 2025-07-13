let lines = [];
function setup() {
createCanvas(600, 400);
for (let i = 0; i < 30; i++) {
  lines.push({y: random(height), speed: random(1, 4)});
}
background('#161616');
stroke('#1B75BC');
}

function draw() {
background('#161616', 20);
lines.forEach(line => {
  line.y += line.speed;
  if (line.y > height) line.y = 0;
  line(line.y, 0, line.y, height);
});
}