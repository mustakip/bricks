const expect = chai.expect;

describe("paddle", function() {
  it("should increment the property left if paddle.moveRight is ran", function() {
    let paddle = new Paddle(100, 15, 200, 5);
    paddle.moveRight();
    expect(paddle)
      .to.have.property("position")
      .to.have.property("left")
      .equals(210);
  });
  it("should decrement the property left if paddle.moveLeft is ran", function() {
    let paddle = new Paddle(100, 15, 200, 5);
    paddle.moveLeft();
    expect(paddle)
      .to.have.property("position")
      .to.have.property("left")
      .equals(190);
  });
});

describe("ball", function() {
  describe("move", function() {
    it("xCoOrdinate--> 'increment' yCoOrdinate --> 'increment'", function() {
      let ball = new Ball(20, 100, 100, 5);
      ball.move();
      expect(ball.position.xCoOrdinate).to.equals(105);
      expect(ball.position.yCoOrdinate).equals(105);
    });
    it("xCoOrdinate --> 'decrement'yCoOrdinate --> 'decrement'", function() {
      let ball = new Ball(20, 100, 100, 5);
      ball.velocity.x = ball.velocity.x * -1;
      ball.velocity.y = ball.velocity.y * -1;

      console.log(ball);
      ball.move();
      expect(ball.position.xCoOrdinate).to.equals(95);
      expect(ball.position.yCoOrdinate).equals(95);
    });
    it("xCoOrdinate --> 'increment'yCoOrdinate --> 'decrement'", function() {
      let ball = new Ball(20, 100, 100, 5);
      ball.velocity.y = ball.velocity.y * -1;
      ball.move();
      expect(ball.position.xCoOrdinate).to.equals(105);
      expect(ball.position.yCoOrdinate).equals(95);
    });
    it("xCoOrdinate --> 'decrement'yCoOrdinate --> 'increment'", function() {
      let ball = new Ball(20, 100, 100, 5);
      ball.velocity.x = ball.velocity.x * -1;
      ball.move();
      expect(ball.position.xCoOrdinate).to.equals(95);
      expect(ball.position.yCoOrdinate).equals(105);
    });
  });
});
