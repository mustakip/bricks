class Wall {
  constructor(width, height) {
    this.leftWallPosition = 0;
    this.rightWallPosition = width;
    this.bottomWallPosition = 0;
    this.topWallPosition = height;
  }
  hasColidedWithTopWall(yCoOrdinate, height) {
    return yCoOrdinate + height >= this.topWallPosition;
  }
  hasColidedWithBottomWall(yCoOrdinate) {
    return yCoOrdinate <= this.bottomWallPosition;
  }
  hasColidedWithRightWall(xCoOrdinate, width) {
    return xCoOrdinate + width >= this.rightWallPosition;
  }
  hasColidedWithLeftWall(xCoOrdinate) {
    return xCoOrdinate <= this.leftWallPosition;
  }
  hasColidedWithVerticalWalls(xCoOrdinate, width) {
    return (
      this.hasColidedWithLeftWall(xCoOrdinate) ||
      this.hasColidedWithRightWall(xCoOrdinate, width)
    );
  }

  hasColidedWithHorizontalWalls(yCoOrdinate, height) {
    return this.hasColidedWithTopWall(yCoOrdinate, height);
    // this.hasColidedWithBottomWall(yCoOrdinate)
  }
  checkColision(ballVelocity, ballPosition, ballDimensions) {
    let {xCoOrdinate, yCoOrdinate} = ballPosition;
    let {height, width} = ballDimensions;
    if (this.hasColidedWithHorizontalWalls(yCoOrdinate, height)) {
      ballVelocity.y = ballVelocity.y * -1;
    }
    if (this.hasColidedWithVerticalWalls(xCoOrdinate, width)) {
      ballVelocity.x = ballVelocity.x * -1;
    }
    return ballVelocity;
  }
  checkBottomWallColision(ballPosition) {
    let {yCoOrdinate} = ballPosition;
    if (this.hasColidedWithBottomWall(yCoOrdinate)) {
      return "over";
    }
    return "continue";
  }
}
