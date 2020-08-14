let snake;
let rez = 20;
let food;
let w;
let h;
let cropping = 10;

function setup() {
  window.canvas = createCanvas(window.innerWidth - cropping, window.innerHeight - cropping);
  window.canvas.parent("canvas");
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(10);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function resetGame() {
    location.reload();
}

function draw() {
    ellipse(width/2,height/2,100,100);
  scale(rez);
  background(0);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
    setTimeout(resetGame, 1000)
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

window.onresize = function() {
    var w = window.innerWidth - cropping;
    var h = window.innerHeight - cropping;  
    canvas.size(w,h);
    width = w;
    height = h;
  };