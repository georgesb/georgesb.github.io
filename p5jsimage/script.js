var img;
function preload() {
  img = loadImage('monkey.png');
}
function setup() {
  createCanvas(500,500);
  image(img, 0, 0);
}
