import {
  getRandomInt,
  maxNumber,
  startBrainGame,
} from '../index.js';

const nameGame = 'prime';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const typeValidation = 'yes/no';

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

export const generateDataPrime = () => {
  const question = getRandomInt(maxNumber);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startBrainGame(nameGame, description, typeValidation);
