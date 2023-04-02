// импорт библиотеки readline-sync из ранее установленной через npm istall
import readlineSync from 'readline-sync';

// генератор случайных чисел из диапазона от min до max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const brainEven = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const rand = getRandomNumber(-100, 100);
    console.log(`Question: ${rand}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && rand % 2 === 0) || (answer === 'no' && rand % 2 !== 0)) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
