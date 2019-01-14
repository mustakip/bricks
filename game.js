class Game {
  constructor(width, height, paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
    this.height = height;
    this.width = width;
    this.gameStatus = "continue";
  }

  hasColidedWithTop() {
    return this.ball.bottom + this.ball.height >= this.height;
  }
  hasColidedWithBottom() {
    return this.ball.bottom <= 0;
  }
  hasColidedWithRight() {
    return this.ball.left + this.ball.width >= this.width;
  }
  hasColidedWithLeft() {
    return this.ball.left <= 0;
  }
  hascolidedWithPaddle() {
    return this.isAtHeightOfPaddle() && this.isOnThePaddle();
  }
  isAtHeightOfPaddle() {
    let paddleHeight = this.paddle.bottom + this.paddle.height;
    return this.ball.bottom <= paddleHeight;
  }
  isOnThePaddle() {
    let ballLeft = this.ball.left + this.ball.width / 2;
    let isWithinLeftSide = ballLeft >= this.paddle.left;
    let isWithinRightSide = ballLeft <= this.paddle.left + this.paddle.width;
    return isWithinLeftSide && isWithinRightSide;
  }
  isPaddleInsideLeft() {
    return this.paddle.left > 0;
  }
  isPaddleInsideRight() {
    return this.paddle.left < this.width - this.paddle.width;
  }

  checkColision() {
    if (this.hasColidedWithRight()) {
      this.ball.leftAction = this.ball.decrement;
    }
    if (this.hasColidedWithLeft()) {
      this.ball.leftAction = this.ball.increment;
    }
    if (this.hasColidedWithTop()) {
      this.ball.bottomAction = this.ball.decrement;
    }
    if (this.hascolidedWithPaddle()) {
      this.ball.bottomAction = this.ball.increment;
    }
    if (this.hasColidedWithBottom()) {
      this.gameStatus = "over";
      this.ball.bottomAction = this.ball.increment;
    }
  }

  startGame() {
    this.checkColision();
    this.ball.move();
    return this;
  }
}
