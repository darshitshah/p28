
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy,sling;
//var slingShot
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,200,30);
	mango3=new mango(1000,200,30);
	mango4=new mango(980,110,30);
	mango5=new mango(1130,190,30);
	mango6=new mango(1040,70,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(235,415,70,70);
	sling = new slingshot (stoneObj.body,{x:230,y:400});
	
	

}

function draw() {

  background(230);
  Engine.update(engine)
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();
  stoneObj.display();
  sling.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function detectcollision(stone,mango){
var stonebodyposition = stone.body.position
var mangobodyposition = mango.body.position
var distance = dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
if(distance<=stone.r+mango.r){
  Matter.Body.setStatic(mango.body,false)
}
}