class Ball {
  constructor(radius, left, bottom, speed) {
    // this.width = radius * 2;
    // this.height = radius * 2;
    // this.left = left;
    // this.bottom = bottom;
    // this.speed = speed;
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
    // this.actions = [this.increment, this.decrement];
    // this.getLeftAction = this.toggle(this.actions);
    // this.getBottomAction = this.toggle(this.actions);
    // this.leftAction = this.increment;
    // this.bottomAction = this.increment;
  }

  // increment(value) {
  //   return value + this.speed;
  // }

  // decrement(value) {
  //   return value - this.speed;
  // }

  toggle(list) {
    let counter = 1;
    return function() {
      let index = counter++ % list.length;
      return list[index];
    };
  }

  toggleLeftAction() {
    this.leftAction = this.getLeftAction();
  }
  toggleBottomAction() {
    this.bottomAction = this.getBottomAction();
  }

  move() {
    this.position.xCoOrdinate += this.velocity.x;
    this.position.yCoOrdinate += this.velocity.y;
  }
}
