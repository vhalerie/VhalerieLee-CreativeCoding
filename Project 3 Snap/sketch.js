var video;
var snap;
var snapshot; 
var filters = [];
var constraints;
var snapButton, xButton, saveButton;
var cnv;

var i=0;

function preload() {
  filters[0] = loadImage("assets/filter0.png")
  filters[1] = loadImage("assets/filter1.png");
  filters[2] = loadImage("assets/filter2.png");
  filters[3] = loadImage("assets/filter3.png");
  
  constraints = {
    video: {
      mandatory: {
        minWidth: 320, 
        minHeight: 480
      }
    },
    audio: false
  };
  
  xButton = createButton("<img src=\"assets/x.png\">");
  saveButton = createButton("<img src=\"assets/download.png\">");
}

function setup() {
  background(0);
  cnv = createCanvas(320, 480);

  resetSketch();
}

function draw() {
  
  //display feed
  image(video, 0,0, 320, 480);
  image(filters[i],0,0);

}

function takeSnap() {
  video.loadPixels();
  var tempSnap = video.get();
  snapshot = image(tempSnap); //display the snap
  
  //show the save button
  saveButton = createButton("<img src=\"assets/download.png\">");
  saveButton.style("border",0);
  saveButton.style("background-color", "transparent");
  saveButton.position(20, height - 80);
  saveButton.mousePressed(saveMemories);
  
  //display the X button  
  xButton = createButton("<img src=\"assets/x.png\">");
  xButton.style("border",0);
  xButton.style("background-color", "transparent");
  xButton.position(20, 20);
  xButton.mousePressed(resetSketch);
  
  //hide the Snap button
  snapButton.hide();
}

function saveMemories(){
  xButton.hide();
  saveButton.hide();
  save(cnv, 'snapchat.png');
  resetSketch();
}

function resetSketch(){
  video = createCapture(constraints);
  
  video.size(320, 480);
  video.hide();
  
  //display button
  snapButton = createButton("<img src=\"assets/snap.png\">");
  snapButton.style("border", 0);
  snapButton.style("background-color", "transparent");
  snapButton.position(width/2 -40, height-80);
  snapButton.mousePressed(takeSnap);
  
  xButton.hide();
  saveButton.hide();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    i++;
  }
  else if (keyCode === LEFT_ARROW){
    i--;
  } 

  if (i > 3) i = 0;
  if (i < 0) i = 3;
  //console.log(i);
}