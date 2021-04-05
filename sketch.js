
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(200,100,50,80);
  gameObject1.shapeColor="red";
  gameObject2 = createSprite(300,100,50,50);
  gameObject2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    gameObject2.shapeColor= "yellow";
    gameObject1.shapeColor="yellow";
  }
  else if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor = "cyan";
  }
  else if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor = "cyan";
  }
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
    gameObject1.shapeColor = "maroon";
  
    gameObject2.shapeColor = "maroon"
  }
 
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

