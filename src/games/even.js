import {
  startBrainGame,
  getRandomInt,
  roundCount,
  maxNumber,
} from '../index.js';

const rules = ['Answer "yes" if the number is even, otherwise answer "no".', 'yes/no'];

const isEven = (number) => number % 2 === 0;

const generateDataEven = () => {
  const question = getRandomInt(maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const prepareDataEven = () => {
  const data = [];

  for (let i = 0; i < roundCount; i += 1) {
    data.push(generateDataEven(maxNumber));
  }

  return data;
};

const data = prepareDataEven();

export default () => startBrainGame(rules, data);
