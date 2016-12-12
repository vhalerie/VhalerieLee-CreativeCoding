var system;
var news;
var volume;
var base=0;

//New York Times API for Most Popular articles
var nytAPI = "https://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/30.json?api-key=4819f46f6b7b4dbabf90f3fcda8a65d2";

function preload(){
  loadJSON(nytAPI, getNews);
}

function getNews(data) {
  news = data.results; //for easier access
}

var Piece = function(position, shares, abstract, title){
  this.shares = shares;
  this.abstract = abstract;
  this.title = title;
  
  this.acceleration = createVector(0, 0.5);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.mass = random(5,30);
  this.position = createVector(position.x, position.y);
  
  this.timeToLive = 255;
}

Piece.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
  this.timeToLive -= 2;
  
  base++;
};

Piece.prototype.display = function() {
  //stroke(127, this.timeToLive);
  //stroke(127);

  strokeWeight(1);

  fill(127, this.timeToLive);
  
  textAlign(CENTER);
  var minimum;
  var maximum;
  
  if(this.shares > 1) maximum = 20;
  else if(this.shares < 1) minimum = 1;
  
  var mappedSize = map(this.shares, minimum, maximum, 50, 80);
  
  textSize(mappedSize);
  
  text(this.title, this.position.x, this.position.y, 300, 200);
  
};

Piece.prototype.run = function() {
  this.update();
  this.display();
};

Piece.prototype.applyForce = function(force) {
  var f = force.copy();
  f.div(this.mass * 1.5);
  this.acceleration.add(f);
};

var NewsCloud = function(position) {
  this.origin = position.copy();
  this.piece = [];
};

NewsCloud.prototype.addPiece = function() {
  //push everything into the newsCloud
  for(var i=0; i<news.length; i++){
    var abstract = news[i].abstract;
    var title = news[i].title;
    var numberOfShares = news[i].total_shares;
    
    this.piece.push(new Piece(this.origin, numberOfShares, abstract, title));
  }
  volume = news.length;
};

Piece.prototype.isDead = function(){
  if (this.timeToLive < 0) {
      return true;
  } else {
      return false;
  }
};

NewsCloud.prototype.applyForce = function(f){
  for(var i = 0; i < this.piece.length; i++){
    this.piece[i].applyForce(f);
  }
};

NewsCloud.prototype.run = function(){
	for (var i = this.piece.length-1; i >= 0; i--) {
    var p = this.piece[i];
    p.run();
    if (p.isDead()) {
      this.piece.splice(i, 1);
    }
  }
};


function setup(){
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1024,768);
  
  system = new NewsCloud(new createVector(width/4, 5));
  smooth();
}

function draw(){
  background(0);

  var angle = base/90 * 300;
  var wind = createVector(sin(angle + frameCount/8) * 400, 5);
  
  system.applyForce(wind);
  system.addPiece();
  
  system.run();
}

