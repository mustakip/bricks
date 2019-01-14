class Game {
  constructor(wall, paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
    this.wall = wall;
    // this.height = height;
    // this.width = width;
    this.gameStatus = "continue";
  }

  // hasColidedWithVerticalWalls() {
  //   return this.hasColidedWithLeft() || this.hasColidedWithRight();
  // }

  // hasColidedWithTopOrPaddle() {
  //   return this.hascolidedWithPaddle() || this.hasColidedWithTop();
  // }
  // hasColidedWithTop() {
  //   return this.ball.bottom + this.ball.height >= this.height;
  // }
  // hasColidedWithBottom() {
  //   return this.ball.bottom <= 0;
  // }
  // hasColidedWithRight() {
  //   return this.ball.left + this.ball.width >= this.width;
  // }
  // hasColidedWithLeft() {
  //   return this.ball.left <= 0;
  // }
  // hascolidedWithPaddle() {
  //   return this.isAtHeightOfPaddle() && this.isOnThePaddle();
  // }
  // isAtHeightOfPaddle() {
  //   let paddleHeight = this.paddle.bottom + this.paddle.height;
  //   return this.ball.bottom <= paddleHeight;
  // }
  // isOnThePaddle() {
  //   let ballLeft = this.ball.left + this.ball.width / 2;
  //   let isWithinLeftSide = ballLeft >= this.paddle.left;
  //   let isWithinRightSide = ballLeft <= this.paddle.left + this.paddle.width;
  //   return isWithinLeftSide && isWithinRightSide;
  // }
  isPaddleInsideLeft() {
    return this.paddle.position.left > 0;
  }
  isPaddleInsideRight() {
    return (
      this.paddle.position.left <
      this.wall.rightWallPosition - this.paddle.width
    );
  }

  checkBallWallColision() {
    let {velocity, position, dimensions} = this.ball;
    let ballVelocity = this.wall.checkColision(velocity, position, dimensions);
    this.ball.velocity = ballVelocity;
  }

  checkBallPaddleColision() {
    let {velocity, position, dimensions} = this.ball;
    let ballVelocity = this.paddle.checkColision(
      velocity,
      position,
      dimensions
    );
    this.ball.velocity = ballVelocity;
  }

  checkBallBottomColision() {
    let {position} = this.ball;
    let gameStatus = this.wall.checkBottomWallColision(position);
    this.gameStatus = gameStatus;
  }

  // if (this.hasColidedWithVerticalWalls()) {
  //   this.ball.toggleLeftAction();
  // }
  // if (this.hasColidedWithTopOrPaddle()) {
  //   this.ball.toggleBottomAction();
  // }
  // if (this.hasColidedWithBottom()) {
  //   this.gameStatus = "over";
  //   this.ball.toggleBottomAction();
  // }

  checkColision() {
    this.checkBallPaddleColision();
    this.checkBallWallColision();
    this.checkBallBottomColision();
  }

  startGame() {
    console.log(this.ball);
    console.log(this.paddle);
    console.log(this);
    this.checkColision();
    this.ball.move();
    return this;
  }
}
