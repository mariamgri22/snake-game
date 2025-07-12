const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const gameOverElement = document.getElementById('game-over');

function initGame() {
  snake = [
    { x: 5, y: 7 },
    { x: 4, y: 7 },
    { x: 3, y: 7 }
  ];
  generateFood();
  score = 0;
  direction = 'right';
  nextDirection = 'right';
  scoreElement.textContent = score;
  gameOverElement.style.display = 'none';
  gameRunning = true;

  if (gameLoop) clearInterval(gameLoop);
  gameLoop = setInterval(update, 1000 / gameSpeed);
}

function update() {
  direction = nextDirection;
  const head = { ...snake[0] };
  if (direction === 'up') head.y--;
  else if (direction === 'down') head.y++;
  else if (direction === 'left') head.x--;
  else if (direction === 'right') head.x++;

  if (head.x < 0 || head.y < 0 || head.x >= TILE_COUNT_X || head.y >= TILE_COUNT_Y || checkCollision(head)) {
    gameOver();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreElement.textContent = score;
    generateFood();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.fillStyle = '#0a1929';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#4CAF50';
  for (let segment of snake) {
    ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 1;
    ctx.strokeRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  }

  ctx.fillStyle = '#FF5252';
  ctx.beginPath();
  ctx.arc(food.x * GRID_SIZE + GRID_SIZE / 2, food.y * GRID_SIZE + GRID_SIZE / 2, GRID_SIZE / 2 - 2, 0, Math.PI * 2);
  ctx.fill();
}

function gameOver() {
  gameRunning = false;
  clearInterval(gameLoop);
  finalScoreElement.textContent = score;
  gameOverElement.style.display = 'flex';
}
