var Fixedrect,Movingrect

function setup() {
  createCanvas(800,400);
  
  Fixedrect=createSprite(400, 200, 50, 50);
  Fixedrect.shapeColor="green";
  Fixedrect.debug=true;

  Movingrect=createSprite(400, 200, 50, 50);
  Movingrect.shapeColor="green";
  Movingrect.debug=true;

}

function draw() {
  background(255,255,255);  

  Movingrect.x=mouseX;
  Movingrect.y=mouseY;

  if(Movingrect.x-Fixedrect.x<Movingrect.width/2+Fixedrect.width/2 && 
    Fixedrect.x-Movingrect.x<Movingrect.width/2+Fixedrect.width/2 &&
    Fixedrect.y-Movingrect.y<Movingrect.height/2+Fixedrect.height/2 &&
    Movingrect.y-Fixedrect.y<Movingrect.height/2+Fixedrect.height/2){
      Fixedrect.shapeColor="red";
      Movingrect.shapeColor="red";
    }
    else{
      Fixedrect.shapeColor="green";
      Movingrect.shapeColor="green";
    }

  drawSprites();
}