window.onload = function () {
  const startButton = document.getElementById('start-button')
  const restartButton = document.getElementById('restart-button')

  let game

  function startGame() {
    console.log('start game')
    game = new Game()
    game.start()
  }

  startButton.addEventListener('click', function () {
    startGame()
  })

  restartButton.addEventListener('click', function () {
    startGame()
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      // Move to the left
      game.player.directionX = -1
    }
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
      // Move to the right
      game.player.directionX = 1
    }
  })

  document.addEventListener('keyup', event => {
    if (
      event.code === 'KeyA' ||
      event.code === 'ArrowLeft' ||
      event.code === 'KeyD' ||
      event.code === 'ArrowRight'
    ) {
      // Stop the player from moving
      game.player.directionX = 0
    }
  })
}
