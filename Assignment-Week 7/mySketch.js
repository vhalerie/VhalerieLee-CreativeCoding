var waveLengthOne = 125.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
var amplitudeRadius = 50;
var amplitudeColor = 30;
var colorFrom, colorTo;
var lerpAmt = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB, 360,100,100);
  colorFrom = color(10,100,100);
  colorTo = color(50,100,100);
  smooth();
  //background(255);
}
function draw(){
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  
  strokeWeight(1);
  
  var lerpedColor = lerpColor(colorFrom, colorTo, lerpAmt);
  
  translate (width/2, height/2);
    beginShape();
    for(var i=0; i < pointCount; i++){
        angle = i / waveLengthOne * TWO_PI;
        var y = sin(angle)* amplitude;

        angle = i / waveLengthTwo * TWO_PI;
        var x = sin(angle)* amplitude;
        
        var ellipseRadius = sin(angle) * amplitudeRadius;
        
        fill(lerpedColor);
      
        var angleRotate = map(ellipseRadius, 0,width, 0,180);
        rotate(radians(angleRotate));
      
        ellipse(x,y,ellipseRadius,ellipseRadius); 
        stroke(255);
        line(x,y,10,80); 
    }
	endShape();
	pointCount++;

  lerpAmt = map(sin(radians(frameCount)),-1,1,0,1);
}