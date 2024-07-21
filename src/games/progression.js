import { getRandomInt, startBrainGame } from '../index.js';

const rules = ['What number is missing in the progression?', 'Integer'];

const generateArithmeticProgression = (length, start, step) => {
  const progression = [];
  let currentlem = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentlem);
    currentlem += step;
  }

  return progression;
};

const generateDataProgression = (length, start, step) => {
  const progression = generateArithmeticProgression(length, start, step);
  const positionSectetValue = getRandomInt(length) - 1;

  const answer = progression[positionSectetValue].toString();

  progression[positionSectetValue] = '..';

  let question = '';
  /* eslint-disable-next-line */
  for (const value of progression) {
    question = `${question} ${value}`;
  }

  return [question, answer];
};

const prepareDataProgression = () => {
  const roundCount = 3;
  const minLengthProgression = 5;
  const maxNumber = 5;
  const data = [];

  for (let i = 0; i < roundCount; i += 1) {
    const lengthProgression = getRandomInt(maxNumber) + minLengthProgression;
    const start = getRandomInt(maxNumber);
    const step = getRandomInt(maxNumber);

    data.push(generateDataProgression(lengthProgression, start, step));
  }

  return data;
};

const data = prepareDataProgression();

export default startBrainGame(rules, data);
