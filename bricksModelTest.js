const expect = chai.expect;

describe("paddle", function() {
  it("should increment the property left if paddle.moveRight is ran", function() {
    let paddle = new Paddle(100, 15, 200, 5);
    paddle.moveRight();
    expect(paddle)
      .to.have.property("left")
      .equals(220);
  });
  it("should decrement the property left if paddle.moveLeft is ran", function() {
    let paddle = new Paddle(100, 15, 200, 5);
    paddle.moveLeft();
    expect(paddle)
      .to.have.property("left")
      .equals(180);
  });
});
