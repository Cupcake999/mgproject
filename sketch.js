
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,50,30);
	mango2 = new mango(900,175,30)
	mango3 = new mango(1100,120,30)
	mango4 = new mango(1000,70,30)
	mango5 = new  mango(1000,230,30)
	mango6 = new mango(1190,140,30)
	mango7 = new mango(1100,200,30)
	mango8 = new mango(1000,150,30)
	mango9 = new mango(1200,220,30)
	mango10 = new mango(930,225,30)

	stoneObj = new Stone(235,420,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

  //thread=new constraint(stoneObj,{x:230,y:315});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  groundObject.display();
//thread.display();

  
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseRealsed(){
    thread.fly();
}