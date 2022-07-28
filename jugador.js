class Player {

    constructor(ctx, gameW, gameH) {
  
      this.ctx = ctx;
  
      this.gameWidth = gameW;
      this.gameHeight = gameH;
  
      this.width = 100;
      this.height = 200;
      this.arraySkin = ["./imagenes/ghostface512.png","./imagenes/michael_myers512.png", "imagenes/freddy_kruger_1-removebg-preview.png", "imagenes/slender512.png", "imagenes/pennywise-removebg-preview (4) (1).png", "imagenes/jason_vorhees_cuad__1_-removebg-preview.png", "imagenes/Pyramid_Head__Dead_by_Daylight.png", "imagenes/Leatherface.png", "imagenes/Jack Torrance.png"]
      this.image = new Image();
      this.image.src = this.arraySkin[Math.floor(Math.random()* this.arraySkin.length)];
      
  
      this.posX =  50
      this.posY = this.gameHeight - this.height - 80 ;
      this.posY0 = this.posY;
  
      this.velY = 1;
      this.gravity = 0.3;
  
      this.bullets = [];
  
      this.setListeners();
      this.musica = new Audio("Sonido - Salto de Mario Bros.mp3")

      this.imagen = new Image();
      this.imagen.src = "imagenes/portada 3 con titulo mono.jpg"
      this.gameover = new Audio("game-over-1-gameover.mp3")

      this.cuchilloMuerte= new Audio("onlymp3.to - Lanzar Cuchillo - Efecto de Sonido (HD)-2AF5brFKkvo-192k-1658944904354.mp3")
    
      this.imagen1 = new Image();
      this.imagen1.src = "corazon-removebg-preview.png"
    

      this.imagenDificulti = new Image()
      this.imagenDificulti.src = "1ebcf5fcb8cab9abf04cf2d13e1aca53.png"

    this.transformacion = new Audio("Whoosh_01_Sound_Effect_Mp3_37.mp3")
    this.choque = new Audio("sonido choque.mp3")

    this.sonidoMuerteKrillin = new Audio("grito-de-krillin.mp3")
    }
  
    draw(framesCounter) {
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        250,
        250,
       
        
      )
   
      
      this.bullets.forEach((bullet) => {
       bullet.draw(framesCounter)
      })
      this.move()
      this.clearObatacles()
    }

    drawImagen1(){
      this.ctx.drawImage(
        this.imagen1,
        this.gameWidth - 230,
        60,
        100,
        100,       
        
      )
    }

    animate(framesCounter) {
      if (framesCounter % 8 == 0) {
        this.image.framesIndex++
      }
      if (this.image.framesIndex >= this.image.frames) {
        this.image.framesIndex = 0
      }
  
    } 
    
    drawGameOver() {
      this.ctx.drawImage(
        this.imagen,
        0,
        0,
        this.gameWidth,
      this.gameHeight,
        
      )
       
       }

 
    move() {
      if (this.posY < this.posY0) {
        
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
            this.cuchilloMuerte.play()
            break
        }
      });
    }
  
    jump() {
      this.posY -= 80
      this.velY -= 15
      this.musica.play()
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
    cambiarSkin(){
    
      
           this.image.src = this.arraySkin[Math.floor(Math.random()* this.arraySkin.length)]
           
   
          }
   
  }

