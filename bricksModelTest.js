const expect = chai.expect;

describe("paddle", function() {
  it("should increment the property left if paddle.moveRight is ran", function() {
    let paddle = new Paddle(100, 15, 200, 5);
    paddle.moveRight();
    expect(paddle)
      .to.have.property("left")
      .equals(210);
  });
  it("should decrement the property left if paddle.moveLeft is ran", function() {
    let paddle = new Paddle(100, 15, 200, 5);
    paddle.moveLeft();
    expect(paddle)
      .to.have.property("left")
      .equals(190);
  });
});

describe("ball", function() {
  describe("increment", function() {
    it("should increment the given input value by 5", function() {
      let ball = new Ball(20, 100, 100);
      expect(ball.increment(6)).to.equals(11);
      expect(ball.increment(-10)).to.equals(-5);
    });
  });
  describe("decrement", function() {
    it("should increment the given input value by 5", function() {
      let ball = new Ball(20, 100, 100);
      expect(ball.decrement(6)).to.equals(1);
      expect(ball.decrement(-10)).to.equals(-15);
    });
  });
});
