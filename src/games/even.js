import {
  startBrainGame,
  getRandomInt,
  maxNumber,
} from '../index.js';

const nameGame = 'even';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const generateDataEven = () => {
  const question = getRandomInt(maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startBrainGame(nameGame, description);
