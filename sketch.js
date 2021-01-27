var hr,mn,sc;
var hra,mna,sca;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  translate(200,200);
hr = hour();
mn = minute();
sc = second();
//ARROW CREATION
push();
sca = map(sc,0,60,0,360);
strokeWeight(10);
stroke("red");
rotate(sca);
line(0,0,100,0);
pop();
noFill()
strokeWeight(15);
stroke("red");
arc(0,0,300,300,0,sca)

push();
mna = map(mn,0,60,0,360);
strokeWeight(10);
stroke("blue");
rotate(mna);
line(0,0,75,0);
pop();
noFill()
strokeWeight(15);
stroke("blue");
arc(0,0,280,280,0,mna)

push();
hra = map(hr%12,0,12,0,360);
strokeWeight(10);
stroke("green");
rotate(hra);
line(0,0,50,0);
pop();
noFill()
strokeWeight(15);
stroke("green");
arc(0,0,260,260,0,hra)

  drawSprites();
}