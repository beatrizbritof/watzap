function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.attackBox.posicao.x + rectangle1.attackBox.width >=
        rectangle2.posicao.x &&
      rectangle1.attackBox.posicao.x <=
        rectangle2.posicao.x + rectangle2.width &&
      rectangle1.attackBox.posicao.y + rectangle1.attackBox.height >=
        rectangle2.posicao.y &&
      rectangle1.attackBox.posicao.y <= rectangle2.posicao.y + rectangle2.height
    )
  }
  
  function determineWinner({ jogador1, jogador2, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (jogador1.health === jogador2.health) {
      document.querySelector('#displayText').innerHTML = 'Tie'
    } else if (jogador1.health > jogador2.health) {
      document.querySelector('#displayText').innerHTML = 'Jogador 1 venceu'
    } else if (jogador1.health < jogador2.health) {
      document.querySelector('#displayText').innerHTML = 'Jogador 2 venceu'
    }
  }
  
  let timer = 60
  let timerId
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000)
      timer--
      document.querySelector('#timer').innerHTML = timer
    }
  
    if (timer === 0) {
      determineWinner({ jogador1, jogador2, timerId })
    }
  }