import generateRandomNumber from '../helpers.js';
import {
  startBrainGame,
  maxNumber,
  minNumber,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const generateQuestionEven = () => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startBrainGame(generateQuestionEven, description);
