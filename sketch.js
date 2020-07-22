var fixedrect,movingrect;
var rect1,rect2;

function setup() {
  createCanvas(1200,400);
 fixedrect = createSprite(200, 200, 50, 80);
 fixedrect.shapeColor = "green";
 movingrect = createSprite(400, 200, 80, 50);
 movingrect.shapeColor = "red";
 fixedrect.debug = true;
 movingrect.debug = true;
 rect1 = createSprite(600,100,50,80);
 rect1.velocityY = +5;
 rect2 = createSprite(600,300,50,80);
 rect2.velocityY = -5;
}

function draw() {
  background(0);  
movingrect.x = mouseX;
movingrect.y = mouseY;

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
{
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
}
else{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green"
}

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2)
 
{
  fixedrect.velocityX = fixedrect.velocityX*(-1);
  movingrect.velocityX = movingrect.velocityX*(-1);
}
if( movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
{
  fixedrect.velocityY = fixedrect.velocityY*(-1);
  movingrect.velocityY = movingrect.velocityY*(-1);


}



  drawSprites();
}