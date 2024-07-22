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

export const checkCorrectUserAnswer = (typeCheck, userAnswer) => {
  if (typeCheck === 'yes/no') {
    const answer = ['yes', 'no'];
    return answer.includes(userAnswer);
  }
  if (typeCheck === 'Integer') {
    const userAnswerToInt = parseInt(userAnswer, 10);
    return Number.isInteger(userAnswerToInt);
  }

  return false;
};

export const showMessageToLossGame = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

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

export const startBrainGame = (rules, nameGame) => {
  const [textRules, typeCheck] = rules;

  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(textRules);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateQuestion(nameGame);

    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (!checkCorrectUserAnswer(typeCheck, userAnswer)) {
      showMessageToLossGame(userName, userAnswer, correctAnswer);
      return;
    }

    const isWin = checkAnswerToQuestion(userAnswer, correctAnswer);
    if (isWin) {
      console.log('Correct!');
    } else {
      showMessageToLossGame(userName, userAnswer, correctAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
