import _ from 'lodash';
import {
  getRandomInt,
  maxNumber,
  startBrainGame,
} from '../index.js';

const rules = ['What is the result of the expression?', 'Integer'];

const generateOperation = () => {
  const operations = ['+', '-', '*'];
  return _.sample(operations);
};

export const generateDataCalc = () => {
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

export default () => startBrainGame(rules, 'calc');
