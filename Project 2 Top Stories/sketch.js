//will run on p5.js
var nytAPI = "http://api.nytimes.com/svc/topstories/v2/home.json?api-key=4819f46f6b7b4dbabf90f3fcda8a65d2";
var imageSize = "Normal";
var news=[];
var images = []; //array of images

var pixelStep = 5;
var currentImageIndex = 0;
var targets = [];
var repulse;
var pixelGroup=[];
var currentImage;

//hardcoded image for openprocessing because loading from APIs is too heavy for openprocessing
//var hardcoded = "assets/photo1.jpg";

function getNews(data){
  news = data.results; //multimedia is an array of images
}

function Pixel(x, y, inputColor){
  this.velocity = createVector(0,0);
  
  this.x = x;
  this.y = y;
  
  this.position = createVector(x,y); //works
  this.pixelColor = color(inputColor);
}

Pixel.prototype.draw = function(){
  stroke(this.pixelColor);
  ellipse(this.position.x, this.position.y,1,1);
}


function preload(){
  loadJSON(nytAPI, getNews);
  for(var i=0; i < news.length; i++){
    for(var j=0; j< news[i].multimedia.length; j++){
      if(news[i].multimedia[j].format == imageSize){
        images[i] = loadImage(news[i].multimedia[j].url); //get image URLs
        targets.push(images[i].width /2, images[i].height/2); //set target
      }
    }
  }
}

function setup(){
  background(0);
  createCanvas(190,127);
  //createCanvas(450,303);
  smooth();
  pixelDensity(1);
  
  
  
  dissolve(currentImageIndex);
}

function dissolve(currentImageIndex){
  
  repulse = createVector(width/2, height/2);
  
  images[currentImageIndex].loadPixels();
  
  var i=0;
  var newPixel;
  
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
      
      if(newPixel.position.x == repulse.x) newPixel.position.x++;
      if(newPixel.position.y == repulse.y) newPixel.position.y++;
      
      pixelGroup.push(newPixel);
      newPixel.draw();
      clear();
    }
  }
}

function draw(){
  
  var inboundsCount = 0;
      
      for(var count=0; count < pixelGroup.length; count++){
        var newVector = createVector(pixelGroup[count].position.x, pixelGroup[count].position.y);
        newVector.sub(repulse);
        
        newVector.normalize();
        newVector.setMag(random(0.001, 1.0));
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