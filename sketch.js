var log1;
var log2;
var log3;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,600,10);

	Engine.run(engine);

    log1 = new log(570,600,20,100);
	log2 = new log(630,640,100,20);
	log3 = new log(690,600,20,100);

	//Create a Ground
	ground = new Ground(width/2, 650, width, 10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  log1.display();
  log2.display();
  log3.display();
  ball.display();
  ground.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:13, y:-10})
	}
}



