function Particle(size){
    this.color;
  	this.size = size;
    this.xpos;
    this.ypos;
}

Particle.prototype.moveParticles = function(x, y, angle, i){
  Particle.xpos = sin(radians(angle)) * 0.05 + mouseX;
  Particle.ypos = cos(radians(angle)) * 0.05 + mouseY;
  translate(Particle.xpos, Particle.ypos);
}

var particleSystem = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);
  
  //add the particles to our empty particle system array
  for(var i=0; i < 1000; i++){
  	particleSystem.push( new Particle(random(12) ) );
  }
  //noLoop();
  smooth();
}

function draw() {
  var amplitude = height/8;
  var angle=0.0;
  background(0);
  noStroke();
  
  push();
  translate(width/2, height/2);
  for(var i=0; i < particleSystem.length; i++){
    
    colorMode(HSB, 255,100,100);
    var colorFrom = color(180,30,80);
    var colorTo = color(200,10,30);
    var lerpAmount = map(i, 0, width, 0, 1.0);
    var lerpedColor = lerpColor(colorFrom, colorTo, lerpAmount);
    
    var angle = i / 90 * PI;
    
    var z = cos(radians(angle)) * amplitude;
    rotate(z * radians(TWO_PI) );
    
    var angle2 = 0.0;
    var x = width/2 + cos(radians(angle2));
    var y = height/2 + sin(radians(angle2));
    
    angle2+=5.0;
    
    fill(lerpedColor);
    ellipse(i*0.5, i*0.5, particleSystem[i].size, particleSystem[i].size);
    
    particleSystem[i].moveParticles(x,y,PI,i);
    
    angle+=2.0;
  }
  pop();
}