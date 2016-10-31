function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(3);
}

function draw() {
  
  
  for(var i=0; i< width; i++){
    push();
    
    //color the ellipses
    colorMode(HSB, 255,100,100);
    var colorFrom = color(random(200),100,100);
    var colorTo = color(random(100),100,100);
    var lerpAmount = map(i, 0, width, 0, 1.0);
    var lerpedColor = lerpColor(colorFrom, colorTo, lerpAmount);
    fill(lerpedColor);
    
    translate(width/2, height/2);
    rotate(i * radians(TWO_PI));
  
    //draw ellipses
    ellipse(i,i,25,25);
    
    pop();
  }
  
}