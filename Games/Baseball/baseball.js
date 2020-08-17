function start() {
    ball = new image(80, 80, "baseball.png", -100, -100, "image")
    bat = new image(400, 400, "baseballbat.png", 1700, 700, "image")
    text1 = new text(-300, 400, "")
    pitcher = new image(200, 200, "pitcher.png", 900, 440, "image")
    scoreT = new text(200, 200, `score: ${score}`)
    strikeT = new text(1400, 200, "0 strikes")
    setTimeout(pitch, 4000)
    myGameArea.start()
    console.log('Started game')
    
    }
    
    
    var bat;
    var ball;
    var text1;
    var pitcher;
    var num = 0;
    var hitB = 0;
    var swung = 0;
    var alreadynum = 0;
    var scoreT;
    var score = 0;
    var strikeT;
    var fouls = 0;
    var stuff = 0;
    
    var myGameArea = {
      canvas : document.createElement("canvas"),
      start : function() {
        this.canvas.width = 1870;
        this.canvas.height = 930;
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
    
    
    
    
    
    class text {
    constructor (x, y, hp) {
    this.x = x
    this.hp = hp;
    this.y = y;
    this.mW = 200;
    this.color = "black"
    
    this.write = function() {
    var ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.font = "40px Fantasy";
    ctx.fillText(this.hp, this.x, this.y, this.mW)
    
    }}}
    
    
    
    function image(width, height, color, x, y, type) {
      this.type = type;
      if (type == "image") {
        this.image = new Image();
        this.image.src = color;
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.angle = 0;
      this.speedY = 0;
      this.speedX = 0;
      this.update = function() {
        ctx = myGameArea.context;
        
        if (type == "image") {
          ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
          ctx.drawImage(this.image, this.width / -2, this.height / -2, this.width, this.height);
           ctx.restore();
    
    
        } else {
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      
        }
      }
       this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
      }
    }
    
    
    function swing() {
    
    
    
      bat.x -= 300;
    
    
    setTimeout(bat2, 150)
    
    }
    
    function bat2() {
    bat.x -= 300;
    bat.image.src = "baseballbat2.png"
    setTimeout(bat3, 150)
    }
    
    function bat3() {
    bat.x -= 300;
    bat.image.src = "baseballbat3.png"
    setTimeout(bat4, 150)
    
    }
    
    function bat4() {
      bat.image.src = "baseballbat4.png"
    bat.x -= 300;
    }
    
    function hit(what) {
     ball.speedY = -(what)
     ball.speedX = -(what) 
    if(what == 0) {
      ground()
    } if(what == 1) {
      fly()
    } if(what == 2) {
      ground()
    } if(what == 3) {
      single()
    } if(what == 4) {
      double()
    } if (what == 5) {
      triple()
    } if (what == 6) {
      home()
    } if (what == 7) {
      foul()
    }
    
    }
    
    function foul() {
    text1.hp = "Foul! Strike 1"
    text1.x = 400
    fouls = stuff + 1
    strike(fouls)
    setTimeout(reset, 3000)
    }
    
    function ground() {
      text1.hp = "You grounded out!"
      text1.x = 400
      score -= 200;
      setTimeout(reset, 3000)
    }
    
    function fly() {
      text1.hp = "Your flyball was caught!"
      text1.x = 400
      score -= 100;
      setTimeout(reset, 3000)
    }
    
    function single() {
      text1.hp = "You hit a single"
      text1.x = 400
      score += 150;
      setTimeout(reset, 3000)
    }
    
    function double() {
      text1.hp = "You hit a double"
      text1.x = 400
      score += 300;
      setTimeout(reset, 3000)
    }
    
    function triple() {
      text1.hp = "You hit a triple"
      text1.x = 400
      score += 600;
      setTimeout(reset, 3000)
    }
    
    function home() {
      text1.hp = "You hit a home run"
      text1.x = 400
      score += 1000;
      setTimeout(reset, 3000)
    }
    
    function strike(fB) {
      num += 1;
      console.log('strike')
    if(num >= 3 && fB == 0) {
      strikeT.hp = "strike out"
      setTimeout(reload, 3000)
    } else {
      strikeT.hp = `strike ${num}`
      setTimeout(reset, 2000)
      fB = 0;
    }
    
    }
    
    function reload() {
      location.reload()
    }
    
    setInterval(collide, 20)
    
    function quest() {
    
    }
    
    function pitch(speed) {
      swung = 0;
      hitB = 0;
      ball.speedX = 0;
      ball.speedY = 0;
      alreadynum = 0;
      speed = Math.floor(Math.random() * 10) + 1
      ball.y = pitcher.y
      ball.x = pitcher.x
      bat.x = 1700;
      bat.image.src = "baseballbat.png"
      ball.speedY = speed;
      console.log('Threw the ball')
    text1.x = -200
    }
    
    function reset() {
      pitch()
    }
    
    function collide() {
      if (ball.x < bat.x + bat.width &&
       ball.x + ball.width > bat.x &&
       ball.y < bat.y + bat.height &&
       ball.y + ball.height > bat.y && hitB == 0 && swung > 0) {
         hitB += 1;
         console.log('Hit the ball')
    hit(Math.floor(Math.random() * 7))
       }
    }
    
    function updateGameArea() {
    myGameArea.clear(); 
    pitcher.update();
    ball.update();
    ball.newPos();
    bat.update();
    text1.write();
    scoreT.write();
    strikeT.write();
    
    scoreT.hp = `score: ${score}`;
    
    if(myGameArea.key && myGameArea.key === 32 && hitB == 0 && swung == 0) {
      swung = 1;
      console.log('Pressed space key')
      swing()
    }
    
    if(ball.y > 920 && alreadynum == 0) {
    alreadynum = 1;
    
    strike(fouls)  
    
    }
    
    }