const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,log1,pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,330,70,70);
    box2 = new Box(820,330,70,70);
    ground = new Ground(600,390,1200,30)
    pig1 = new Pig(710,330);
    log1 = new Log(710,290,300,PI/2);
    box3 = new Box(600,250,70,70);
    box4 = new Box(820,250,70,70);
    pig2 = new Pig(710,250);
    log2 = new Log(710,190,300,PI/2);
    box5 = new Box(710,170,70,70);
    log3 = new Log(660,130,200,PI/7);
    log4 = new Log(770,130,200,-PI/7);
    bird = new Bird(100,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}
