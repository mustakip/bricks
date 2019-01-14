class Game {
  constructor(width, height, paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
    this.height = height;
    this.width = width;
    this.gameStatus = "continue";
  }

  hasColidedWithVerticalWalls() {
    return this.hasColidedWithLeft() || this.hasColidedWithRight();
  }

  hasColidedWithTopOrPaddle() {
    return this.hascolidedWithPaddle() || this.hasColidedWithTop();
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
    if (this.hasColidedWithVerticalWalls()) {
      this.ball.toggleLeftAction();
    }
    if (this.hasColidedWithTopOrPaddle()) {
      this.ball.toggleBottomAction();
    }
    if (this.hasColidedWithBottom()) {
      this.gameStatus = "over";
      this.ball.toggleBottomAction();
    }
  }

  startGame() {
    this.checkColision();
    this.ball.move();
    return this;
  }
}
