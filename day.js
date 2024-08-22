document.addEventListener('DOMContentLoaded', () => {
  const queryParams = new URLSearchParams(window.location.search);
  const dayNumber = queryParams.get('day') || 1;
  document.getElementById('dayTitle').textContent = `Day ${dayNumber}`;

  let lastScore = parseInt(localStorage.getItem(`day${dayNumber}LastScore`)) || 0;
  let bestScore = parseInt(localStorage.getItem(`day${dayNumber}BestScore`)) || 0;
  let currentScore = 0;

  document.getElementById('lastScore').textContent = lastScore;
  document.getElementById('bestScore').textContent = bestScore;
  document.getElementById('currentScore').textContent = currentScore;

  const questions = questionsData[dayNumber];
  const questionsContainer = document.getElementById('questionsContainer');

  questions.forEach((q, index) => {
      const questionElement = document.createElement('div');
      questionElement.className = 'question';
      questionElement.innerHTML = `<p>${q.question}</p>`;
      q.options.forEach((option, i) => {
          const optionElement = document.createElement('button');
          optionElement.textContent = option;
          optionElement.addEventListener('click', () => {
              if (i === q.answer) {
                  optionElement.style.backgroundColor = 'green';
                  currentScore++;
                  showResult('Correct', 'green', q.explanation, questionElement);
              } else {
                  optionElement.style.backgroundColor = 'red';
                  showResult('Incorrect', 'red', q.explanation, questionElement);
              }
              document.getElementById('currentScore').textContent = currentScore;
              updateScores();
          });
          questionElement.appendChild(optionElement);
      });
      questionsContainer.appendChild(questionElement);
  });

  function updateScores() {
      document.getElementById('currentScore').textContent = currentScore;
      localStorage.setItem(`day${dayNumber}LastScore`, currentScore);
      if (currentScore > bestScore) {
          bestScore = currentScore;
          localStorage.setItem(`day${dayNumber}BestScore`, bestScore);
      }
  }

  function showResult(message, color, explanation, questionElement) {
      const resultElement = document.createElement('div');
      resultElement.style.color = color;
      resultElement.textContent = message;
      questionElement.appendChild(resultElement);
      const explanationElement = document.createElement('p');
      explanationElement.style.color = 'black';
      explanationElement.textContent = explanation;
      questionElement.appendChild(explanationElement);
  }

  let idleTimeout;
  function resetIdleTimer() {
      clearTimeout(idleTimeout);
      document.getElementById('idleGifContainer').style.display = 'none';
      idleTimeout = setTimeout(() => {
          document.getElementById('idleGifContainer').style.display = 'block';
      }, 10000); // 30 seconds
  }

  document.addEventListener('mousemove', resetIdleTimer);
  document.addEventListener('keydown', resetIdleTimer);
  resetIdleTimer();

  document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'home.html';
  });

  // Fix for logout button issue
  document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('username');
      window.location.href = 'login.html';
  });
});
