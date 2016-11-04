/**
* Kevin's comments:  Wow!  nice job.  not only did you replicate the work almost perfectly, but your variable names are
clear and concise.  Keep up the good work!
**/
//612x792
var canvasWidth = 500;
var canvasHeight = 750;

function centerCanvas(){
  var w=(windowWidth - width)/2;
  var h=(windowHeight - height)/2;
  cnv.position(w,h);
}

function setup() {
  cnv = createCanvas(canvasWidth,canvasHeight);
  background(255,244,220);
  centerCanvas();
}

function draw() {
  var topMargin=canvasHeight*0.2;
  var bottomMargin=canvasHeight*0.2;
  var leftMargin=canvasWidth*0.1;
  var rightMargin=canvasWidth*0.1;
  
  //top gray rectangle
  var rectWidth = canvasWidth-leftMargin-rightMargin;
  var rectHeight = 40;
  noStroke();
  fill(109,112,117);
  rect(leftMargin,topMargin,rectWidth,rectHeight);
  
  //bottom gray rectangle
  var rectYPosition=canvasHeight-bottomMargin-rectHeight;
  //fill(109,112,117);
  rect(leftMargin, rectYPosition,rectWidth,rectHeight);
  noStroke();
  
  //between two gray rectangles - middle canvas
  var middleCanvasX=leftMargin;
  var middleCanvasY=topMargin+rectHeight;
  var middleCanvasWidth=canvasWidth-leftMargin-rightMargin;
  var middleCanvasHeight=canvasHeight-topMargin-rectHeight-bottomMargin-rectHeight;
  
  //middle blue cross vertical
  var blueCrossVerticalX = middleCanvasWidth*0.6;
  fill(101,122,169);
  rectWidth = 40;
  rect(blueCrossVerticalX, middleCanvasY, rectWidth ,middleCanvasHeight);
  noStroke();
  
  //lower left black rectangle
  var lowerBlackRectX = middleCanvasX;
  var lowerBlackRectY = middleCanvasY + middleCanvasHeight/2;
  var lowerBlackRectWidth = middleCanvasWidth*0.30;
  var lowerBlackRectHeight = middleCanvasHeight/2;
  
  fill(53,52,52);
  rect(lowerBlackRectX, lowerBlackRectY, lowerBlackRectWidth, lowerBlackRectHeight);
  noStroke();
  
  //white border quad
  var whiteQuadX = leftMargin + lowerBlackRectWidth*0.1;
  var whiteQuadY = topMargin + rectHeight + middleCanvasHeight/2 + lowerBlackRectHeight*0.9;
  
  noFill();
  stroke(255);
  strokeWeight(2);
  quad(
    whiteQuadX, whiteQuadY, 
    whiteQuadX + 40, whiteQuadY,
    whiteQuadX + 90, whiteQuadY - lowerBlackRectHeight*0.7, 
    whiteQuadX + 50, whiteQuadY - lowerBlackRectHeight*0.7
    );
    
  //yellow line
  stroke(255,255,153);
  var yellowLineX = leftMargin + lowerBlackRectWidth*0.2;
  var yellowLineY = whiteQuadY - lowerBlackRectHeight*0.6;
  
  line(yellowLineX, yellowLineY, lowerBlackRectWidth+yellowLineX, yellowLineY);
  
  //middle blue cross horizontal
  var blueX=leftMargin+lowerBlackRectWidth;
  var blueHeight = 40;
  var blueY=topMargin+rectHeight+middleCanvasHeight/2 - blueHeight;
  var blueWidth=middleCanvasWidth-lowerBlackRectWidth;
  noStroke();
  fill(101,122,169);
  rect(blueX,blueY,blueWidth,blueHeight);
  
  //lower left yellow quad
  var yellowStartX = leftMargin+lowerBlackRectWidth;
  var yellowStartY = canvasHeight - bottomMargin - rectHeight - (lowerBlackRectHeight/2);
  var yellowWidth = 40;
  var yellowEndX = blueCrossVerticalX;
  var yellowEndY = canvasHeight - bottomMargin - rectHeight;
  fill(255,255,0);
  quad(
    yellowStartX, yellowStartY, 
    yellowStartX + yellowWidth, yellowStartY,
    yellowEndX, yellowEndY,
    yellowEndX - yellowWidth, yellowEndY);
  noStroke();
  
  //red cross above yellow quad
  var redLineX = lowerBlackRectWidth + leftMargin;
  var redLineY = yellowLineY;
  var redLineWidth = redLineX + 60;
  var redVerticalX = redLineWidth-30;
  var redVerticalY = canvasHeight - bottomMargin - rectHeight - middleCanvasHeight/2 + 20;
  stroke(255,51,51)
  strokeWeight(2);
  line(redLineX, redLineY, redLineWidth,redLineY);
  line(redVerticalX, redVerticalY, redVerticalX, redVerticalY+60);
  
  //upper left red cross
  var upperLeftCrossHorizontalX = leftMargin;
  var upperLeftCrossHorizontalY = topMargin + rectHeight + 50;
  var upperLeftCrossWidth = 60;
  var upperLeftCrossVerticalX = upperLeftCrossHorizontalX + upperLeftCrossWidth/2;
  var upperLeftCrossVerticalY = topMargin + rectHeight + 20;
  
  stroke(153,0,0);
  strokeWeight(2);
  line(upperLeftCrossHorizontalX, upperLeftCrossHorizontalY, upperLeftCrossWidth + upperLeftCrossHorizontalX, upperLeftCrossHorizontalY);
  line(upperLeftCrossVerticalX, upperLeftCrossVerticalY, upperLeftCrossVerticalX, upperLeftCrossVerticalY +60); 
  
  //diagonal blue quad
  var quadStartX = blueX;
  var quadStartY = blueY;
  
  noStroke();
  fill(101,122,169);
  quad(
    quadStartX, quadStartY,
    quadStartX-upperLeftCrossWidth ,quadStartY - 30,
    quadStartX-upperLeftCrossWidth-20, quadStartY+10,
    lowerBlackRectX + lowerBlackRectWidth, lowerBlackRectY 
    );
    
  //upper left black rectangle
  var upperBlackRectXWidth = 20;
  var upperBlackRectX = quadStartX-upperLeftCrossWidth;
  var upperBlackRectY = quadStartY - 30;
  var upperBlackRectEndX = blueX + upperBlackRectXWidth;
  var upperBlackRectEndY = topMargin + rectHeight;
  
  fill(53,52,52);
  noStroke();
  quad(
    upperBlackRectX, upperBlackRectY,
    upperBlackRectX - 1.5*upperBlackRectXWidth, upperBlackRectY - 10,
    upperBlackRectEndX - 3*upperBlackRectXWidth, upperBlackRectEndY,
    upperBlackRectEndX -20, upperBlackRectEndY
    );
    
  //upper left yellow circle
  var upperCircleX = blueX + middleCanvasWidth*0.05;
  var upperCircleY = topMargin + rectHeight + middleCanvasHeight/4;
  var upperCircleRadius = (middleCanvasWidth*0.4)/2;
  stroke(246,236,101);
  strokeWeight(2);
  noFill();
  ellipse(upperCircleX, upperCircleY, upperCircleRadius);
  
  //blue cross upper right quadrant
  var upperBlueCrossX = blueX + middleCanvasWidth*0.4;
  var upperBlueCrossY = topMargin + rectHeight + 30;
  var upperBlueCrossWidth = upperBlueCrossX + 50;
  var upperBlueCrossVerticalX = lowerBlackRectWidth + middleCanvasWidth/2 + rectWidth;
  var upperBlueCrossVerticalY = topMargin + rectHeight;
  
  stroke(122,102,219);
  strokeWeight(3);
  line(upperBlueCrossX, upperBlueCrossY, upperBlueCrossWidth, upperBlueCrossY);
  line(upperBlueCrossVerticalX, upperBlueCrossVerticalY,upperBlueCrossVerticalX, upperBlueCrossVerticalY + 60);
  
  //black quad in upper right quadrant
  
  var blackOutlineQuadX = upperBlueCrossX;
  var blackOutlineQuadY = upperBlueCrossVerticalY + 80;
  noFill();
  stroke(0);
  strokeWeight(2);
  quad(
    blackOutlineQuadX, blackOutlineQuadY,
    blackOutlineQuadX + 50, blackOutlineQuadY,
    blackOutlineQuadX + 100, blueY,
    blackOutlineQuadX + 50, blueY
    );
    
  //red circle in upper right quadrant
  
  var upperRedCircleX = middleCanvasWidth*0.80 + middleCanvasWidth*0.2;
  var upperRedCircleY = middleCanvasHeight*0.15 + topMargin + rectHeight;
  var upperRedCircleRadius = 60;
  stroke(255,51,51);
  strokeWeight(2);
  ellipse(upperRedCircleX, upperRedCircleY, upperRedCircleRadius);
  
  //green vertical rect fourth quadrant
  var greenVerticalRectX = middleCanvasWidth*0.9;
  var greenVerticalRectY = middleCanvasHeight*0.55 + rectHeight + topMargin;
  var greenVerticalWidth = 30;
  var greenVerticalHeight = 140;
  
  fill(0,153,76);
  noStroke();
  rect(greenVerticalRectX, greenVerticalRectY, greenVerticalWidth, greenVerticalHeight);
  
  //green horizontal rect fourth quadrant
  var greenHorizontalX = greenVerticalRectX + greenVerticalWidth;
  var greenHorizontalY = greenVerticalRectY + 50;
  var greenHorizontalWidth = 60;
  var greenHorizontalHeight = 30;
  rect(greenHorizontalX, greenHorizontalY, greenHorizontalWidth, greenHorizontalHeight);
  
  //green diagonal rect fourth quadrant
  var greenDiagonalX = greenVerticalRectX;
  var greenDiagonalY = greenHorizontalY;
  var greenDiagonalX2 = middleCanvasWidth/2 + 2*rectHeight;
  var greenDiagonalY2 = blueY + 60;
  var greenDiagonalHeight = 30;
  
  quad(
    greenDiagonalX, greenDiagonalY,
    greenDiagonalX2, greenDiagonalY2,
    greenDiagonalX2, greenDiagonalY2 + greenDiagonalHeight,
    greenDiagonalX, greenDiagonalY + greenHorizontalHeight
    );
  
  //black cross fourth quadrant
  
  var blackCrossVerticalX = lowerBlackRectWidth + rectWidth + middleCanvasWidth*0.65;
  var blackCrossVerticalY = middleCanvasHeight*0.5 + blueY;
  var blackCrossHorizontalX = greenHorizontalX - greenHorizontalWidth;
  var blackCrossHorizontalY = greenHorizontalY - 40;
  
  stroke(64,64,64);
  strokeWeight(3);
  
  line(blackCrossVerticalX, blackCrossVerticalY, blackCrossVerticalX, middleCanvasHeight*0.9 + rectHeight);
  line(blackCrossHorizontalX, blackCrossHorizontalY, blackCrossHorizontalX+120, blackCrossHorizontalY);
}
