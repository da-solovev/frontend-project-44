import readlineSync from 'readline-sync';

export const roundsCount = 3;
export const minNumber = 1;
export const maxNumber = 5;

export const startBrainGame = (generateQuestion, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isWin = userAnswer === correctAnswer;
    if (!isWin) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
