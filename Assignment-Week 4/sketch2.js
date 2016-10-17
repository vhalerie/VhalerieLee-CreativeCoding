var h=100;
var s=100;
var b=100;

var rectStep = 45;

function setup(){
  var cnv = createCanvas(400,400);
  var w=(windowWidth - width)/2;
  var h=(windowHeight - height)/2;
  cnv.position(w,h);
  background(255);
}

function draw(){
  //old young stripes
  rectStep = max(45, mouseX);
  
  colorMode(HSB, 360,255,255);
  for (var x=0; x<width; x+=rectStep){
      noStroke();
      fill(x+h%100, x+s%50, x+b%50);
      rect(x,0,rectStep,height);
  }
}