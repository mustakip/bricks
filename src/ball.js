class Ball {
  constructor(radius, left, bottom, speed) {
    this.position = {
      xCoOrdinate: left,
      yCoOrdinate: bottom
    };
    this.dimensions = {
      width: radius * 2,
      height: radius * 2
    };
    this.velocity = {
      x: speed,
      y: speed
    };
  }

  move() {
    this.position.xCoOrdinate += this.velocity.x;
    this.position.yCoOrdinate += this.velocity.y;
  }
}
