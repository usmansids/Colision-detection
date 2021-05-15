var fixed;var movingedge;
function setup() {
  
  createCanvas(800,400);
  fixed=createSprite(600,200,50,80);
  movingedge=createSprite(200,200,80,30);
  fixed.shapeColor="green";
  movingedge.shapeColor="green";
  fixed.debug=true;
  movingedge.debug=true;
}

function draw() {
  background(255,255,255);
movingedge.x=mouseX;
movingedge.y=mouseY;
if(movingedge.x-fixed.x<fixed.width/2+movingedge.width/2
  && fixed.x-movingedge.x<fixed.width/2+movingedge.width/2
  && movingedge.y-fixed.y<fixed.width/2+movingedge.width/2
  && fixed.y-movingedge.y<fixed.width/2+movingedge.width/2)
{fixed.shapeColor="red";
movingedge.shapeColor="red";
}
else{
  fixed.shapeColor="green";
  movingedge.shapeColor="green";
}
  drawSprites();}