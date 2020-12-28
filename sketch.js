const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var pig1;
var pig2;
var Log1;
var Log2;
var Log3;
var Log4;
var box5;
var Bird1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
   
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    Log1  = new Log(810,260,300,PI/2)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    Log2  = new Log(810,180,300,PI/2)

    Log3  = new Log(760,120,150,PI/7);
    box5 = new Box(810,160,70,70);
    Log4 = new Log(870,120,150,-PI/7);

    Bird1 = new Bird(300,300);
    
}

function draw(){
    background("white");
    Engine.update(engine);
   /* console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle); */
    box1.display();
    box2.display();
    ground.display();

    pig1.display();
    Log1.display();
    box3.display();
    box4.display();
    pig2.display();
    Log2.display();

    Log3.display();
    Log4.display();
    box5.display();
    Bird1.display();
};