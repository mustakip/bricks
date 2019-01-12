class Paddle {
  constructor(width, height, left, bottom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
  }
  moveRight() {
    this.left += 20;
  }
  moveLeft() {
    this.left -= 20;
  }
}

class Ball {
  constructor(radius, left, bottom) {
    this.width = radius * 2;
    this.height = radius * 2;
    this.left = left;
    this.bottom = bottom;
  }

  move() {
    this.left += 5;
    this.bottom += 5;
  }
}

class Game {
  constructor(width, height, paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
    this.height = height;
    this.width = width;
  }

  startGame() {
    this.ball.move();
  }
}
