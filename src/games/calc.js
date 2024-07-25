import generateRandomNumber from '../helpers.js';
import {
  maxNumber,
  minNumber,
  startBrainGame,
} from '../index.js';

const description = 'What is the result of the expression?';

const calculateExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

export const generateQuestionCalc = () => {
  const operations = ['+', '-', '*'];
  const startIndex = 0;
  const endIndex = 2;
  const randomIndex = generateRandomNumber(startIndex, endIndex);

  const operation = operations[randomIndex];
  const number1 = generateRandomNumber(minNumber, maxNumber);
  const number2 = generateRandomNumber(minNumber, maxNumber);

  const question = `${number1} ${operation} ${number2}`;
  const answer = calculateExpression(number1, number2, operation).toString();

  return [question, answer];
};

export default () => startBrainGame(generateQuestionCalc, description);
