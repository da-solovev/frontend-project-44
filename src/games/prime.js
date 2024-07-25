import generateRandomNumber from '../helpers.js';
import {
  maxNumber,
  minNumber,
  startBrainGame,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateQuestionPrime = () => {
  const question = generateRandomNumber(minNumber, maxNumber);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startBrainGame(generateQuestionPrime, description);
