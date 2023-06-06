class Sprite {
    constructor({
      posicao,
      imageSrc,
      escala = 1,
      maximoDeFrames = 1,
      offset = { x: 0, y: 0 }
    }) {
      this.posicao = posicao
      this.width = 50
      this.height = 150
      this.image = new Image()
      this.image.src = imageSrc
      this.escala = escala
      this.maximoDeFrames = maximoDeFrames
      this.frameAtual = 0
      this.frameDecorrido = 0
      this.tempoPorFrame = 5
      this.offset = offset
    }
  
    draw() {
      c.drawImage(
        this.image,
        this.frameAtual * (this.image.width / this.maximoDeFrames),
        0,
        this.image.width / this.maximoDeFrames,
        this.image.height,
        this.posicao.x - this.offset.x,
        this.posicao.y - this.offset.y,
        (this.image.width / this.maximoDeFrames) * this.escala,
        this.image.height * this.escala
      )
    }
  
    animateFrames() {
      this.frameDecorrido++
  
      if (this.frameDecorrido % this.tempoPorFrame === 0) {
        if (this.frameAtual < this.maximoDeFrames - 1) {
          this.frameAtual++
        } else {
          this.frameAtual = 0
        }
      }
    }
  
    update() {
      this.draw()
      this.animateFrames()
    }
  }
  
  class Fighter extends Sprite {
    constructor({
      posicao,
      velocity,
      color = 'red',
      imageSrc,
      escala = 1,
      maximoDeFrames = 1,
      offset = { x: 0, y: 0 },
      sprites,
      attackBox = { offset: {}, width: undefined, height: undefined }
    }) {
      super({
        posicao,
        imageSrc,
        escala,
        maximoDeFrames,
        offset
      })
  
      this.velocity = velocity
      this.width = 50
      this.height = 150
      this.lastKey
      this.attackBox = {
        posicao: {
          x: this.posicao.x,
          y: this.posicao.y
        },
        offset: attackBox.offset,
        width: attackBox.width,
        height: attackBox.height
      }
      this.color = color
      this.isAttacking
      this.health = 100
      this.frameAtual = 0
      this.frameDecorrido = 0
      this.tempoPorFrame = 5
      this.sprites = sprites
      this.dead = false
  
      for (const sprite in this.sprites) {
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite].imageSrc
      }
    }
  
    update() {
      this.draw()
      if (!this.dead) this.animateFrames()
  
      // attack boxes
      this.attackBox.posicao.x = this.posicao.x + this.attackBox.offset.x
      this.attackBox.posicao.y = this.posicao.y + this.attackBox.offset.y
  
      // draw the attack box
      // c.fillRect(
      //   this.attackBox.posicao.x,
      //   this.attackBox.posicao.y,
      //   this.attackBox.width,
      //   this.attackBox.height
      // )
  
      this.posicao.x += this.velocity.x
      this.posicao.y += this.velocity.y
  
      // gravity function
      if (this.posicao.y + this.height + this.velocity.y >= canvas.height - 96) {
        this.velocity.y = 0
        this.posicao.y = 330
      } else this.velocity.y += gravity
    }
  
    attack() {
      this.switchSprite('attack1')
      this.isAttacking = true
    }
  
    takeHit() {
      this.health -= 10
  
      if (this.health <= 0) {
        this.switchSprite('death')
      } else this.switchSprite('takeHit')
    }
  
    switchSprite(sprite) {
      if (this.image === this.sprites.death.image) {
        if (this.frameAtual === this.sprites.death.maximoDeFrames - 1)
          this.dead = true
        return
      }
  
      // overriding all other animations with the attack animation
      if (
        this.image === this.sprites.attack1.image &&
        this.frameAtual < this.sprites.attack1.maximoDeFrames - 1
      )
        return
  
      // override when fighter gets hit
      if (
        this.image === this.sprites.takeHit.image &&
        this.frameAtual < this.sprites.takeHit.maximoDeFrames - 1
      )
        return
  
      switch (sprite) {
        case 'idle':
          if (this.image !== this.sprites.idle.image) {
            this.image = this.sprites.idle.image
            this.maximoDeFrames = this.sprites.idle.maximoDeFrames
            this.frameAtual = 0
          }
          break
        case 'run':
          if (this.image !== this.sprites.run.image) {
            this.image = this.sprites.run.image
            this.maximoDeFrames = this.sprites.run.maximoDeFrames
            this.frameAtual = 0
          }
          break
        case 'jump':
          if (this.image !== this.sprites.jump.image) {
            this.image = this.sprites.jump.image
            this.maximoDeFrames = this.sprites.jump.maximoDeFrames
            this.frameAtual = 0
          }
          break
  
        case 'fall':
          if (this.image !== this.sprites.fall.image) {
            this.image = this.sprites.fall.image
            this.maximoDeFrames = this.sprites.fall.maximoDeFrames
            this.frameAtual = 0
          }
          break
  
        case 'attack1':
          if (this.image !== this.sprites.attack1.image) {
            this.image = this.sprites.attack1.image
            this.maximoDeFrames = this.sprites.attack1.maximoDeFrames
            this.frameAtual = 0
          }
          break
  
        case 'takeHit':
          if (this.image !== this.sprites.takeHit.image) {
            this.image = this.sprites.takeHit.image
            this.maximoDeFrames = this.sprites.takeHit.maximoDeFrames
            this.frameAtual = 0
          }
          break
  
        case 'death':
          if (this.image !== this.sprites.death.image) {
            this.image = this.sprites.death.image
            this.maximoDeFrames = this.sprites.death.maximoDeFrames
            this.frameAtual = 0
          }
          break
      }
    }
  }