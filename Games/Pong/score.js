class Score {
    constructor() {
        this.score = 0
        this.x = windowWidth / 2
        this.y = windowHeight / 10
        this.size = 40
    }

    update() {
        textSize(this.size)
        text(this.score.toString(), this.x, this.y)
    }

    add() {
        this.score++
    }

    reset() {
        this.score = 0
    }

    resize() {
        this.x = windowWidth / 2
        this.y = windowHeight / 10
    }
}