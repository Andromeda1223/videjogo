class Vida {
    constructor(ctx, gameWidth, playerPosY0, playerHeight, imagesrc) {
  
        this.ctx = ctx;
        this.width = 80;
        this.height = 100;
    
        this.posX = gameWidth;
        this.posY = playerPosY0 - 180;
    
        this.velX = 6;
        this.image = new Image()
        this.image.src = imagesrc
        this.image.frames = 2;
        this.image.framesIndex = 0
      }
    
      draw() {
          this.ctx.drawImage(
            this.image,
            
              this.posX,
              this.posY,
              this.width,
              this.height ,)
              
              this.image,
            this.image.framesIndex * (this.image.width / this.image.frames), 0
            ,
            this.image.width / this.image.frames,
      this.image.height,
        this.move()
      }
    
      move() {
        this.posX -= this.velX
      }
    }