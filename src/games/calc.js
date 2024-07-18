import _ from 'lodash';
import { getRandomInt, startBrainGame } from '../index.js';

const rules = ['What is the result of the expression?', 'Integer'];

const generateOperation = () => {
  const operations = ['+', '-', '*'];
  return _.sample(operations);
};

const generateDataCalc = (maxNumber) => {
  const operation = generateOperation();
  const first = getRandomInt(maxNumber);
  const second = getRandomInt(maxNumber);
  const question = `${first} ${operation} ${second}`;

  switch (operation) {
    case '+':
      return [question, (first + second).toString()];
    case '-':
      return [question, (first - second).toString()];
    case '*':
      return [question, (first * second).toString()];
    default:
      return [];
  }
};

const prepareDataCalc = () => {
  const roundCount = 3;
  const maxNumber = 15;
  const data = [];

  for (let i = 0; i < roundCount; i += 1) {
    data.push(generateDataCalc(maxNumber));
  }

  return data;
};

const data = prepareDataCalc();

export default startBrainGame(rules, data);
