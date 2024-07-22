import {
  startBrainGame,
  getRandomInt,
  maxNumber,
} from '../index.js';

const rules = ['Answer "yes" if the number is even, otherwise answer "no".', 'yes/no'];

const isEven = (number) => number % 2 === 0;

export const generateDataEven = () => {
  const question = getRandomInt(maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startBrainGame(rules, 'even');
