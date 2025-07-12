
canvas.width = GRID_SIZE * TILE_COUNT_X;
canvas.height = GRID_SIZE * TILE_COUNT_Y;
draw();
generateFood();

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (direction !== 'down') nextDirection = 'up';
      break;
    case 'ArrowDown':
      if (direction !== 'up') nextDirection = 'down';
      break;
    case 'ArrowLeft':
      if (direction !== 'right') nextDirection = 'left';
      break;
    case 'ArrowRight':
      if (direction !== 'left') nextDirection = 'right';
      break;
  }
});


setupButtons({
    startGame: initGame,
    pauseGame: () => {
      if (gameRunning) {
        clearInterval(gameLoop);
        gameRunning = false;
      } else {
        gameRunning = true;
        gameLoop = setInterval(update, 1000 / gameSpeed);
      }
    },
    resetGame: initGame,
    restartGame: initGame
  });