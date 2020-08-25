var ball
var player
var enemy
var score

function setup() {
    createCanvas(windowWidth, windowHeight)
    ball = new Ball()
    player = new Player()
    enemy = new Enemy()
    score = new Score()
}

function draw() {
    background(220);
    ball.update()
    enemy.update()
    player.update()
    score.update()

    if (keyIsDown(38) || keyIsDown(87)) {
        player.up()
    }
    if (keyIsDown(40) || keyIsDown(83)) {
        player.down()
    }

    //Player and Ball Collision
    if (ball.x + ball.size >= player.x && ball.x <= player.x + player.width && ball.y >= player.y && ball.y <= player.y + player.height && ball.xvel == ball.speed) {
        ball.bouncex()
    }

    //Player Collision With Enemy
    if (ball.x <= enemy.width) {
        ball.bouncex()
        score.add()
    }

    //Player Dies
    if (ball.x >= windowWidth - ball.size) {
        ball.reset()
        score.reset()
    }

    //Ball and floor collision
    if (ball.y >= windowHeight - ball.size) {
        ball.bouncey()
    }

    //Ball and ceiling collision
    if (ball.y <= 0) {
        ball.bouncey()
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    enemy.resize()
    score.resize()
    player.resize()

}