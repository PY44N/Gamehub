var game = {
    canvas :  document.createElement("canvas"),
    start : function(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


class text {
    constructor (x, y, value, maxwidth, color, fontsize, font) {
    this.x = x
    this.value = value;
    this.y = y;
    this.mW = maxwidth;
    this.color = color;
    if (font == "default") {
        this.font = "40px Fantasy"
    } else {
        this.font = `${fontsize} ${font}`;
    }

    this.write = function() {
    var ctx = game.context;
    ctx.fillStyle = this.color;
    ctx.font = this.font;
    ctx.fillText(this.value, this.x, this.y, this.mW)
    
}}}