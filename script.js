const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const operatorSelect = document.getElementById('operator');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start');
const gameSection = document.getElementById('gameSection');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

let score = 0;
let correctAnswer = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function generateQuestion(operator) {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();

  let questionText;

  switch (operator) {
    case '+':
      questionText = `What is ${num1} + ${num2}?`;
      correctAnswer = num1 + num2;
      break;
    case '-':
      questionText = `What is ${num1} - ${num2}?`;
      correctAnswer = num1 - num2;
      break;
    case '*':
      questionText = `What is ${num1} * ${num2}?`;
      correctAnswer = num1 * num2;
      break;
    case '/':
      
      questionText = `What is ${num1 * num2} / ${num2}?`;
      correctAnswer = num1;
      break;
  }

  questionElement.textContent = questionText;
}

function checkAnswer(userAnswer) {
  return parseFloat(userAnswer) === correctAnswer;
}

function updateScore() {
  scoreElement.textContent = score;
}

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  gameSection.style.display = 'block';

  const initialOperator = operatorSelect.value;
  generateQuestion(initialOperator);
});

submitButton.addEventListener('click', () => {
  const userAnswer = answerElement.value;

  if (checkAnswer(userAnswer)) {
    resultElement.textContent = 'Correct!';
    score += 1;
  } else {
    resultElement.textContent = 'Wrong!';
  }

  generateQuestion(operatorSelect.value);
  updateScore();
  answerElement.value = '';
});

// Initial question
const initialOperator = operatorSelect.value;
generateQuestion(initialOperator);
