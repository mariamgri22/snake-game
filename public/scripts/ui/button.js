function setupButtons({ startGame, pauseGame, resetGame, restartGame }) {
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');
    const restartBtn = document.getElementById('restart-btn');
  
    startBtn.addEventListener('click', () => {
      startGame();
      startBtn.textContent = 'Restart';
    });
  
    pauseBtn.addEventListener('click', () => {
      pauseGame();
      pauseBtn.textContent = pauseBtn.textContent === 'Pause' ? 'Resume' : 'Pause';
    });
  
    resetBtn.addEventListener('click', resetGame);
    restartBtn.addEventListener('click', restartGame);
  }
  