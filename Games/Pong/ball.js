class Ball {
    constructor() {
        this.x = windowWidth / 2
        this.y = windowHeight / 2
        this.size = windowHeight / 20
        this.speed = windowWidth / 250
        this.xvel = this.speed
        this.yvel = this.speed
    }

    update() {
        this.x += this.xvel
        this.y += this.yvel
        rect(this.x, this.y, this.size, this.size);
    }

    reset() {
        this.x = windowWidth / 2
        this.y = windowHeight / 2
    }

    bouncex() {
        if (this.xvel === this.speed) {
            this.xvel = -this.speed
        } else {
            this.xvel = this.speed
        }
    }

    bouncey() {
        if (this.yvel === this.speed) {
            this.yvel = -this.speed
        } else {
            this.yvel = this.speed
        }
    }

    resize() {
        this.x = windowWidth / 2
        this.y = windowHeight / 2
        this.size = windowHeight / 20
        this.speed = windowWidth / 500
    }
}