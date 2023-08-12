


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,floor;
var engine,world;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var prop_ball = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var prop_floor = {
    isStatic: true
  }

  floor = Bodies.rectangle(200, 390, 400, 20, prop_floor);
  World.add(world,floor);

  ball = Bodies.circle(100, 10, 30, prop_ball);
  World.add(world,ball);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  rect(floor.position.x,floor.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 


  
  
}

