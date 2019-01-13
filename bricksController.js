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

const getStartButton = function(document) {
  return document.getElementById("startButton");
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

const draw = function(div, classObject) {
  div.style.width = addPxSuffix(classObject.width);
  div.style.height = addPxSuffix(classObject.height);
  div.style.left = addPxSuffix(classObject.left);
  div.style.bottom = addPxSuffix(classObject.bottom);
};

const handleKeypress = function(document, game) {
  console.log(game.paddle);
  // console.log(game.isPaddleInBorders());
  let paddleDiv = getPaddleDiv(document);
  if (event.key == "ArrowRight" && game.isPaddleInsideRight()) {
    game.paddle.moveRight();
    draw(paddleDiv, game.paddle);
  }
  if (event.key == "ArrowLeft" && game.isPaddleInsideLeft()) {
    game.paddle.moveLeft();
    draw(paddleDiv, game.paddle);
  }
};

const startGame = function(document, game) {
  getMainDiv(document).focus();
  let balldiv = getBallDiv(document);
  let intervalId = setInterval(() => {
    let newGame = game.startGame();
    draw(balldiv, newGame.ball);

    if (newGame.gameStatus == "over") {
      clearInterval(intervalId);
      alert("gameover");
    }
  }, 30);
};

const initialize = function() {
  let main = getMainDiv(document);
  let paddle = new Paddle(120, 20, 430, 5);
  let ball = new Ball(15, 465, 50);
  let game = new Game(960, 700, paddle, ball);
  main.onkeydown = handleKeypress.bind(null, document, game);
  createPaddle(document);
  createBall(document);
    let startButton = getStartButton(document);
    startButton.onclick = startGame.bind(null, document, game);
};

window.onload = initialize;
