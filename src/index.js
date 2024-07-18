import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswerToQuestion = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const checkCorrectUserAnswer = (typeCheck, userAnswer) => {
  if (typeCheck === 'yes/no') {
    const answer = ['yes', 'no'];
    return answer.includes(userAnswer);
  }
  if (typeCheck === 'Integer') {
    const userAnswerToInt = parseInt(userAnswer, 10);
    return userAnswerToInt.isInteger();
  }

  return false;
};

export const showMessageToLossGame = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const startBrainGame = (rules, data) => {
  const roundCount = 3;
  const [textRules, typeCheck] = rules;

  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(textRules);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = data[i];

    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (!checkCorrectUserAnswer(typeCheck, userAnswer)) {
      showMessageToLossGame(userName, userAnswer, correctAnswer);
      return;
    }

    const isWin = checkAnswerToQuestion(userAnswer, correctAnswer);
    if (isWin) {
      console.log('Correct!');
    } else {
      showMessageToLossGame(userName, userAnswer, correctAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
