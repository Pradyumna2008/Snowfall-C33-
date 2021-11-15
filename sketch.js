var snowfall, snowfallImg

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  snowfallImg = loadImage("snow1.jpg","snow2.jpg","snow3.jpg","snow4.webp","snow5.webp");
  drawSprites();
}