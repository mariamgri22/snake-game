function checkCollision(position) {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === position.x && snake[i].y === position.y) return true;
  }
  return false;
}

function generateFood() {
  let newFood, onSnake;
  do {
    onSnake = false;
    newFood = {
      x: Math.floor(Math.random() * TILE_COUNT_X),
      y: Math.floor(Math.random() * TILE_COUNT_Y)
    };
    for (let segment of snake) {
      if (segment.x === newFood.x && segment.y === newFood.y) {
        onSnake = true;
        break;
      }
    }
  } while (onSnake);
  food = newFood;
}
