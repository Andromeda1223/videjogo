class Persona {
    constructor(ctx, gameWidth, playerPosY0, playerHeight, imagesrc) {
  
      this.ctx = ctx;
      this.width = 80;
      this.height = 200;
  
      this.posX = gameWidth;
      this.posY = playerPosY0 + playerHeight - this.height + 40;
  
      this.velX = 6;
      this.image = new Image()
      this.image.src = imagesrc
      
    }
  
    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height ,)
            
            
      this.move()
    }
  
    move() {
      this.posX -= this.velX
    }




  }