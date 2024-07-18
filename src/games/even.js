import { startBrainGame } from '../index.js';

const rules = ["Answer 'yes' if number even otherwise answer 'no'.", 'yes/no'];

const isEven = (number) => number % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const generateDataEven = (maxNumber) => {
  const question = getRandomInt(maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const prepareDataEven = () => {
  const roundCount = 3;
  const maxNumber = 15;
  const data = [];

  for (let i = 0; i < roundCount; i += 1) {
    data.push(generateDataEven(maxNumber));
  }

  return data;
};

const data = prepareDataEven();

export default startBrainGame(rules, data);
