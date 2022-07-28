const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    personas: [],
    intervalId: undefined,
    puntuacion: 0,
    vidas: 3,
    chucilloMusica: new Audio("Sonido de daño en Minecraft (Nuevotono.Net).mp3"),
    image: new Image(),
    src: "imagenes/portada 3 con titulo mono.jpg",
    policias: [],
    arrayVidas: [],
    audioMusica: new Audio("Michael Myers Theme.m4r"),

    imagen: new Image(),
    src: "corazon-removebg-preview.png",
    
    arrayImagenesSkin: ["./imagenes/victima1.png", "./imagenes/victima2.png", "./imagenes/victima3.png", "./imagenes/victima4.png"],
    arraySkinPolicia: ["./imagenes/fila-1-columna-1__2_-removebg-preview.png", "./imagenes/Polichia.png"],
    init() {
        this.canvas = document.getElementById("myCanvas")
        this.ctx = this.canvas.getContext("2d")
        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    },
    start() {

        this.createAll()

        this.intervalId = setInterval(() => {
            this.framesCounter++

            this.clear()
            this.drawAll()
            this.generateVidas()
            this.generatePersonas()
            this.generatePolicias()
            this.isCollision()
            this.colisionesMachete()
            this.contadorDePuntuacion(this.puntuacion)
            this.contadorDeVidas(this.vidas)
            this.player.drawImagen1()
            
            this.isCollisionPolichia()
            this.colisionVidas()
            if(this.framesCounter % 1200 === 0){
                
                this.player.cambiarSkin()
            }

            if(this.framesCounter % 60 === 0){
                this.musicaFondo()
            }


        }, 1000 / this.FPS)
    },


    createAll() {
        this.fondo = new Fondo(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height)


    },

    drawAll() {
        this.fondo.draw()
        this.personas.forEach((persona) => {
            persona.draw()

        })
        this.player.draw(this.framesCounter)
        this.policias.forEach((policias) => {
            policias.draw()
        })

        this.arrayVidas.forEach((policias) => {
            policias.draw()
        })
        
    }

    ,
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)

    },
    generatePersonas() {
        if (this.framesCounter % 333 === 0) {
            numAleatorio = Math.floor(Math.random() * this.arrayImagenesSkin.length)

            this.personas.push(new Persona(this.ctx, this.width, this.player.posY0, this.player.height, this.arrayImagenesSkin[numAleatorio]))


        }


    },
    isCollision() {
        this.personas.forEach((personas, index) => {
            if (this.player.posX < personas.posX + personas.width &&
                this.player.posX + this.player.width > personas.posX &&
                this.player.posY < personas.posY + personas.height &&
                this.player.height + this.player.posY > personas.posY) {
                this.personas.splice(index, 1)

                this.puntuacion = this.puntuacion - 10
               

            }
        })
        if (this.vidas === 0) {
            clearInterval(this.intervalId)
            this.clear()
            this.player.drawGameOver()
            this.player.gameover.play()
            this.audioMusica.pause()
        }
    },
    colisionesMachete() {
        this.player.bullets.forEach((bullets, index1) => {
            this.personas.forEach((obstaclee, index2) => {
                if (bullets.posX < obstaclee.posX + obstaclee.width &&
                    bullets.posX > obstaclee.posX &&
                    bullets.posY < obstaclee.posY + obstaclee.height &&
                    bullets.posY > obstaclee.posY) {
                    this.sonido()
                    this.personas.splice(index2, 1)
                    this.player.bullets.splice(index1, 1)
                    this.puntuacion = this.puntuacion + 20






                }
            })
        })
    },
    sonido() {
        this.chucilloMusica.play()

    },
    contadorDePuntuacion(puntuacion) {
        this.ctx.fillStyle = "white"
        this.ctx.font = '30px arial'
        this.ctx.fillText(`Score: ${puntuacion}`, this.width - 220, 50)
    },
    contadorDeVidas(vidas) {
        
        //this.ctx.drawImage("corazon-removebg-preview.png", 25, 100)
        this.ctx.fillText(`.  x ${vidas}`, this.width - 180, 120)
    },
    

    generateVidas() {
        if (this.framesCounter % 1000 === 0) {
            this.arrayVidas.push(new Vida(this.ctx, this.width, this.player.posY0, this.player.height, "imagenes/2767b988ec94acbd05327e733baff3cc-removebg-preview.png"))
        }
    },
    generatePolicias() {
        if (this.framesCounter % 533 === 0) {
            this.policias.push(new Policia(this.ctx, this.width, this.player.posY0, this.player.height, this.arraySkinPolicia[Math.floor(Math.random() * this.arraySkinPolicia.length)]))


        }
        if (this.puntuacion > 100) {
            if (this.framesCounter % 400 === 0) {
                this.policias.push(new Policia(this.ctx, this.width, this.player.posY0, this.player.height, this.arraySkinPolicia[Math.floor(Math.random() * this.arraySkinPolicia.length)]))
            }
        }


    },
    isCollisionPolichia() {
        this.policias.forEach((personas, index) => {
            if (this.player.posX < personas.posX + personas.width &&
                this.player.posX + this.player.width > personas.posX &&
                this.player.posY < personas.posY + personas.height &&
                this.player.height + this.player.posY > personas.posY) {
                this.puntuacion = this.puntuacion - 20
                this.policias.splice(index, 1)
                this.vidas--
            }

        })

    },
    musicaFondo() {
        this.audioMusica.volume = 0.2
        this.audioMusica.play()

    },
    colisionVidas() {
        this.arrayVidas.forEach((personas, index) => {
            if (this.player.posX < personas.posX + personas.width &&
                this.player.posX + this.player.width > personas.posX &&
                this.player.posY < personas.posY + personas.height &&
                this.player.height + this.player.posY > personas.posY) {
                this.arrayVidas.splice(index, 1)
                this.vidas++
            }
        })

    },

    
}