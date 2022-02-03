var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage;
var obstacle;
var obstacleImg1, obstacleImg2, obstacleImg3, obstacleImg4, obstacleImg5, obstacleImg6;



function preload() {
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");

  obstacleImg1 = loadImage("obstacle1.png");
  obstacleImg2 = loadImage("obstacle2.png");
  obstacleImg3 = loadImage("obstacle3.png");
  obstacleImg4 = loadImage("obstacle4.png");
  obstacleImg5 = loadImage("obstacle5.png");
  obstacleImg6 = loadImage("obstacle6.png");
}

function setup() {

  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  //creating invisible ground
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

}

function draw() {
  //set background color
  background("black");

  // jump when the space key is pressed
  if (keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //stop trex from falling down
  trex.collide(invisibleGround);
  
  spawnClouds();
  spawnObstacles();

  drawSprites();

}

function spawnObstacles() {
  if(frameCount % 60 === 0){
    obstacle = createSprite(600,170,20,40);
    obstacle.velocityX = -4;

    var rand = Math.round(random(1,6));

    switch(rand){
      case 1: obstacle.addImage(obstacleImg1);
      break;
      case 2: obstacle.addImage(obstacleImg2);
      break;
      case 3: obstacle.addImage(obstacleImg3);
      break;
      case 4: obstacle.addImage(obstacleImg4);
      break;
      case 5: obstacle.addImage(obstacleImg5);
      break;
      case 6: obstacle.addImage(obstacleImg6);
      break;
      default: 
      break;
    }
    obstacle.scale=0.5;
    obstacle.lifetime = 170;
  }
}

function spawnClouds() {
  if(frameCount %60===0){

    cloud = createSprite(600,50,20,30);
    cloud.addImage(cloudImage)
    cloud.velocityX = -5
    

    cloud.y = Math.round(random(20,100))
    cloud.scale=0.5

    trex.depth=cloud.depth
    trex.depth=trex.depth+1
    cloud.lifetime = 150;
  }
}