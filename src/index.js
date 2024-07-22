import readlineSync from 'readline-sync';
import { generateDataEven } from './games/even.js';
import { generateDataGcd } from './games/gcd.js';
import { generateDataPrime } from './games/prime.js';
import { generateDataProgression, generateParamsForProgression } from './games/progression.js';
import { generateDataCalc } from './games/calc.js';

export const roundCount = 3;
export const maxNumber = 15;

export const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswerToQuestion = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const generateQuestion = (nameGame) => {
  switch (nameGame) {
    case 'even':
      return generateDataEven(maxNumber);
    case 'gcd':
      return generateDataGcd(maxNumber);
    case 'prime':
      return generateDataPrime(maxNumber);
    case 'progression': {
      const params = generateParamsForProgression();
      const [length, start, step] = params;
      return generateDataProgression(length, start, step);
    }
    case 'calc':
      return generateDataCalc(maxNumber);
    default: return [];
  }
};

export const startBrainGame = (nameGame, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateQuestion(nameGame);

    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    const isWin = checkAnswerToQuestion(userAnswer, correctAnswer);
    if (isWin) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
