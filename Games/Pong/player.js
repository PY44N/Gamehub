class Player {
    constructor() {
        this.x = windowWidth - (windowWidth / 40) - 10
        this.y = windowHeight / 2
        this.width = windowWidth / 40
        this.height = windowHeight / 5
        this.speed = windowWidth / 500
    }

    update() {
        if (this.y <= 0) {
            this.y = 0
        }

        if (this.y >= windowHeight - this.height) {
            this.y = windowHeight - this.height
        }

        rect(this.x, this.y, this.width, this.height)
    }

    up() {
        this.y -= this.speed
    }

    down() {
        this.y += this.speed
    }

    resize() {
        this.x = windowWidth - (windowWidth / 40) - 10
        this.y = windowHeight / 2
        this.width = windowWidth / 40
        this.height = windowHeight / 5
        this.speed = windowWidth / 500
    }
}