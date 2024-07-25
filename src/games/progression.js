import generateRandomNumber from '../helpers.js';
import {
  maxNumber,
  minNumber,
  startBrainGame,
} from '../index.js';

const description = 'What number is missing in the progression?';

const generateArithmeticProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const elem = start + step * i;
    progression.push(elem);
  }

  return progression;
};

export const generateQuestionProgression = () => {
  const minLength = 5;
  const maxLength = 10;

  const length = generateRandomNumber(minLength, maxLength);
  const start = generateRandomNumber(minNumber, maxNumber);
  const step = generateRandomNumber(minNumber, maxNumber);

  const progression = generateArithmeticProgression(length, start, step);

  const startPositionSecret = 0;
  const endPositionSecret = length - 1;
  const positionSecretValue = generateRandomNumber(startPositionSecret, endPositionSecret);

  const answer = progression[positionSecretValue].toString();

  progression[positionSecretValue] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

export default () => startBrainGame(generateQuestionProgression, description);
