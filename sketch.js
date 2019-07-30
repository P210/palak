function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createSprite(600,200,100,100);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}