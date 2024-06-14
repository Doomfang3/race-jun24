class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen
    this.width = 40
    this.height = 80
    this.top = this.gameScreen.clientHeight - this.height - 40
    this.left = (this.gameScreen.clientWidth - this.width) / 2
    this.element = document.createElement('img')
    this.speed = 3
    this.directionX = 0

    this.element.src = '../images/car.png'
    this.element.style.position = 'absolute'
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`

    this.gameScreen.appendChild(this.element)
  }

  move() {
    this.left += this.directionX * this.speed

    // Left side
    if (this.left < GRASS_WIDTH) {
      this.left = GRASS_WIDTH
    }
    // Right side
    if (this.left > this.gameScreen.clientWidth - this.width - GRASS_WIDTH) {
      this.left = this.gameScreen.clientWidth - this.width - GRASS_WIDTH
    }
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect()
    const obstacleRect = obstacle.element.getBoundingClientRect()

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      console.log('Crash!')

      return true
    } else {
      return false
    }
  }
}
