
myGameArea.start(800, 800)

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
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
    this.mW = 60;
    this.color = "black"
    
    this.write = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.font = "40px Fantasy";
    ctx.fillText(this.hp, this.x, this.y, this.mW)
    
    }}}
    



    class circle {

        constructor(x, y, radius, startAngle, endAngle, color, cK) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.startAngle = startAngle;
          this.endAngle = endAngle;
          this.color = color
          this.cK = cK
        
        
        
        this.update = function() {
                ctx = myGameArea.context;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.cK);
                ctx.stroke()
                ctx.fill()
                
            }
        
        }
        
        }




    
class sprite {
    constructor (width, height, color, x, y, type, gravity) {
      this.type = type;
      if (this.type == "image") {
        this.image = new Image();
        this.image.src = color;
      }

      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speedY = 0;
      this.speedX = 0;
       this.gravity = gravity;
      this.update = function() {
        ctx = myGameArea.context;
        
        if (type == "image") {
          ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.fillStyle = color;
         ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
            ctx.restore();
        }
      }
       this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY  += this.gravity;    
      }
    }
    }
                                   


function updateGameArea() {
sprite1.update()



sprite1.move(1, 0)

}

 //w3schools html game tutorial       