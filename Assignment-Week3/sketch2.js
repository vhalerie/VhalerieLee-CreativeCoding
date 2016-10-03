function setup() {
  var cnv = createCanvas(400,600);
  var w=(windowWidth - width)/2;
  var h=(windowHeight - height)/2;
  cnv.position(w,h);
  background(255);
  frameRate(10);
}

function draw() {
  stroke(0);
  
  //stationary lines
  var x=0;
  var y=0;
  push();
  beginShape();
  for(i=0; i < 400; i++){
    //stroke(random(255),random(255),random(255));
    vertex(x,y);
    vertex(x,height);
    x+=5;
  }
  endShape();
  pop();
  
  //ellipses
  //noStroke();
  var ellipseWidth = 400;
  var ellipseHeight = 400;
  var numCircles =40;
  
  push();
  for (var j=0; j<numCircles; j++){
    ellipse(0, 0, ellipseWidth,ellipseHeight);
    ellipseWidth-=10;
  }

  ellipseWidth = 400;
  ellipseHeight = 400;
  for (var j=0; j<numCircles; j++){
    ellipse(width/2, height/2, ellipseWidth,ellipseHeight);
    ellipseWidth-=10;
  }
  
  ellipseWidth = 400;
  ellipseHeight = 400;
  for (var j=0; j<numCircles; j++){
    ellipse(width, height, ellipseWidth,ellipseHeight);
    ellipseWidth-=10;
  }
  
  ellipseWidth = 400;
  ellipseHeight = 400;
  for (var j=0; j<numCircles; j++){
    ellipse(width, 0, ellipseWidth,ellipseHeight);
    ellipseWidth-=10;
  }
  
  ellipseWidth = 400;
  ellipseHeight = 400;
  for (var j=0; j<numCircles; j++){
    ellipse(0, height, ellipseWidth,ellipseHeight);
    ellipseWidth-=10;
  }
  
  pop();
}