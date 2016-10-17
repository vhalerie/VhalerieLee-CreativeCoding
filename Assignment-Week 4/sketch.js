function setup() {
  var cnv = createCanvas(400,400);
  var w=(windowWidth - width)/2;
  var h=(windowHeight - height)/2;
  cnv.position(w,h);
  background(255);
}

function draw() {
  //bright - dull theme
  colorMode(HSB,360,100,100);
  var rectStep=10;
  
  var colorFrom = color(60,100,100);
  var colorTo = color(50,50,50);
  
  for(var x=0;x<width;x+=rectStep){
    noStroke();
    var lerpAmt = map(x, 0, width, 0, 1.0);
    var lerpedCol = lerpColor(colorFrom, colorTo, lerpAmt);
    fill(lerpedCol);
    rect(x,0,rectStep,height);
  }
}