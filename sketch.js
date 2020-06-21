const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var top1
var rope1, rope2, rope3, rope4, rope5;
var world, engine;

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;
	top1=new roof(width/2, height/4, width/7,20);
	bobD=40;
	bobX=width/2;
	bobY=height/4+300;
	bob1=new bob(bobX-bobD*2, bobY, bobD);
	bob2=new bob(bobX-bobD, bobY, bobD);
	bob3=new bob(bobX, bobY, bobD);
	bob4=new bob(bobX+bobD, bobY, bobD);
	bob5=new bob(bobX+bobD*2, bobY, bobD);
var render= Render.create({
	element:document.body, engine: engine, options:{
		width: 1200, height: 900, wireframes: false
	}
});
	rope1=new rope(bob1.body, top1.body, -bobD*2, 0);
	rope2=new rope(bob2.body, top1.body, -bobD, 0);
	rope3=new rope(bob3.body, top1.body, 0, 0);
	rope4=new rope(bob4.body, top1.body, +bobD, 0);
	rope5=new rope(bob5.body, top1.body, +bobD*2, 0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  top1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x: -50, y: -45});
	}
}