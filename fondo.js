class Fondo {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h

        this.posX = 0
        this.posY = 0

        this.velY = 2

        this.image = new Image()
        this.image.src = "imagenes/fondoBueno.png"


    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.image, this.posX + this.width, this.posY , this.width, this.height)
        this.move()
    }

    move() {

        /* if (this.posY <= -this.height) {
             this.posY = 0
 
             this.posY += this.velY
         }
 
 */
        if (this.posX <= -this.width) {
            this.posX = 0

        }


        this.posX -= this.velY
    }

}