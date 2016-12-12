var nytAPI = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4819f46f6b7b4dbabf90f3fcda8a65d2";
var imageSize = "mediumThreeByTwo210";
//var imageSize = "superJumbo";
var news=[];
var imageCloud;
var images = [];

var pixelStep = 4;
var currentImageIndex = 0;
var targets = [];
var scatterPoint;
var pixelGroup=[];
var currentImage;
var hardcoded;

var Piece = function(imgURL){
  this.imgURL = imgURL;
}

function getNews(data){
  news = data.results; //multimedia is an array of images
}

var NewsCloud = function() {
  this.piece = [];
};

NewsCloud.prototype.addPiece = function(url) {
  //push everything into the newsCloud
  this.piece.push(new Piece(url));
};

function Pixel(x, y, inputColor){
  this.velocity = createVector(0,0);
  
  this.x = x;
  this.y = y;
  
  this.position = createVector(x,y);
  this.pixelColor = color(inputColor);
}

Pixel.prototype.draw = function(){
  stroke(this.pixelColor);
  //ellipse(this.position.x, this.position.y,1,1);
  point(this.position.x, this.position.y);
}


function preload(){
  loadJSON(nytAPI, getNews);
  
  imageCloud = new NewsCloud();
}

function setup(){
  background(0);
  createCanvas(210,140);
  smooth();
  pixelDensity(1);
  
  for(var i=0; i < news.length; i++){
    for(var j=0; j< news[i].multimedia.length; j++){
      if(news[i].multimedia[j].format == imageSize){
          imageCloud.addPiece(news[i].multimedia[j].url);
      }
    }
  }
  
  for(var i=0; i< imageCloud.piece.length; i++){
     images[i] = loadImage(imageCloud.piece[i].imgURL);
     targets.push(images[i].width /2, images[i].height/2); //set target
  }
  
  dissolve(currentImageIndex);
}

function dissolve(currentImageIndex){
  
  scatterPoint = createVector(width/2, height/2);
  
  images[currentImageIndex].loadPixels();
  
  var i=0;
  var newPixel;
  
  clearArray(pixelGroup);
  
  for(var y=0; y < images[currentImageIndex].height; y++){
    for(var x=0; x < images[currentImageIndex].width; x++){
      
      var index = (x+ y * width) *4; //formula for getting the colors in a pixel
      var R = images[currentImageIndex].pixels[index+0];
      var G = images[currentImageIndex].pixels[index+1];
      var B = images[currentImageIndex].pixels[index+2];
      var A = images[currentImageIndex].pixels[index+3]; //alpha
      var tempColor = color(R,G,B,A);
      
      i++;
      
      newPixel = new Pixel( x+ (width-images[currentImageIndex].width)/2, y + (height-images[currentImageIndex].height)/2, tempColor);
      
      
      if( A == 0) { continue; }
      if( i % pixelStep > 0) { continue; }
      
      if(newPixel.position.x == scatterPoint.x) newPixel.position.x++;
      if(newPixel.position.y == scatterPoint.y) newPixel.position.y++;
      
      pixelGroup.push(newPixel);
      newPixel.draw();
      //clear();
    }
  }
}

function clearArray(thisArray){
  for(var a=0; a<thisArray.length; a++){
    thisArray.splice(a, thisArray.length);
  }
}

function draw(){
  
  var inboundsCount = 0;
      
      for(var count=0; count < pixelGroup.length; count++){
        var newVector = createVector(pixelGroup[count].position.x, pixelGroup[count].position.y);
        newVector.sub(scatterPoint);
        
        newVector.normalize();
        newVector.setMag(random(0.005, 1.0));
        newVector.x = newVector.x * 1.5;
        
        pixelGroup[count].velocity.add(newVector);
        
        pixelGroup[count].draw();
        
        pixelGroup[count].position.add(pixelGroup[count].velocity);
        
        if(pixelGroup[count].position.x < width && pixelGroup[count].position.x > 0 && pixelGroup[count].position.y >0 && pixelGroup[count].position.y < height){
          inboundsCount++;
        }
      }
  
  if (inboundsCount == 0) {
    currentImageIndex ++;
    if (currentImageIndex > images.length -1) { 
      currentImageIndex = 0; 
    }
    dissolve(currentImageIndex);
  }
}
