
var Runner,Runner_running;
var ground,invisibleGround1,invisibleGround2,groundimg;

function preload(){
  //pre-load images
  Runner_running=loadAnimation("Runner-1.png","Runner-1.png")
  groundimg=loadImage("path.png") 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground= createSprite(200,180,400,20)
  ground.addImage("ground",groundimg)
  ground.velocityY= 4;
  Runner=createSprite(200,280,40,40)
  Runner.addAnimation("running",Runner_running)
  Runner.scale=0.1;
 invisibleGround1=createSprite(10,190,400,20)
 invisibleGround1.rotation=90;
 invisibleGround1.visible=false
invisibleGround2=createSprite(390,200,400,20)
invisibleGround2.rotation=90;
invisibleGround2.visible=false

}

function draw() {
  background(0);
  drawSprites()
  if (keyDown("LEFT")) {
    Runner.velocityX=-4;  
  }
  if (keyDown(RIGHT)){
    Runner.velocityX=4;
  }
  if(ground.y > 400){
    ground.y = height/2
  }
  
  Runner.collide(invisibleGround1);
  Runner.collide(invisibleGround2);


}
