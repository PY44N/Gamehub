class Enemy {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = windowWidth / 40
        this.height = windowHeight
    }

    update() {
        rect(this.x, this.y, this.width, this.height)
    }

    resize() {
        this.width = windowWidth / 40
        this.height = windowHeight
    }
}