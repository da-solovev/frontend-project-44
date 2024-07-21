import { getRandomInt, startBrainGame } from '../index.js';

const rules = ["Answer 'yes' if given number is prime. Otherwise answer 'no'.", 'yes/no'];

const isPrimeNumber = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateDataPrime = (maxNumber) => {
  const question = getRandomInt(maxNumber);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const prepareDataPrime = () => {
  const roundCount = 3;
  const maxNumber = 15;
  const data = [];

  for (let i = 0; i < roundCount; i += 1) {
    data.push(generateDataPrime(maxNumber));
  }

  return data;
};

const data = prepareDataPrime();

export default startBrainGame(rules, data);
