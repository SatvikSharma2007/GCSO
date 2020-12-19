var car;
var wall;
var speed,weight;
var D;



function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
wall= createSprite(1500,200,60,height/2);
car.velocityX=speed;

}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
    car.velocityX=0;
    D=0.5*weight*speed*speed/22500
    if (D <100){
    car.shapeColor="green"
    } 
    else if (D>100 && D<180){
      car.shapeColor="yellow"
    }
    else{car.shapeColor="red"}
   }

  drawSprites();
}