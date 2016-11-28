var waveLengthOne = 125.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
var amplitudeRadius = 50;
var amplitudeColor = 30;
var colorFrom, colorTo;
var lerpAmt = 0;

var gui;
var radius=10;
var weight=1;

function setup(){
  createCanvas(windowWidth,windowHeight);

  smooth();
  background(0);
  var gui = createGui('Control this sketch');
  gui.addGlobals('radius','weight', 'amplitude', 'waveLengthOne', 'waveLengthTwo');
  //noLoop();
}

function draw(){
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  
  
  strokeWeight(weight);
  
  colorMode(HSB, 255,100,100);
  colorFrom = color(180,30,80);
  colorTo = color(200,10,30);
  
  var lerpedColor = lerpColor(colorFrom, colorTo, lerpAmt);
  
  translate (width/2, height/2);
    beginShape();
    for(var i=0; i < pointCount; i++){
        angle = i / waveLengthOne *  TWO_PI;
        var y = sin(angle)* amplitude;

        angle = i / waveLengthTwo * TWO_PI;
        var x = sin(angle)* amplitude;
        
        fill(lerpedColor);
      
        var angleRotate = map(radius, 0,width, 0,180);
        rotate(radians(angleRotate));
      
        ellipse(x,y,radius,radius); 
        stroke(255);
        line(x,y,10,80); 
    }
	endShape();
	pointCount++;

  lerpAmt = map(sin(radians(frameCount)),-1,1,0,1);
}