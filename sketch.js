const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var backgroundImg, fruitImg,RabitImg, cutButton
var rabbit 
var button 


function preload(){
  backgroundImg = loadImage("background.png")
  fruitImg = loadImage("melon.png")
  RabbitImg = loadImage("Rabbit-01.png")

}


function setup() 
{

  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  
  rabbit = createSprite(350,625,100,100);
  rabbit.addImage(RabbitImg)
  rabbit.scale = .2
  ground = new Ground(200,709,600,20);
  ground.visible = false
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  button = createImg("cut_button.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)

  fruit_con = new Link(rope,fruit);
  imageMode(CENTER)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}


function draw() 
{

  background(51);
  image(backgroundImg,width/2,height/2,500,700)
  rope.show();
  image(fruitImg,fruit.position.x,fruit.position.y,80,80);
  Engine.update(engine);
  ground.show();
  drawSprites();

}


function drop(){

  rope.break()
  fruit_con.detach()
  fruit_con = null 

}
