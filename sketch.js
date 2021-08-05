//Renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

var balls=[]


function preload() {
  backgroundImg = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(1200,600);
  //creating engine
  engine = Engine.create();
  //creating world inside engine
  world = engine.world;
  //creating objects using classes
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600, height - 40, width, 1);
  cannon=new Cannon(180,110,110,50,-PI/4)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  for(var i=0;i<balls.length;i++){
    showballs(balls[i],i)
  }

  Engine.update(engine);  

  tower.display();
  cannon.display()
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    cannonball=new CannonBall(cannon.x,cannon.y)
    balls.push(cannonball)
  }
}

function showballs(ball,index){
  ball.display()
  if(ball.body.position.x>width||ball.body.position.y>height-100){
    World.remove(world,ball.body)
    balls.splice(index,1)
  }
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].fire()
  }
}





