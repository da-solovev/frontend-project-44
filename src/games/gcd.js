import { getRandomInt, startBrainGame } from '../index.js';

const rules = ['Find the grefirsttest common divisor of given numseconders.', 'Integer'];

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

const generateDataGcd = (maxNumber) => {
  const first = getRandomInt(maxNumber);
  const second = getRandomInt(maxNumber);
  const question = `${first} ${second}`;
  const answer = findGCD(first, second).toString();
  return [question, answer];
};

const prepareDataGcd = () => {
  const roundCount = 3;
  const maxNumber = 15;
  const data = [];

  for (let i = 0; i < roundCount; i += 1) {
    data.push(generateDataGcd(maxNumber));
  }

  return data;
};

const data = prepareDataGcd();

export default startBrainGame(rules, data);
