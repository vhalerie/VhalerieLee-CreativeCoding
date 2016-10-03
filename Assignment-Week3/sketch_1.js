function setup() {
  var cnv = createCanvas(500,500);
  var w=(windowWidth - width)/2;
  var h=(windowHeight - height)/2;
  cnv.position(w,h);
  background(255);
}

function draw(){
  var x=0;
  var y=0;
  var planeWidth=300;
  
  beginShape();
  for(var i=0; i< planeWidth; i++){
    
    vertex(x,y);
    vertex(x,planeWidth);
    x+=3;
    
    vertex(x+20, y+100);
    vertex(x+30, planeWidth);
    y+=3;
  }
  endShape();
  
  
  beginShape(LINES);
  var a=0, b=0;
  for(var j=0; j<height;j++){
    vertex(a,b);
    vertex(width,b);
    vertex(a,b);
    vertex(width,b);
    b+=3;
  }
  endShape();

}