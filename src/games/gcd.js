import {
  getRandomInt,
  maxNumber,
  roundCount,
  startBrainGame,
} from '../index.js';

const rules = ['Find the greatest common divisor of given numbers.', 'Integer'];

const findGCD = (first, second) => {
  let a = first;
  let b = second;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

const generateDataGcd = () => {
  const first = getRandomInt(maxNumber);
  const second = getRandomInt(maxNumber);
  const question = `${first} ${second}`;
  const answer = findGCD(first, second).toString();
  return [question, answer];
};

const prepareDataGcd = () => {
  const data = [];

  for (let i = 0; i < roundCount; i += 1) {
    data.push(generateDataGcd(maxNumber));
  }

  return data;
};

const data = prepareDataGcd();

export default startBrainGame(rules, data);
