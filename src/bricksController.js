const addPxSuffix = function(value) {
  return value + 'px';
};

const getMainDiv = function(document) {
  return document.getElementById('screen');
};

const getPaddleDiv = function(document) {
  return document.getElementById('paddle1');
};

const getBallDiv = function(document) {
  return document.getElementById('ball1');
};

const getStartButton = function(document) {
  return document.getElementById('startButton');
};

const createDiv = function(document) {
  return document.createElement('div');
};

const createPaddle = function(document) {
  let mainDiv = getMainDiv(document);
  let paddleDiv = createDiv(document);
  paddleDiv.id = 'paddle1';
  paddleDiv.className = 'paddle';
  mainDiv.appendChild(paddleDiv);
};

const createBall = function(document) {
  let mainDiv = getMainDiv(document);
  let ballDiv = createDiv(document);
  ballDiv.id = 'ball1';
  ballDiv.className = 'ball';
  mainDiv.appendChild(ballDiv);
};

const drawPaddle = function(paddle) {
  let paddleDiv = getPaddleDiv(document);
  paddleDiv.style.width = addPxSuffix(paddle.width);
  paddleDiv.style.height = addPxSuffix(paddle.height);
  paddleDiv.style.left = addPxSuffix(paddle.position.left);
  paddleDiv.style.bottom = addPxSuffix(paddle.position.bottom);
};
const drawBall = function(ball) {
  let ballDiv = getBallDiv(document);
  ballDiv.style.width = addPxSuffix(ball.width);
  ballDiv.style.height = addPxSuffix(ball.height);
  ballDiv.style.left = addPxSuffix(ball.position.xCoOrdinate);
  ballDiv.style.bottom = addPxSuffix(ball.position.yCoOrdinate);
};

const handleKeypress = function(game) {
  if (event.key == 'ArrowRight' && game.isPaddleInsideRight()) {
    game.paddle.moveRight();
  }
  if (event.key == 'ArrowLeft' && game.isPaddleInsideLeft()) {
    game.paddle.moveLeft();
  }
  drawPaddle(game.paddle);
};

const startGame = function(document, game) {
  getMainDiv(document).focus();
  let intervalId = setInterval(() => {
    game.startGame();
    drawBall(game.ball);

    if (game.gameStatus == 'over') {
      alert('game Over');
      clearInterval(intervalId);
    }
  }, 20);
};

const applyEventListeners = function(document, game) {
  let main = getMainDiv(document);
  main.onkeydown = handleKeypress.bind(null, game);
  let startButton = getStartButton(document);
  startButton.onclick = startGame.bind(null, document, game);
};

const createGame = function(document) {
  let wall = new Wall(960, 700);
  let paddle = new Paddle(120, 20, 430, 5);
  let ball = new Ball(15, 465, 50, 5);
  let game = new Game(wall, paddle, ball);
  createPaddle(document);
  createBall(document);
  applyEventListeners(document, game);
};

const initialize = function() {
  createGame(document);
};

window.onload = initialize;
