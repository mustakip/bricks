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
      let ball = new Ball(20, 100, 100, 5);
      expect(ball.increment(6)).to.equals(11);
      expect(ball.increment(-10)).to.equals(-5);
    });
  });
  describe("decrement", function() {
    it("should increment the given input value by 5", function() {
      let ball = new Ball(20, 100, 100, 5);
      expect(ball.decrement(6)).to.equals(1);
      expect(ball.decrement(-10)).to.equals(-15);
    });
  });
  describe("move", function() {
    it("topAction --> 'increment' bottomAction --> 'increment'", function() {
      let ball = new Ball(20, 100, 100,5);
      ball.move();
      expect(ball.left).to.equals(105);
      expect(ball.bottom).equals(105);
    });
    it("topAction --> 'decrement' bottomAction --> 'decrement'", function() {
      let ball = new Ball(20, 100, 100,5);
      ball.leftAction = ball.decrement;
      ball.bottomAction = ball.decrement;
      console.log(ball);
      ball.move();
      expect(ball.left).to.equals(95);
      expect(ball.bottom).equals(95);
    });
    it("topAction --> 'increment' bottomAction --> 'decrement'", function() {
      let ball = new Ball(20, 100, 100,5);
      ball.leftAction = ball.increment;
      ball.bottomAction = ball.decrement;
      ball.move();
      expect(ball.left).to.equals(105);
      expect(ball.bottom).equals(95);
    });
    it("topAction --> 'decrement' bottomAction --> 'increment'", function() {
      let ball = new Ball(20, 100, 100,5);
      ball.leftAction = ball.decrement;
      ball.bottomAction = ball.increment;
      ball.move();
      expect(ball.left).to.equals(95);
      expect(ball.bottom).equals(105);
    });
  });
});

describe("game", function() {
  describe("hasColidedWithTop", function() {
    it("should return false when the ball is not in contact with top wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 100, 100);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithTop()).to.equals(false);
    });
    it("should return true when the ball is in contact with top wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 100, 960);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithTop()).to.equals(true);
    });
  });
  describe("hasColidedWithLeft", function() {
    it("should return false when the ball is not in contact with left wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 100, 100);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithLeft()).to.equals(false);
    });
    it("should return true when the ball is in contact with left wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 0, 100);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithLeft()).to.equals(true);
    });
  });
  describe("hasColidedWithBottom", function() {
    it("should return false when the ball is not in contact with bottom wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 100, 100);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithBottom()).to.equals(false);
    });
    it("should return true when the ball is in contact with bottom wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 100, 0);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithBottom()).to.equals(true);
    });
  });
  describe("hasColidedWithRight", function() {
    it("should return false when the ball is not in contact with right wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 100, 100);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithRight()).to.equals(false);
    });
    it("should return true when the ball is in contact with right wall", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 960, 100);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hasColidedWithRight()).to.equals(true);
    });
  });
  describe("hasColidedWithPaddle", function() {
    it("should return false when the ball is not in contact with the paddle", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 100, 100);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hascolidedWithPaddle()).to.equals(false);
    });
    it("should return true when the ball is in contact with the paddle", function() {
      let paddle = new Paddle(100, 20, 430, 5);
      let ball = new Ball(20, 430, 25);
      let game = new Game(960, 700, paddle, ball);

      expect(game.hascolidedWithPaddle()).to.equals(true);
    });
  });
});
