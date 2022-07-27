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
        this.image.src = "imagenes/machete-removebg-preview.png",
        this.gravity = 0.2;
    }

    draw() {
        
        
        this.ctx.drawImage(this.image,
            this.posX,
            this.posY,
            this.width,
            this.height ,)
            
            this.move()
    }

    move() {
        this.posX += this.velX 
        this.posY += this.velY 
        this.velY += this.gravity
        

        
        
    }
    
}
