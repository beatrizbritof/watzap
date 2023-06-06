const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
  posicao: {
    x: 0,
    y: 0
  },
  imageSrc: './imagens/background.png'
})

const shop = new Sprite({
  posicao: {
    x: 600,
    y: 128
  },
  imageSrc: './imagens/shop.png',
  escala: 2.75,
  maximoDeFrames: 6
})

const jogador1 = new Fighter({
  posicao: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './imagens/samuraiMack/Idle.png',
  maximoDeFrames: 8,
  escala: 2.5,
  offset: {
    x: 215,
    y: 157
  },
  sprites: {
    idle: {
      imageSrc: './imagens/samuraiMack/Idle.png',
      maximoDeFrames: 8
    },
    run: {
      imageSrc: './imagens/samuraiMack/Run.png',
      maximoDeFrames: 8
    },
    jump: {
      imageSrc: './imagens/samuraiMack/Jump.png',
      maximoDeFrames: 2
    },
    fall: {
      imageSrc: './imagens/samuraiMack/Fall.png',
      maximoDeFrames: 2
    },
    attack1: {
      imageSrc: './imagens/samuraiMack/Attack1.png',
      maximoDeFrames: 6
    },
    takeHit: {
      imageSrc: './imagens/samuraiMack/Take Hit - white silhouette.png',
      maximoDeFrames: 4
    },
    death: {
      imageSrc: './imagens/samuraiMack/Death.png',
      maximoDeFrames: 6
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const jogador2 = new Fighter({
  posicao: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './imagens/kenji/Idle.png',
  maximoDeFrames: 4,
  escala: 2.5,
  offset: {
    x: 215,
    y: 167
  },
  sprites: {
    idle: {
      imageSrc: './imagens/kenji/Idle.png',
      maximoDeFrames: 4
    },
    run: {
      imageSrc: './imagens/kenji/Run.png',
      maximoDeFrames: 8
    },
    jump: {
      imageSrc: './imagens/kenji/Jump.png',
      maximoDeFrames: 2
    },
    fall: {
      imageSrc: './imagens/kenji/Fall.png',
      maximoDeFrames: 2
    },
    attack1: {
      imageSrc: './imagens/kenji/Attack1.png',
      maximoDeFrames: 4
    },
    takeHit: {
      imageSrc: './imagens/kenji/Take hit.png',
      maximoDeFrames: 3
    },
    death: {
      imageSrc: './imagens/kenji/Death.png',
      maximoDeFrames: 7
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(jogador1)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  jogador1.update()
  jogador2.update()

  jogador1.velocity.x = 0
  jogador2.velocity.x = 0

  // jogador1 movement

  if (keys.a.pressed && jogador1.lastKey === 'a') {
    jogador1.velocity.x = -5
    jogador1.switchSprite('run')
  } else if (keys.d.pressed && jogador1.lastKey === 'd') {
    jogador1.velocity.x = 5
    jogador1.switchSprite('run')
  } else {
    jogador1.switchSprite('idle')
  }

  // jumping
  if (jogador1.velocity.y < 0) {
    jogador1.switchSprite('jump')
  } else if (jogador1.velocity.y > 0) {
    jogador1.switchSprite('fall')
  }

  // jogador2 movement
  if (keys.ArrowLeft.pressed && jogador2.lastKey === 'ArrowLeft') {
    jogador2.velocity.x = -5
    jogador2.switchSprite('run')
  } else if (keys.ArrowRight.pressed && jogador2.lastKey === 'ArrowRight') {
    jogador2.velocity.x = 5
    jogador2.switchSprite('run')
  } else {
    jogador2.switchSprite('idle')
  }

  // jumping
  if (jogador2.velocity.y < 0) {
    jogador2.switchSprite('jump')
  } else if (jogador2.velocity.y > 0) {
    jogador2.switchSprite('fall')
  }

  // detect for collision & jogador2 gets hit
  if (
    rectangularCollision({
      rectangle1: jogador1,
      rectangle2: jogador2
    }) &&
    jogador1.isAttacking &&
    jogador1.frameAtual === 4
  ) {
    jogador2.takeHit()
    jogador1.isAttacking = false

    gsap.to('#jogador2Health', {
      width: jogador2.health + '%'
    })
  }

  // if jogador1 misses
  if (jogador1.isAttacking && jogador1.frameAtual === 4) {
    jogador1.isAttacking = false
  }

  // this is where our jogador1 gets hit
  if (
    rectangularCollision({
      rectangle1: jogador2,
      rectangle2: jogador1
    }) &&
    jogador2.isAttacking &&
    jogador2.frameAtual === 2
  ) {
    jogador1.takeHit()
    jogador2.isAttacking = false

    gsap.to('#jogador1Health', {
      width: jogador1.health + '%'
    })
  }

  // if jogador1 misses
  if (jogador2.isAttacking && jogador2.frameAtual === 2) {
    jogador2.isAttacking = false
  }

  // end game based on health
  if (jogador2.health <= 0 || jogador1.health <= 0) {
    determineWinner({ jogador1, jogador2, timerId })
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (!jogador1.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        jogador1.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        jogador1.lastKey = 'a'
        break
      case 'w':
        jogador1.velocity.y = -20
        break
      case ' ':
        jogador1.attack()
        break
    }
  }

  if (!jogador2.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        jogador2.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        jogador2.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        jogador2.velocity.y = -20
        break
      case 'Enter':
        jogador2.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // jogador2 keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})