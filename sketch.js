const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground, inground;
var engine, world;
var player, ob1, ob2, ob3, ob4, ob5;
var score, hiscore, gamestate = "start";


function preload(){

  //start = loadImage("images/Start.png");
  Run = loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png","images/r5.png","images/r6.png","images/r8.png","images/r9.png","images/r10.png","images/r11.png");
  Jump = loadAnimation("Temperory Images/male/Jump__000.png","Temperory Images/male/Jump__001.png","Temperory Images/male/Jump__002.png","Temperory Images/male/Jump__003.png","Temperory Images/male/Jump__005.png")
  bg= loadImage("images/last.png");
  st= loadImage("images/stand.png");
  //iground = loadImage("images/ground.png");
  }

function setup(){
  var canvas = createCanvas(displayWidth-5, displayHeight-150);
  engine = Engine.create();
  world = engine.world;
  
  ground= createSprite(displayWidth/2,700,10000,5);
  //ground.addImage(iground);

  inground= createSprite(displayWidth/2,708,10000,5);
  inground.visible = false;
  
  player = createSprite(170,570);
  player.addAnimation("lable1",Run);
  player.scale = 0.6;

  stand1 = new Stand(1100,500,400,15);
  //stand1.addImage(st);

   //TOWER GAME.
 //level one
 block1 = new Block(920,480,30,40);
 block2 = new Block(950,480,30,40);
 block3 = new Block(980,480,30,40);
 block4 = new Block(1010,480,30,40);
 block5 = new Block(1040,480,30,40);
 block6 = new Block(1070,480,30,40);
 block7 = new Block(1100,480,30,40);
 block8 = new Block(1130,480,30,40);
 block9 = new Block(1160,480,30,40);
 block10 = new Block(1190,480,30,40);
 block11 = new Block(1220,480,30,40);
 block12 = new Block(1250,480,30,40);
 block13 = new Block(1280,480,30,40);
 //level 2
 block14 = new Block(980,435,30,40);
 block15 = new Block(1010,435,30,40);
 block16 = new Block(1040,435,30,40);
 block17 = new Block(1070,435,30,40);
 block18 = new Block(1100,435,30,40);
 block19 = new Block(1130,435,30,40);
 block20 = new Block(1160,435,30,40);
 block21 = new Block(1190,435,30,40);
 block22 = new Block(1220,435,30,40);
 block23 = new Block(12250,435,30,40);
 block24 = new Block(12280,435,30,40);
 //3
 block25 = new Block(1040,390,30,40);
 block26 = new Block(1070,390,30,40);
 block27= new Block(1100,390,30,40);
 block28 = new Block(1130,390,30,40);
 block29 = new Block(1160,390,30,40);
 //4
 block30 = new Block(1070,345,30,40);
 block31 = new Block(1100,345,30,40);
 block32 = new Block(1130,345,30,40);
 //top
 block33 = new Block(1100,300,30,40);

 
 //tower game end
 
  score =0;
  hiscore =0;
 }

function draw(){
 background("yellow");

 textStyle(BOLD);
 textFont("Algerian");
 fill("white");
 text(mouseX + " and ", 30,30);
 text(mouseY, 90,30);
 text("Score: "+ score, 1250,65,textSize(30));
 text("HiScore: "+hiscore,1250,95,textSize(30));

 if(frameCount%5===0 && gamestate=== "play"){
 
 score=score+1;
 }
 if(gamestate === "start"){
 if(keyDown("Enter")){

    gamestate === "play";
 }
}

 if(gamestate==="play"){
    
 if(keyDown("space")&& player.y>=550){

 player.velocityY=-18;  
 player.addAnimation(Jump);

}

player.velocityY=player.velocityY+0.8; 

}


 player.collide(inground);
 ground.velocityX = -10;

 if (ground.x < 0){
  ground.x = displayWidth/2;
} 

 if(score>1000 && keyDown("space")&& player.y>=565){

  player.velocityY=-20;

 }

 Engine.update(engine); 
 ground.display();
 drawSprites();
  stand1.display();
  fill("blue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill("green")
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  fill("red")
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  fill("skyblue")
  block30.display();
  block31.display();
  block32.display();
  block33.display();

}