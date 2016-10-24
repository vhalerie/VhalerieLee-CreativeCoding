function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  var w=(windowWidth - width)/2;
  var h=(windowHeight - height)/2;
  cnv.position(w,h);
  background(253,239,239);
  //background(0);
}

function draw() {
  for(var x=0; x<width; x+=80){
    for(var y=0; y<height; y+=120){
      drawPusheen(x,y);
    }
  }
}

function drawPusheen(x,y){
  noStroke();
  fill(224,224,224);
  
  //ears
  push();
  beginShape(TRIANGLES);
  vertex(x+12.5,y);
  vertex(x+10,y+10);
  vertex(x+15,y+10);

  vertex(x+60,y+10);
  vertex(x+57.5,y);
  vertex(x+55,y+10);
  endShape(CLOSE);
  pop();
  
  //shape of the face
  rect(x+10,y+10,50,40);
  beginShape(TRIANGLES);
  vertex(x+10,y+10);
  vertex(x+10,y+50);
  vertex(x,y+50);
  
  vertex(x+60,y+10);
  vertex(x+60,y+50);
  vertex(x+70,y+50);
  endShape();
  
  //eyes
  fill(102,51,0);
  ellipse(x+20,y+25,8);
  ellipse(x+50,y+25,8);
  
  //nose & mouth
  fill(253,0,0);
  strokeWeight(2);
  stroke(102,51,0);
  ellipse(x+35,y+32,5);
  
  //whiskers
  stroke(102,51,0);
  strokeWeight(2);
  line(x,y+20,x+10,y+24);
  line(x,y+24,x+12,y+28);
  line(x+70,y+20,x+60,y+24);
  line(x+70,y+24,x+58,y+28);
  
  //body
  noStroke();
  fill(224,224,224);
  rect(x,y+50,70,50,3,3,18,18);
  
  //hands
  stroke(102,51,0);
  arc(x+15,y+60,8,8,PI+HALF_PI,PI);
  arc(x+55,y+60,8,8,PI+HALF_PI,PI);
  
  //feet
  noStroke();
  arc(x+15,y+101,10,10,PI+HALF_PI,PI);
  arc(x+55,y+101,10,10,PI+HALF_PI,PI);
}