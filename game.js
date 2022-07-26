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
    init() {
        this.canvas = document.getElementById("myCanvas")
        this.ctx = this.canvas.getContext("2d")
        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.width = 1300
        this.height = 650
        this.canvas.width = this.width
        this.canvas.height = this.height
    },
    start() {

        this.createAll()

        this.intervalId = setInterval(() => {
            this.framesCounter++

            this.clear()
            this.drawAll()
            this.generatePersonas()
            this.isCollision()


        }, 1000 / this.FPS)
    },


    createAll() {
        this.fondo = new Fondo(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height)
        this
    },

    drawAll() {
        this.fondo.draw()
        this.personas.forEach((persona) => {
            persona.draw()

        })
        this.player.draw()
    }

    ,
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)

    },
    generatePersonas() {
        if (this.framesCounter % 85 === 0) {
            this.personas.push(new Persona(this.ctx, this.width, this.player.posY0, this.player.height))


        }

    },
    isCollision() {
        this.personas.forEach((personas, index) => {
            if (this.player.posX < personas.posX + personas.width &&
                this.player.posX + this.player.width > personas.posX &&
                this.player.posY < personas.posY + personas.height &&
                this.player.height + this.player.posY > personas.posY) {
                this.personas.splice(index, 1)
                this.vidas--
                console.log(this.vidas)
            }
        })
        if (this.vidas === 0) {
            clearInterval(this.intervalId)
        }
    },
}



