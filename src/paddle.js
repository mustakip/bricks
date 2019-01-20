class Paddle {
  constructor(width, height, left, bottom) {
    this.width = width;
    this.height = height;
    this.position = {
      left: left,
      bottom: bottom
    };
  }
  moveRight() {
    this.position.left += 10;
  }
  moveLeft() {
    this.position.left -= 10;
  }
  checkColision(ballVelocity, ballPosition, ballDimensions) {
    let {xCoOrdinate, yCoOrdinate} = ballPosition;
    let {width} = ballDimensions;
    if (
      this.isAtHeightOfPaddle(yCoOrdinate) &&
      this.isOnThePaddle(xCoOrdinate, width)
    ) {
      ballVelocity.y = ballVelocity.y * -1;
    }
    return ballVelocity;
  }
  isAtHeightOfPaddle(yCoOrdinate) {
    let paddleHeight = this.position.bottom + this.height;
    return yCoOrdinate <= paddleHeight;
  }
  isOnThePaddle(xCoOrdinate, ballWidth) {
    let ballLeft = xCoOrdinate + ballWidth / 2;
    let isWithinLeftSide = ballLeft >= this.position.left;
    let isWithinRightSide = ballLeft <= this.position.left + this.width;
    return isWithinLeftSide && isWithinRightSide;
  }
}
