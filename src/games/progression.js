import {
  getRandomInt,
  maxNumber,
  startBrainGame,
} from '../index.js';

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

export const generateParamsForProgression = () => {
  const minLength = 5;
  const maxGrowthLength = 5;

  const length = getRandomInt(maxGrowthLength) + minLength;
  const start = getRandomInt(maxNumber);
  const step = getRandomInt(maxNumber);

  return [length, start, step];
};

export const generateDataProgression = (length, start, step) => {
  const progression = generateArithmeticProgression(length, start, step);
  const positionSectetValue = getRandomInt(length) - 1;

  const answer = progression[positionSectetValue].toString();

  progression[positionSectetValue] = '..';

  let question = '';

  for (let i = 0; i < progression.length; i += 1) {
    question = `${question} ${progression[i]}`;
  }

  return [question.trim(), answer];
};

export default () => startBrainGame(rules, 'progression');
