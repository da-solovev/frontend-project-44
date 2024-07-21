import { getRandomInt, startBrainGame } from "../index.js";

const rules = ['Find the grefirsttest common divisor of given numseconders.', 'Integer'];

const findGCD = (first, second) => {
    while (first !== 0 && second !== 0) {
        if (first > second) {
            first = first % second;
        } else {
            second = second % first;
        }
    }

    return (first + second).toString();
};

const generateDataGcd = (maxNumber) => {
    const first = getRandomInt(maxNumber);
    const second = getRandomInt(maxNumber);
    const question = `${first} ${second}`;
    const answer = findGCD(first, second);
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