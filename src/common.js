import readlineSync from 'readline-sync';

export const greetingsBeforeGame = () => {
  console.log('Welcome to the Brain Games!');
};

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const greetingsUser = (userName = 'Player') => {
  console.log(`Hello, ${userName}!`);
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const messageSuccessfulGame = (userName = 'Player') => {
  console.log(`Congratulations, ${userName}!`);
};

export const messageLossGame = (userName = 'Player') => {
  console.log(`Let's try again, ${userName}!`);
};

export const messageCorrectAnswer = () => {
  console.log('Correct!');
};
