function setup() {
  var cnv = createCanvas(400,400);
  var w=(windowWidth - width)/2;
  var h=(windowHeight - height)/2;
  cnv.position(w,h);
  background(255);
}

function draw() {
  var x=0;
  var y=0;
  beginShape();
  while(x < width){
    vertex(x,0);
    vertex(width/2,height/2);
    vertex(x+5,0);
    vertex(width/2,height/2);
    
    vertex(width/2,height/2);
    vertex(x,height);
    vertex(width/2,height/2);
    vertex(x+5,height);
    
    x+=5;
    
    while(y < height){
      vertex(x,y);
      vertex(width/2,height/2);
      
      vertex(width/2, height/2);
      vertex(width,y);
      y+=5;
    }
  }
  endShape();
}