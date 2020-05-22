var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var boxBaseBar, boxBaseBarBody;
var boxRightBar, boxRightBarBody;
var boxLeftBar,boxLeftBarBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var packageBody,ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER); 

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxBaseBar = createSprite(width/2,665,200,20);

	boxLeftBar =createSprite(width/2-100,625,20,100);

	boxRightBar = createSprite(width/2+100,625,20,100);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	
	
	
    boxBaseBarBody = Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	World.add(world, boxBaseBar);


	boxRightBarBody = Bodies.rectangle(width/2+100,620,20,100,{isStatic: true})
    World.add(world,boxRightBar);

	boxLeftBarBody = Bodies.rectangle(width/2-100,620,20,100,{isStatic:true});
	World.add(world, boxLeftBar);



	boxBaseBar.shapeColor= "red";

	boxRightBar.shapeColor="red";

	boxLeftBar.shapeColor="red";




	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



