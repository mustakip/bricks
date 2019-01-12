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


