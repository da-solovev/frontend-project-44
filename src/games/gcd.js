import {
  getRandomInt,
  maxNumber,
  startBrainGame,
} from '../index.js';

const nameGame = 'gcd';
const description = 'Find the greatest common divisor of given numbers.';
const typeValidation = 'Integer';

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

export const generateDataGcd = () => {
  const first = getRandomInt(maxNumber);
  const second = getRandomInt(maxNumber);
  const question = `${first} ${second}`;
  const answer = findGCD(first, second).toString();
  return [question, answer];
};

export default () => startBrainGame(nameGame, description, typeValidation);
