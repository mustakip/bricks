class Ball {
  constructor(radius, left, bottom, speed) {
    this.width = radius * 2;
    this.height = radius * 2;
    this.left = left;
    this.bottom = bottom;
    this.leftAction = this.increment;
    this.bottomAction = this.increment;
    this.speed = speed;
  }

  increment(value) {
    return value + this.speed;
  }

  decrement(value) {
    return value - this.speed;
  }

  move() {
    this.left = this.leftAction(this.left);
    this.bottom = this.bottomAction(this.bottom);
  }
}