import {
  askUserName,
  getUserAnswer,
  greetingsBeforeGame,
  greetingsUser,
  messageCorrectAnswer,
  messageLossGame,
  messageSuccessfulGame,
} from './common.js';

export const isEven = (number) => number % 2 === 0;

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const generateQuestion = (maxNumber) => {
  const currentNumber = getRandomInt(maxNumber);
  console.log(`Question: ${currentNumber}`);
  return currentNumber;
};

export const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

export const checkUserAnswer = (number, userAnswer, correctAnswer) => {
  const answer = ['yes', 'no'];

  if (!answer.includes(userAnswer)) {
    return false;
  }

  return userAnswer === correctAnswer;
};

export const messageUncorrectAnswer = (userAnswer, correctAnswer, userName = 'Player') => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  messageLossGame(userName);
};

export const startGameBrainEven = (roundCount, maxNumber) => {
  if (roundCount <= 0) {
    console.log('Incorrect round counter.');
    return;
  }

  greetingsBeforeGame();
  const userName = askUserName();
  greetingsUser(userName);
  console.log("Answer 'yes' if number even otherwise answer 'no'.");

  for (let i = 0; i < roundCount; i += 1) {
    const question = generateQuestion(maxNumber);
    const correctAnswer = getCorrectAnswer(question);
    const userAnswer = getUserAnswer();
    const isWin = checkUserAnswer(question, userAnswer, correctAnswer);

    if (isWin) {
      messageCorrectAnswer();
    } else {
      messageUncorrectAnswer(userAnswer, correctAnswer, userName);
      return;
    }
  }

  messageSuccessfulGame(userName);
};
