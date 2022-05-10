var ghost, ghostImage
var climber, climberImage, climbersGroup
var door, doorImage, doorsGroup
var tower, towerImage
var InvisibleBlock, InvisibleBlockGroup
var gamestate="play"
function setup() {
createCanvas(600,600);
ghost=createSprite(200,200,50,50)
ghost.scale=0.4
ghost.addImage("ghost, ghostImg")
 

tower=createSprite(300,300)
 tower.addImage("tower", towerImg)
 tower.velocityY=1

 doorsGroup = new Group();
 climbersGroup= new Group ()
 InvisibleBlockGroup= new Group ()


}

function preload(){
ghostImage=loadImage("ghost-standing.png")
climberImage=loadImage("climber.png")
towerImage=loadImage("tower.png")
doorImage=loadImage("door.png")
}
function draw(){
drawSprites()
background(0)
 if (gamestate ==+ "play") {
   if (keydown("right_arrow")){
     ghost.x=ghost.x + 4
}
if (keydown("left_arrow")){
  ghost.x = ghost.x +4
}
if (keydown("space")){
  ghost.velocityY= -8
}
ghost.velocityY= ghost.velocityY + 0.9

if (tower.y > 400){
  tower.y =300
}
SpawnDoors()

if (gamestate === "end "){
  stroke("red")
  fill("red")
  textSize(40)
  text("Game Over", 250, 250)
}

 }
}
 function SpawnDoors(){
if (frameCount % 240  === 0  ){
  var door =createSprite(200, -60)
  var climber = createSprite(200,15)
  var InvisibleBlock = createSprite ( 200, 20)
  InvisibleBlock.width= climber.width
  InvisibleBlock.height  = 4
  

  door.x = Math.round (random(150,420))
  climber.x = door.x
  InvisibleBlock.x= door.x 


  door.addImage(doorImage)
  climber.addImage(climberImage)

  InvisibleBlock.velocityY=2
  door.velocityY=3
  climber.velocityY=1

  door.lifetime=200
  InvisibleBlock=200
  climber.lifetime=200

  ghost.depth = door.depth
  ghost.depth+=2

  doorsGroup.add(door)
  InvisibleBlock.debug = true
  climbersGroup.add(climber)
  InvisibleBlockGroup.add(InvisibleBlock)
  



}
 }