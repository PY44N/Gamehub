


var canvas = document.getElementById("canvas"),
    fillStyle = "rgba(0, 0, 0, 0)",
    context = canvas.getContext("2d"),
    width = window.innerWidth, 
    height = window.innerHeight;
    // ratio = window.devicePixelRatio;

canvas.width = width ;
canvas.height = height ;
canvas.style.width = width + "px" ;
canvas.style.height = height + "px" ;
// context.scale(ratio, ratio);
context.fillStyle = "rgba(15, 15, 255, 0)" ;
//document.body.style.zoom = "50%" ;

/*
var inHeight = window.innerHeight ;
var outHeight = window.outerHeight ;
var inWidth = window.innerWidth ;
var outWidth = window.outerWidth ;
var patchedWidth = outWidth - inWidth;
var patchedHeight = outHeight - inHeight ;

console.log(patchedWidth);
console.log(patchedHeight);
*/

var exceWidth = window.innerWidth/5.3 ;

var chromeWidth = window.innerWidth ; //- exceWidth ;//1536- 286; //1250 ; //
var chromeHeight = window.innerHeight ; //864 ; //

var totalStrokeColor = "#ed1b24" ;
//var resizing = false ;
var onMenu = true ;
var xLeft = chromeWidth *(1/6);
var firstTier = chromeWidth*(2/6);
var xCenter = chromeWidth *(3/6) ; 
var secondTier = chromeWidth*(4/6);
var xRight = chromeWidth * (5/6);


var squareRayon = chromeWidth/83.3 ;
var squareX = xCenter ; 
var squareY = chromeHeight/1.63 ; //
var squareYHitLow = squareY + squareRayon ;
var squareYHitTop = squareY - squareRayon ;
var squareColor = "#000" ;

//
var cursorRayon = 15 ;
var cursorX = chromeWidth/2 ; //
var cursorY = chromeHeight/2 ; //
var cursorColor = "rgba(255,255,255, 0.5)";

var score = 0 ;
var trackScore = score ;
var level = 1 ;
var random = Math.floor(Math.random()*3);
var randomColor = Math.floor(Math.random()*6);
var oneTimeRandom = false ;
var oneTimeUp = false ;
//var random1 = Math.floor(Math.random()*3);


var cacheX = xCenter ;
var cacheY = chromeHeight/2 ;

var littleTest = "it's ok" ;

var buttonRetryWidth = chromeWidth/3 ;
var buttonRetryHeight =  chromeHeight/8.64 ;
var buttonMessage = "Run" ;
var buttonMessageY = buttonRetryHeight-50;
var retry = false ;

var gameOver = false ;
var upLevel = false ;
var message = "000"; 
var message1 = "000" ;
var message2 = "Par Nils Rivaillon";
var endTimeout1 = false ;
var endTimeout2 = false ;

var finishY = chromeHeight+14 ; 



var paddleLeftX = chromeWidth/24; 
var paddleLeftY = 0 ;

var paddleCenterX = firstTier + chromeWidth/24 ;
var paddleCenterY = - 300//250 ; //150

var paddleRightX = secondTier + chromeWidth/24 ;
var paddleRightY = - 600//500 ;

var paddleWidth = chromeWidth/4 ;
var paddleHeight = chromeHeight/57.6 ;

var vitessePaddleLeft = 2 ;
var vitessePaddleCenter = 2 ;
var vitessePaddleRight = 2 ;

var rightAcce = 0.002 ; 
var centerAcce = 0.002 ;
var leftAcce = 0.002 ;

var speedBoost = 0.15 ;

var xText = 1050 ;
var yText = 200 ;

var messageX = xCenter - chromeWidth/4.1 ;
var messageY = chromeHeight/2.5 - chromeHeight/24;

var message1X = xCenter - chromeWidth/25;
var message1Y = messageY + chromeHeight/5.8;

var interval = setInterval(drawAll, 10); 
var overInterval = "0" ;

var color1 = "#000"; 
var color2 = "#FFFFFF"; 
var color3 = "#000";
var color4 = "#FFFFFF";
var color5 = "#9E9F9E" ;

var colorStack1 = "#";
var colorStack2 = "#" ;
var oneTime = false ;
var oneTime1 = false ;
var oneTimeScore = false ;

var strokeColor = color2 ; 
var rectColor = color1 ;
var buttonMessageColor = color2 ;

var rushingTheGold = false ;
var rushScore = 0;




function drawText(){ 
  context.fillStyle = "rgb(255, 0, 0)"; 
  context.font = "10px Arial";
  context.fillText("xCenter", xText, yText);
  context.fillText(xCenter, xText +100, yText);
  context.fillText("chromeWidth", xText, yText + 25) ;
  context.fillText(chromeWidth, xText + 100, yText+25) ;
  context.fillText("chromeHeight", xText, yText+50);
  context.fillText(chromeHeight, xText + 100, yText+50);
  context.fillText(window.innerWidth, xText, yText+75);
  context.fillText(window.innerHeight, xText + 100, yText+75);
}



function drawPaddleLeft(paddleLeftY){
  context.fillStyle = color4 ;
  context.fillRect(paddleLeftX, paddleLeftY, paddleWidth, paddleHeight ) ;
}

function drawPaddleCenter(paddleCenterY){ 
  context.fillStyle = color3 ;
  context.fillRect(paddleCenterX, paddleCenterY, paddleWidth, paddleHeight ) ;
}

function drawPaddleRight(paddleRightY){
  context.fillStyle = color4 ;
  context.fillRect(paddleRightX, paddleRightY, paddleWidth, paddleHeight ) ;
}

function colorControlSquare(){
  if((squareX === xLeft)||(squareX === xRight)){
    squareColor = color2 ;
  } else if(squareX === xCenter){
    squareColor = color1 ;
  }
}


function drawSquare(){ 
  context.fillStyle = squareColor ;
  context.beginPath();
  context.arc(squareX, squareY, squareRayon, 0, 2*Math.PI);
  context.fill();
  colorControlSquare();
}

function drawFirstZone(){
  context.fillStyle = color1;
  context.fillRect(0, 0, firstTier, chromeHeight);
}

function drawSecondZone(){
  context.fillStyle = color2;
  context.fillRect(firstTier, 0, firstTier, chromeHeight);
}

function drawThirdZone(){
  context.fillStyle = color1;
  context.fillRect(secondTier, 0, firstTier+chromeWidth/24, chromeHeight);
}

function drawZones(){
  drawFirstZone();
  drawSecondZone();
  drawThirdZone();
}

function lauching(){
  color1 = "#000";
  color2 = "#FFFFFF";
  color3 = "#000";
  color4 = "#FFFFFF";
  onMenu = false ;
}

function drawCursor(){
  context.fillStyle = cursorColor ;
  context.beginPath();
  context.arc(cursorX, cursorY, cursorRayon, 0, 2*Math.PI);
  context.fill();
  if(downPressed === true){
    cursorY += 5 ;
  } else if(upPressed === true){
    cursorY -= 5 ;
  } else if(rightPressed === true){
    cursorX += 5 ;
  } else if(leftPressed === true){
    cursorX -= 5 ;
  }
}

function totalStroke(){
  context.strokeStyle = totalStrokeColor ;
  context.lineWidth = 20 ;
  context.strokeRect(0, 0, chromeWidth, chromeHeight);
}

/*
function resizer(){
  if((aPressed === true)&&(shiftPressed === true)&&(controlPressed === true)){
    resizing = true ;
    if(resizing === true){
      totalStroke();
      if(upPressed === true){
        chromeHeight -= 5 ;
      } else if(downPressed === true){
        chromeHeight += 5 ;
      } else if (rightPressed === true){
        chromeWidth += 5 ;
      } else if (leftPressed === true){
        chromeWidth -= 5 ;
      }
    }
  }
}


function zoom(){
  if((aPressed === true)&&(shiftPressed === true)&&(controlPressed === true)){
    document.body.style.zoom = "75%" ;
  } 
}
*/

function menu(){
  if(onMenu === true){
    randomColor = Math.floor(Math.random()*6);
    drawCache();
    buttonMessageX = xCenter - 50;
    buttonMessage = "Run" ;
    drawButtonRetry();
    //drawText(); 
    message = "Choices";
    message1 = "Press Enter" ;
    textTransition();
    //randomColoring();
    //drawCursor();
    //zoom();
    //resizer();
    if((enterPressed === true)&&(onMenu === true)){
      strokeColor = color1 ;
      rectColor = color2 ;
      buttonMessageColor = color1 ;
      setTimeout(lauching, 1000);
    } else {
      strokeColor = color2 ;
      rectColor = color1 ;
      buttonMessageColor = color2 ;
    }
  }
}

function redirection(){
  if ((gameOver === true)&&(endTimeout1 === false)){
    setTimeout(game_over, 500);
  } else if ((gameOver === true)&&(endTimeout1 === true)){
    game_over();
  } else if ((upLevel === true)&&(endTimeout2 === false)){
    setTimeout(levelUp, 500);
  } else if ((upLevel === true)&&(endTimeout2 === true)){
    levelUp();
  }
}

function drawGame(){
  if(onMenu === false){
    randomColor = Math.floor(Math.random()*6);
    //console.log(randomColor);
    switching();
    //changeColor();
    drawZones();
    //drawText();
    scoring();
    drawSquare();
    drawPaddleLeft(paddleLeftY);
    drawPaddleCenter(paddleCenterY);
    drawPaddleRight(paddleRightY);
    paddleLeftY += vitessePaddleLeft ;
    paddleCenterY += vitessePaddleCenter ;
    paddleRightY += vitessePaddleRight ;
    vitessePaddleRight += rightAcce ;
    vitessePaddleCenter += centerAcce ;
    vitessePaddleLeft += leftAcce ;
    respawnPaddleLeft();
    respawnPaddleCenter();
    respawnPaddleRight();
    collisionPaddleLeft();
    collisionPaddleRight();
    collisionPaddleCenter();
    //changeLevel();
  }
}

function drawAll(){ 
  context.clearRect(0, 0, chromeWidth, chromeHeight);
  menu();
  drawGame();
  redirection();
}

