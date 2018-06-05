var img;
function preload() {
  img = loadImage('http://georgesb.github.io/p5jsimage/monkey.png');
}
function setup() {
  createCanvas(500,500);
  image(img, 0, 0);
}
