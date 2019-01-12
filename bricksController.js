const addPxSuffix = function(value) {
  return value + "px";
};

const getMainDiv = function(document) {
  return document.getElementById("screen");
};

const getPaddleDiv = function(document) {
  return document.getElementById("paddle1");
};

const getBallDiv = function(document) {
  return document.getElementById("ball1");
};

const createDiv = function(document) {
  return document.createElement("div");
};

const createPaddle = function(document) {
  let mainDiv = getMainDiv(document);
  let paddleDiv = createDiv(document);
  paddleDiv.id = "paddle1";
  paddleDiv.className = "paddle";
  mainDiv.appendChild(paddleDiv);
};

const createBall = function(document) {
  let mainDiv = getMainDiv(document);
  let ballDiv = createDiv(document);
  ballDiv.id = "ball1";
  ballDiv.className = "ball";
  mainDiv.appendChild(ballDiv);
};

const drawPaddle = function(paddleDiv, paddle) {
  paddleDiv.style.width = addPxSuffix(paddle.width);
  paddleDiv.style.height = addPxSuffix(paddle.height);
  paddleDiv.style.left = addPxSuffix(paddle.left);
  paddleDiv.style.bottom = addPxSuffix(paddle.bottom);
};

const handleKeypress = function(document, paddle) {
  let paddleDiv = getPaddleDiv(document);
  if (event.key == "ArrowRight") {
    paddle.moveRight();
    drawPaddle(paddleDiv, paddle);
  }
  if (event.key == "ArrowLeft") {
    paddle.moveLeft();
    drawPaddle(paddleDiv, paddle);
  }
};

const moveBall = function(document, ball) {
  ball.move();
  let balldiv = getBallDiv(document);
  drawPaddle(balldiv, ball);
};

const initialize = function() {
  let main = getMainDiv(document);
  main.focus();
  let paddle = new Paddle(100, 15, 430, 3);
  let ball = new Ball(15, 500, 400);
  let game = new Game(960, 700, paddle, ball);
  main.onkeydown = handleKeypress.bind(null, document, paddle);
  createPaddle(document);
  createBall(document);
  setInterval(moveBall.bind(null, document, ball), 500);
};

window.onload = initialize;
