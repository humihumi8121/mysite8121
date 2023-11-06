document.addEventListener('DOMContentLoaded', () => {
  const words = ['30分残業する', '帰る', '一服する', '1時間残業する', '覚悟を決める', '逃げる'];
  const wordDisplay = document.getElementById('wordDisplay');
  const rollButton = document.getElementById('rollButton');

  rollButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.textContent = words[randomIndex];
  });
});