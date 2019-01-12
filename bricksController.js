const addSuffix = function(value) {
  return value + "px";
};

const createPaddle = function(document) {
  let mainDiv = document.getElementById("screen");
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle1";
  paddleDiv.className = "paddle";
  mainDiv.appendChild(paddleDiv);
};

const drawPaddle = function(paddleDiv, paddle) {
  paddleDiv.style.width = addSuffix(paddle.width);
  paddleDiv.style.height = addSuffix(paddle.height);
  paddleDiv.style.left = addSuffix(paddle.left);
  paddleDiv.style.bottom = addSuffix(paddle.bottom);
};

const handleKeypress = function(paddle) {
  let paddleDiv = document.getElementById("paddle1");
  if (event.key == "ArrowRight") {
    paddle.moveRight();
    drawPaddle(paddleDiv, paddle);
  }
  if (event.key == "ArrowLeft") {
    paddle.moveLeft();
    drawPaddle(paddleDiv, paddle);
  }
};

const initialize = function() {
  let main = document.getElementById("screen");
  main.focus();
  let paddle = new Paddle(100, 15, 430, 3);
  main.onkeydown = handleKeypress.bind(null, paddle);
  createPaddle(document);
};

window.onload = initialize;