class Game {
  constructor(wall, paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
    this.wall = wall;
    this.gameStatus = "continue";
  }

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
