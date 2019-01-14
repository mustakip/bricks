class Paddle {
  constructor(width, height, left, bottom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.bottom = bottom;
  }
  moveRight() {
    this.left += 10;
  }
  moveLeft() {
    this.left -= 10;
  }
}
