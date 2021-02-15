var fixed,moving,object1,object2,object3

function setup() {
  createCanvas(1200,800);
  fixed=createSprite(400, 200, 50, 80);
  moving=createSprite(400, 200, 80, 50);
  object1=createSprite(100,100,50,50)
  object2=createSprite(200,100,50,50)
  object3=createSprite(200,600,50,50)
 fixed.shapeColor="RED"
 moving.shapeColor="BLUE"
 object1.shapeColor="PURPLE"
 object2.shapeColor="YELLOW"
 object3.shapeColor="lightgreen"
 object2.velocityY=5;
 object3.velocityY=-5;
}

function draw() {
  background(255,255,255);  
  moving.x=mouseX
  moving.y=mouseY
bounceOff(object2,object3)
 if(isTouching(moving,object1)){
    object1.shapeColor="orange"
    moving.shapeColor="black"
 }
else if(isTouching(moving,fixed)){
fixed.shapeColor="pink"
moving.shapeColor="skyblue"
}
 else {
    object1.shapeColor="PURPLE"
    moving.shapeColor="BLUE"
    fixed.shapeColor="RED"

 }
  drawSprites();
}
