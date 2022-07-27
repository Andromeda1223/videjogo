class Machete {

    constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight) {

        this.ctx = ctx;

        this.posX = playerPosX + playerWidth;
        this.posY = playerPosY + playerHeight / 2;
        this.height = 70
        this.width = 70
        this.playerPosY0 = playerPosY0;
        this.playerHeight = playerHeight;

        this.radius = 5;

        this.velX = 12;
        this.velY = 1;
        this.image = new Image(),
        this.image.src = "imagenes/sprite_cuchillo-removebg-preview.png",
        this.gravity = 0.2;

        this.image.frames = 4;
        this.image.framesIndex = 0;
    }

    draw(framesCounter) {
        
        
        this.ctx.drawImage(this.image,
            this.image.framesIndex * (this.image.width / this.image.frames), 0
            ,
            this.image.width / this.image.frames,
      this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height ,)
        this.animate(framesCounter)
            this.move()
    }
/*draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.image.framesIndex * (this.image.width / this.image.frames),
      0,
      this.image.width / this.image.frames,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height,
    )
    this.animate(framesCounter)
    this.bullets.forEach((bullet) => {
      bullet.draw()
    })
    this.move()
  }
*/
  animate(framesCounter) {
    if (framesCounter % 12 == 0) {
      this.image.framesIndex++
    }
    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0
    }

  }
    move() {
        this.posX += this.velX 
        this.posY += this.velY 
        this.velY += this.gravity
        

        
        
    }
    
}
