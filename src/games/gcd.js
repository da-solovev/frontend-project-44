import generateRandomNumber from '../helpers.js';
import {
  maxNumber,
  minNumber,
  startBrainGame,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (first, second) => {
  let a = first;
  let b = second;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

export const generateQuestionGcd = () => {
  const first = generateRandomNumber(minNumber, maxNumber);
  const second = generateRandomNumber(minNumber, maxNumber);
  const question = `${first} ${second}`;
  const answer = findGCD(first, second).toString();
  return [question, answer];
};

export default () => startBrainGame(generateQuestionGcd, description);
