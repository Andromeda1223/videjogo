class Player {

    constructor(ctx, gameW, gameH) {
  
      this.ctx = ctx;
  
      this.gameWidth = gameW;
      this.gameHeight = gameH;
  
      this.width = 100;
      this.height = 100;
  
      this.image = new Image();
      this.image.src = "./imagenes/demogorgon.png";
      
  
      this.posX =  50
      this.posY = this.gameHeight - this.height - 90 ;
      this.posY0 = this.posY;
  
      this.velY = 1;
      this.gravity = 0.3;
  
      this.bullets = [];
  
      this.setListeners();
      this.musica = new Audio("Sonido - Salto de Mario Bros.mp3")
    }
  
    draw() {
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        150,
        150,
       
        
      )
      //ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
      
      this.bullets.forEach((bullet) => {
       bullet.draw()
      })
      this.move()
      this.clearObatacles()
    }
    
  
    /*animate(framesCounter) {
      if (framesCounter % 8 == 0) {
        this.image.framesIndex++
      }
      if (this.image.framesIndex >= this.image.frames) {
        this.image.framesIndex = 0
      }
  
    }
    */
  
    move() {
      if (this.posY < this.posY0) {
        this.musica.play()
        this.posY += this.velY
        this.velY += this.gravity
        
      }
      else {
        this.posY = this.posY0
        this.velY = 1
      }
      
  
    }
  
    setListeners() {
      document.addEventListener("keydown", e => {
        switch (e.key) {
          case "ArrowUp":
            if (this.posY >= this.posY0) { //solo saltamos si estamos en el suelo
              this.jump()
            }
            break
          case "s":
            this.shoot()
            break
        }
      });
    }
  
    jump() {
      this.posY -= 60
      this.velY -= 10
    }
  
    shoot() {
        if ( this.bullets.length < 1){
      this.bullets.push(new Machete(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height))
        }
    }
  
    clearObatacles(){
        this.bullets = this.bullets.filter((obtacles)=>{
            return obtacles.posY <= this.gameHeight
           
        })
        
    }
  
  
  }
  