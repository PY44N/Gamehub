var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
var size=25
var level=1
var deaths=0
var numcoins=0
function move(x) {
  if(x.keyCode == 39) {
    moveright=1
  }
  else if(x.keyCode == 37) {
    moveleft=1
  } 
  else if(x.keyCode == 38) {
    moveup=1
  } 
  else if(x.keyCode == 40) {
    movedown=1
  }
}
function noMove(x) {
	if(x.keyCode == 39) {
    moveright=0
  } 
  else if(x.keyCode == 37) {
    moveleft=0
  } 
  else if(x.keyCode == 38) {
    moveup=0
  } 
  else if(x.keyCode == 40) {
    movedown=0
  }
}
function movePlayer() {
	var oldx=player['x']
  var oldy=player['y']
	if (moveright==1) {
    player['x']+=speed
  }
  if (moveleft==1) {
    player['x']-=speed
  }
  collide(oldx,oldy)
  var oldx=player['x']
  var oldy=player['y']
  if (moveup==1) {
    player['y']-=speed
  }
  if (movedown==1) {
    player['y']+=speed
  }
  collide(oldx,oldy)
}
function moveEnemies() {
	var i=0
  while (enemies[level].length>i) {
    enemies[level][i]['x']+=enemies[level][i]['xv']
    if (collideEnemy(enemies[level][i])) {
      enemies[level][i]['xv']=0-enemies[level][i]['xv']
      //enemies[level][i]['x']+=enemies[level][i]['xv']
    }
    if (enemies[level][i]['minx']>=enemies[level][i]['x']) {
      enemies[level][i]['xv']=Math.abs(enemies[level][i]['xv'])
    }
    if (enemies[level][i]['x']>=enemies[level][i]['maxx']) {
      enemies[level][i]['xv']=0-Math.abs(enemies[level][i]['xv'])
    }
    enemies[level][i]['y']+=enemies[level][i]['yv']
    if (collideEnemy(enemies[level][i]) || enemies[level][i]['miny']>=enemies[level][i]['y'] || enemies[level][i]['y']>=enemies[level][i]['maxy']) {
      enemies[level][i]['yv']=0-enemies[level][i]['yv']
      //enemies[level][i]['y']+=enemies[level][i]['yv']
    }
    i++
	}
}
function collide(x,y) {
	var i=0
  var player_rect={x:player['x'],y:player['y'],width:size*0.6,height:size*0.6}
  while (blocks[level].length>i) {
    var block_rect={x:blocks[level][i]['x']*size,y:blocks[level][i]['y']*size,width:size,height:size}
		if (colliding(player_rect,block_rect) && blocks[level][i]['type']===1) {
      player['x']=x
      player['y']=y
    }
    if (colliding(player_rect,block_rect) && blocks[level][i]['type']===3 && numcoins>=coinsneeded[level]) {
      level+=1
      numcoins=0
      player['x']=spawnpoints[level][0]
      player['y']=spawnpoints[level][1]
    }
    i++
	}
  i=0
  while (enemies[level].length>i) {
    enemy=enemies[level][i]
    var enemy_rect={x:enemy['x']*size+(size*0.2),y:enemy['y']*size+(size*0.2),width:size*0.6,height:size*0.6}
    if (colliding(player_rect,enemy_rect)) {
      player['x']=spawnpoints[level][0]
      player['y']=spawnpoints[level][1]
      deaths+=1
      numcoins=0
      j=0
    	while (coins[level].length>j) {
    		coins[level][j]['collected']=0
        j++
			}
    }
    i++
  }
  i=0
  while (coins[level].length>i) {
    coin=coins[level][i]
    var coin_rect={x:coin['x']*size+(size*0.25),y:coin['y']*size+(size*0.25),width:size*0.5,height:size*0.5}
    if (colliding(player_rect,coin_rect) && coin['collected']===0) {
      coin['collected']=1
      numcoins+=1
    }
    i++
  }
}
function skip(lv) {
	level=lv
  numcoins=0
  player['x']=spawnpoints[level][0]
  player['y']=spawnpoints[level][1]
}
function collideEnemy(enemy) {
	var i=0
  var enemy_rect={x:enemy['x']*size,y:enemy['y']*size,width:size,height:size}
  while (blocks[level].length>i) {
    var block_rect={x:blocks[level][i]['x']*size,y:blocks[level][i]['y']*size,width:size,height:size}
    if (colliding(enemy_rect,block_rect) && (blocks[level][i]['type']===1 || blocks[level][i]['type']===4)) {
      return true
    }
    i++
	}
  return false
}
function colliding(rect1,rect2) {
  if (rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y) {
    return true
  }
  return false
}
function draw() {
	document.getElementById('level').innerHTML='Level: '+level+' || Deaths: '+deaths
	ctx.fillStyle = "#989898"
	ctx.fillRect(0, 0, c.width, c.height)
  var i=0
  while (blocks[level].length>i) {
    var color='black'
    if (blocks[level][i]['type']===0) {
      if (blocks[level][i]['x']%2===0 && blocks[level][i]['y']%2===0) {
        color='white'
      }
      if (blocks[level][i]['x']%2===0 && blocks[level][i]['y']%2===1) {
        color='lightgrey'
      }
      if (blocks[level][i]['x']%2===1 && blocks[level][i]['y']%2===0) {
        color='lightgrey'
      }
      if (blocks[level][i]['x']%2===1 && blocks[level][i]['y']%2===1) {
        color='white'
      }
    }
    if (blocks[level][i]['type']===1) {
      color='black'
    }
    if (blocks[level][i]['type']===2) {
      color='lightgreen'
    }
    if (blocks[level][i]['type']===3) {
      color='lightgreen'
    }
    ctx.fillStyle = color+""
		if (!(blocks[level][i]['type']===4)) {
      ctx.fillRect(blocks[level][i]['x']*size, blocks[level][i]['y']*size, size, size)
    }
    i++
	}
  ctx.fillStyle = "red"
	ctx.fillRect(player['x'], player['y'], size*0.6, size*0.6)
  ctx.strokeStyle="black"
	ctx.strokeRect(player['x'], player['y'], size*0.6, size*0.6)
  var i=0
  while (enemies[level].length>i) {
    ctx.beginPath()
		ctx.arc(enemies[level][i]['x']*size+size/2,enemies[level][i]['y']*size+size/2,(size*0.6)/2,0,2*Math.PI)
		ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'black'
		ctx.fill()
    ctx.stroke()
		ctx.closePath()
    i++
	}
  var i=0
  while (coins[level].length>i) {
    if (coins[level][i]['collected']===0) {
      ctx.beginPath()
			ctx.arc(coins[level][i]['x']*size+size/2,coins[level][i]['y']*size+size/2,(size*0.5)/2,0,2*Math.PI)
			ctx.fillStyle = 'yellow'
	    ctx.strokeStyle = 'black'
			ctx.fill()
      ctx.stroke()
			ctx.closePath()
    }
    i++
	}
}
function addblock(type,x,y) {
	blocks[blocklevel].push({'type':type,'x':x,'y':y})
}
function addblocks(type,x1,y1,x2,y2) {
	var i=x1*1
  while (x2+1>i) {
    var j=y1*1
    while (y2+1>j) {
      addblock(type,i,j)
      j++
    }
    i++
  }
}
var blocks=[[],[],[],[],[],[],[]]
var blocklevel = 1
addblocks(1,0,0,4,0)
addblocks(1,0,1,0,9)
addblocks(1,1,9,8,9)
addblocks(1,4,1,4,7)
addblock(1,8,8)
addblocks(1,8,7,17,7)
addblock(1,5,7)
addblocks(1,6,2,6,7)
addblocks(1,7,2,15,2)
addblocks(1,17,2,17,6)
addblock(1,15,1)
addblocks(1,15,0,23,0)
addblocks(1,23,1,23,9)
addblocks(1,19,9,22,9)
addblocks(1,19,2,19,8)
addblock(1,18,2)
addblocks(2,1,1,3,8)
addblocks(3,20,1,22,8)
addblocks(0,4,8,7,8)
addblocks(0,7,3,7,7)
addblocks(0,7,3,15,6)
addblocks(0,16,1,16,6)
addblocks(0,17,1,19,1)
var blocklevel = 2
addblocks(1,0,2,0,5)
addblocks(1,1,2,3,2)
addblocks(1,1,5,3,5)
addblock(1,3,1)
addblock(1,3,6)
addblocks(1,3,0,16,0)
addblocks(1,3,7,16,7)
addblock(1,16,1)
addblock(1,16,6)
addblocks(1,19,2,19,5)
addblocks(1,16,2,18,2)
addblocks(1,16,5,18,5)
addblocks(2,1,3,3,4)
addblocks(3,16,3,18,4)
addblocks(0,4,1,15,6)
var blocklevel = 3
addblocks(1,0,1,0,4)
addblocks(1,1,1,4,1)
addblocks(1,4,0,6,0)
addblocks(1,6,1,10,1)
addblocks(1,10,0,12,0)
addblocks(1,12,1,18,1)
addblocks(1,1,4,7,4)
addblocks(1,7,5,9,5)
addblocks(1,9,4,13,4)
addblocks(1,13,5,15,5)
addblocks(1,15,4,18,4)
addblocks(1,19,1,19,4)
addblocks(3,1,2,2,3)
addblocks(0,3,2,18,3)
addblock(0,5,1)
addblock(0,8,4)
addblock(0,11,1)
addblock(0,14,4)
var spawnpoints = [[0,0],[size*2,size*2],[size*2,size*4],[size*1.5,size*2.5],[0,0]]
var coinsneeded = [0,0,1,1]
var player = {'x':spawnpoints[level][0],'y':spawnpoints[level][1]}
var moveright=0
var moveleft=0
var moveup=0
var movedown=0
var speed=1
document.addEventListener("keydown", move, false);
document.addEventListener("keyup", noMove, false);
function addenemy(x,y,xv,yv,minx=0,maxx=100,miny=0,maxy=100) {
	enemies[enemylevel].push({'x':x,'y':y,'xv':xv/size,'yv':yv/size,'minx':minx,'maxx':maxx,'miny':miny,'maxy':maxy})
}
var enemies = [[],[],[],[],[],[],[],[]]
var enemylevel = 1
addenemy(7,3,2,0)
addenemy(16,4,-2,0)
addenemy(7,5,2,0)
addenemy(16,6,-2,0)
var enemylevel = 2
addenemy(4,1,0,-1)
addenemy(5,6,0,1)
addenemy(6,1,0,-1)
addenemy(7,6,0,1)
addenemy(8,1,0,-1)
addenemy(9,6,0,1)
addenemy(10,1,0,-1)
addenemy(11,6,0,1)
addenemy(12,1,0,-1)
addenemy(13,6,0,1)
addenemy(14,1,0,-1)
addenemy(15,6,0,1)
var enemylevel = 3
addenemy(3,2,1.2,0,3,9)
addenemy(3,3,1.2,0,3,9)
addenemy(10,2,1.2,0,10,16)
addenemy(10,3,1.2,0,10,16)
function addcoin(x,y) {
	coins[coinlevel].push({'x':x,'y':y,'collected':0})
}
var coins = [[],[],[],[],[],[],[]]
var coinlevel=2
addcoin(9.5,3.5)
var coinlevel=3
addcoin(17.5,2.5)
function tick() {
	draw()
  movePlayer()
  moveEnemies()
}
setInterval(tick,10)