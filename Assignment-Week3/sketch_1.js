function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  
  //try uncommenting this code and playing around
	push();
  rotate(map(mouseX,0,width,0,TWO_PI));
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
	//try uncommenting this code
	pop();
}

function draw(){
  translate(width/2, height/2);
	var x=0;
  var y=0;
  var planeWidth=300;
  
	//uncomment this code and play around
	push();
  rotate(-map(mouseX,0,width,0,TWO_PI)); 
  beginShape();
  for(var i=0; i< planeWidth; i+=5){
    vertex(x,y);
    vertex(x,planeWidth);
    x+=3;
    
    vertex(x+100, y+100);
    vertex(x+200, planeWidth);
    y+=3;
  }
  endShape();
  //uncomment this code and play around
	pop();
	
	
	
}
