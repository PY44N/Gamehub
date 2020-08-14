
function start() {
    block1 = new block(0, 0, value1)
    block2 = new block(200, 150, value2)
    block3 = new block(400, 200, value3)
    block4 = new block(600, -75, value4)
    text1 = new text(block1.x + 70, block1.y + 50, value1)
    text2 = new text(block2.x + 70, block2.y + 50, value2)
    text3 = new text(block3.x + 70, block3.y + 50, value3)
    text4 = new text(block4.x + 70, block4.y + 50, value4)
    scoreT = new text(40, 40, score)
    snake1 = new snake()
    picUp1 = new pickU()
    picUp1.value = Math.round(Math.random() * 30)
    setInterval(takeb1, 100)
    setInterval(takeb2, 100)
     setInterval(takeb3, 100)
      setInterval(takeb4, 100)
      
      scoreT.color = "white"
    myGameArea.start()
  }
  
  var touchB = 0;
  var score = 0;
  var scoreT;
  var removal;
  var picUp1;
  var snake1;
  var cells = 1;
  var block1;
  var block2;
  var block3;
  var block4;
  var ctx;
  var value1 = Math.round(Math.random() * 30)
  var value2 = Math.round(Math.random() * 30)
  var value3 = Math.round(Math.random() * 30)
  var value4 = Math.round(Math.random() * 30)
  var pUt = 0;
  var b = 0;
  var blockC1 = 0;
  var blockC2 = 0;
  var blockC3 = 0;
  var blockC4 = 0;
  
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 800;
      this.canvas.height = 800;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
      
  
  
      window.addEventListener('keydown', function (e) {
  
  
  
  
  
  myGameArea.key = e.keyCode;
        
  
  
      })
  window.addEventListener('keyup', function (e) {
            myGameArea.key = false
          })
  
  
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
  }
  
  
  //var distance = {}
  
  
  
  class pickU {
  constructor () {
  this.x = 400;
  this.y = 0;
  this.value;
  this.r = 20;
  this.update = function() {
          ctx = myGameArea.context;
          ctx.fillStyle = "green";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 1, 10);
          ctx.stroke()
          ctx.fill()
  }
  
  this.write = function() {
  ctx = myGameArea.context;
  ctx.fillStyle = "white";
  ctx.font = "30px Fantasy";
  ctx.fillText(this.value, this.x - 8.5, this.y + 11, 20)
  
  }
  }
  }
  
  
  
  
  class snake {
    constructor() {
  this.x = 350;
  this.y = 600;
  this.hp = 20;
  this.mW = 20;
  this.r = 30;
  this.write = function() {
  ctx = myGameArea.context;
  ctx.fillStyle = "black";
  ctx.font = "40px Fantasy";
  ctx.fillText(this.hp, this.x, this.y, this.mW)
  
  }
  
  this.update = function() {
          ctx = myGameArea.context;
          ctx.fillStyle = "blue";
          ctx.beginPath();
          ctx.arc(this.x + 10, this.y - 10, this.r, 1, 10);
          ctx.stroke()
          ctx.fill()
  
  
  if (myGameArea.key && myGameArea.key === 39 && this.y < 750 && touchB === 0) {
  
    this.x += 10;
  }
  if (myGameArea.key && myGameArea.key === 37 && this.x > 0 && touchB === 0) {
  
    this.x -= 10;
  }
  
  
  
  }
  
  }
  }
  
  
  
  
  class text {
  constructor (x, y, hp) {
  this.x = x
  this.hp = hp;
  this.y = y;
  this.mW = 60;
  this.color = "black"
  
  this.write = function() {
  ctx = myGameArea.context;
  ctx.fillStyle = this.color;
  ctx.font = "40px Fantasy";
  ctx.fillText(this.hp, this.x, this.y, this.mW)
  
  }}}
  
  
  
  class block  {
  constructor (x, y, bHP) {
  this.x = x;
  this.y = y;
  this.bHP = bHP;
  this.width = 200;
  this.height = 50;
  this.speedX = 0;
  this.speedY = 0;
  
  
  this.update = function() {
  ctx = myGameArea.context;
  ctx.fillStyle = "red";
  ctx.fillRect(this.x, this.y, this.width, this.height)
  this.x += this.speedX;
  this.y += this.speedY;
  
  }
  
  if (this.bHP < 1) {
  this.y = 1000
  
  }
  
  
  
  
  }
  }
  
  
  
  function removeCircles() {
  snakeHp -= removal;
  
  
  }
  
  function resetP() {
    pUt = 0;
    if (pUt === 0) {
    picUp1.y = -50;
    pUt = 1;
    }
  }
  
  function addCircles() {
  snake.hp += 5;
  picUp1.x = Math.round(Math.random() * 750)
  picUp1.y = 100000
  setTimeout(resetP, 3000)
  
  }
  
  
  function nothing() {
  
  
  }
  
  function touchB() {
  b = 1;
  
  }
  
  function moveB2() {
    if (b === 0) {
  block1.y += 10;
  block2.y += 10;
  block3.y += 10;
  block4.y += 10;
  picUp1.y += 7;
  }
  }
  
  // block 4 collison
  function collide4(snake1, block4) {
      var distX4 = Math.abs(snake1.x - block4.x - block4.width / 2);
      var distY4 = Math.abs(snake1.y - block4.y - block4.height / 2);
  
      if (distX4 > (block4.width / 2 + snake1.r)) {
          return false;
      }
      if (distY4 > (block4.height / 2 + snake1.r)) {
          return false;
      }
  
      if (distX4 <= (block4.width / 2)) {
          return true;
      }
      if (distY4 <= (block4.height / 2)) {
          return true;
      }
  
      var dx4 = distX4 - block4.w / 2;
      var dy4 = distY4 - block4.h / 2;
      return (dx4 * dx4 + dy4 * dy4 <= (snake1.r * snake1.r));
  }
  
  
  // block 3 collison
  function collide3(snake1, block3) {
      var distX3 = Math.abs(snake1.x - block3.x - block3.width / 2);
      var distY3 = Math.abs(snake1.y - block3.y - block3.height / 2);
  
      if (distX3 > (block3.width / 2 + snake1.r)) {
          return false;
      }
      if (distY3 > (block3.height / 2 + snake1.r)) {
          return false;
      }
  
      if (distX3 <= (block3.width / 2)) {
          return true;
      }
      if (distY3 <= (block3.height / 2)) {
          return true;
      }
  
      var dx3 = distX3 - block3.w / 2;
      var dy3 = distY3 - block3.h / 2;
      return (dx3 * dx3 + dy3 * dy3 <= (snake1.r * snake1.r));
  }
  
  
  // block 2 collison
  function collide2(snake1, block2) {
      var distX2 = Math.abs(snake1.x - block2.x - block2.width / 2);
      var distY2 = Math.abs(snake1.y - block2.y - block2.height / 2);
  
      if (distX2 > (block2.width / 2 + snake1.r)) {
          return false;
      }
      if (distY2 > (block2.height / 2 + snake1.r)) {
          return false;
      }
  
      if (distX2 <= (block2.width / 2)) {
          return true;
      }
      if (distY2 <= (block2.height / 2)) {
          return true;
      }
  
      var dx2 = distX2 - block2.w / 2;
      var dy2 = distY2 - block2.h / 2;
      return (dx2 * dx2 + dy2 * dy2 <= (snake1.r * snake1.r));
  }
  
  
  // block 1 collison
  function collide1(snake1, block1) {
      var distX = Math.abs(snake1.x - block1.x - block1.width / 2);
      var distY = Math.abs(snake1.y - block1.y - block1.height / 2);
  
      if (distX > (block1.width / 2 + snake1.r)) {
          return false;
      }
      if (distY > (block1.height / 2 + snake1.r)) {
          return false;
      }
  
      if (distX <= (block1.width / 2)) {
          return true;
      }
      if (distY <= (block1.height / 2)) {
          return true;
      }
  
      var dx = distX - block1.w / 2;
      var dy = distY - block1.h / 2;
      return (dx * dx + dy * dy <= (snake1.r * snake1.r));
  }
  
  
  function moveB4() {
  if (collide4(snake1, block4)) {
    touchB = 1;
  block1.speedY = 0;
  block2.speedY = 0;
  block3.speedY = 0;
  block4.speedY = 0;
  blockC4 = 1;
  
  }
  else {
    blockC4 = 0;
      touchB = 0;
  }
  
  }
  
  
  function moveB3() {
  if (collide3(snake1, block3)) {
    touchB = 1;
  block1.speedY = 0;
  block2.speedY = 0;
  block3.speedY = 0;
  block4.speedY = 0;
  blockC3 = 1;
  
  }
  else {
      touchB = 0;
    blockC3 = 0;
  }
  
  }
  
  
  
  function moveB2() {
  if (collide2(snake1, block2)) {
    touchB = 1;
  block1.speedY = 0;
  block2.speedY = 0;
  block3.speedY = 0;
  block4.speedY = 0;
  blockC2 = 1;
  
  }
  else {
      touchB = 0;
    blockC2 = 0;
  }
  
  }
  
  function moveB1() {
  if (collide1(snake1, block1)) {
  touchB = 1;
  block1.speedY = 0;
  block2.speedY = 0;
  block3.speedY = 0;
  block4.speedY = 0;
  blockC1 = 1;
  
  }
  else {
    touchB = 0;
    blockC1 = 0;
  }
  
  }
  
  function takeb4() {
  if (blockC4 === 1) {
  
  
  snake1.hp -= 1
  text4.hp -= 1
  setTimeout(blockC4 = 0, 500)
  }
  }
  
  
  function takeb3() {
  if (blockC3 === 1) {
  
  
  snake1.hp -= 1
  text3.hp -= 1
  setTimeout(blockC3 = 0, 500)
  }
  }
  
  
  function takeb2() {
  if (blockC2 === 1) {
  
  
  snake1.hp -= 1
  text2.hp -= 1
  setTimeout(blockC2 = 0, 500)
  }
  }
  
  function takeb1() {
  if (blockC1 === 1) {
  
  
  snake1.hp -= 1
  text1.hp -= 1
  setTimeout(blockC1 = 0, 500)
  }
  }
  
  
  
  
  function updateGameArea() {
  
  
  var dxC = snake1.x - picUp1.x;
  var dyC = snake1.y - picUp1.y;
  var distanceC = Math.sqrt(dxC * dxC + dyC * dyC);
  
  if (distanceC < snake1.r + picUp1.r) {
      snake1.hp += picUp1.value
      picUp1.y = -4000;
      picUp1.x = Math.round(Math.random() * 800)
  }
  
  
  
  if (block1.y > snake1.y + 200) {
  var value1 = Math.round(Math.random() * 30)
  block1.y = Math.round(Math.random() * 200) - Math.round(Math.random() * 100)
  text1.hp = value1;
  
  }
  
  if (block2.y > snake1.y + 200) {
  var value2 = Math.round(Math.random() * 30)
  block2.y = Math.round(Math.random() * 200) - Math.round(Math.random() * 100)
  text2.hp = value2;
  
  }
  
  if (block3.y > snake1.y + 200) {
  var value3 = Math.round(Math.random() * 30)
  block3.y = Math.round(Math.random() * 200) - Math.round(Math.random() * 100)
  text3.hp = value3;
  
  }
  
  if (block4.y > snake1.y + 200) {
  var value4 = Math.round(Math.random() * 30)
  block4.y = Math.round(Math.random() * 200) - Math.round(Math.random() * 100)
  text4.hp = value4;
  
  }
  
  
  if (picUp1.y > snake1.y + 200) {
  setTimeout(resetP, 3000)
  
  }
  
  
  if (text1.hp < 1) {
  block1.y = 2000
  
  
  }
   
  
  if (text2.hp < 1) {
  block2.y = 2000;
  
  
  }
  
  
  if (text3.hp < 1) {
  block3.y = 2000;
  
  
  }
  
  if (text4.hp < 1) {
  block4.y = 2000;
  
  
  }
  
  
  if (snake1.hp < 1) {
  window.location.href='gameOver.html'
  alert("Redirecting...")
  
  }
  
  
  block1.speedY = 7;
  block2.speedY = 7;
  block3.speedY = 7;
  block4.speedY = 7;
  picUp1.y += 8;
  
  
  console.log(score)
  myGameArea.clear()
  
  
  
  text1.x = block1.x + 70
  text1.y = block1.y + 50
  
  text2.x = block2.x + 70
  text2.y = block2.y + 50
  
  text3.x = block3.x + 70
  text3.y = block3.y + 50
  
  text4.x = block4.x + 70
  text4.y = block4.y + 50
  
  
  setInterval(score += 1, 20)
  moveB4()
  moveB3()
  moveB2()
  moveB1()
  block1.update()
  block2.update()
  block3.update()
  block4.update()
  text1.write()
  text2.write()
  text3.write()
  text4.write()
  snake1.update()
  snake1.write()
  picUp1.update()
  picUp1.write()
  }