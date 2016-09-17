var space=10;
var canvasWidth=500;
var canvasHeight=500;

function centerCanvas(){//code from processing github
  var w= (windowWidth - width)/2;
  var h= (windowHeight - height)/2;
  cnv.position(w,h);
}

function setup() {
  //createCanvas(canvasWidth+space,canvasHeight+space);
  cnv=createCanvas(501,501);
  centerCanvas();
}

function draw() {
  
  line(0,0,250,0);
  //vertical lines
  var y=0;
  while(y < canvasHeight+space){
    line(y,0,y,canvasHeight);
    y+=space;
  }
  
  //horizontal lines
  var j=0;
  while(j < (canvasWidth/2)+space){
    line(canvasWidth/2,j,canvasWidth,j);
    j+=space;
  }
  line(0,canvasHeight,canvasWidth,canvasHeight);
  
  //horizontal lines ; bottom half
  var m=canvasHeight/2;
  while(m < canvasHeight){
    line(0,m,canvasWidth,m);
    m+=space;
  }
  
  //diagonal lines to the right
  var x1=0;
  var d=(canvasHeight/2);
  var e=0;
  var g=canvasHeight/2;
  
  while(d!=canvasHeight+space && e < canvasHeight + space){
    line(x1,d,e,g);
    d+=space;
    e+=space;
  }
  
  x1=space;
  d=500;
  e=canvasHeight/2+space;
  
  while(x1!=canvasHeight || e <=canvasHeight-space){
    line(x1,d,e,g);
    x1+=space;
    e+=space;
  }
  
  //diagonal lines in fourth quadrant
  var p=canvasWidth/2+space;
  var q=canvasHeight;
  var r=canvasWidth/2;
  var s=canvasHeight-space;
  
  while(p < canvasWidth){
    line(p,q,r,s);
    p+=space;
    s-=space;
  }
  
  p=canvasWidth/2;
  q=canvasHeight/2;
  r=canvasWidth;
  s=canvasHeight;
  
  while(s<canvasHeight/2 || p<canvasWidth){
    line(p,q,r,s);
    p+=space;
    s-=space;
  }
}

function windowResized(){
  centerCanvas();
}