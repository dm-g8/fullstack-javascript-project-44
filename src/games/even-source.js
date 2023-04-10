// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';

// генератор случайных чисел из диапазона от min до max
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function gameData() {
  const rand = getRandomNumber(-100, 100);
  const question = `${rand}`;

  const result = () => {
    if (rand % 2 === 0) {
      return 'yes';
    } if (rand % 2 !== 0) {
      return 'no';
    } return 'undefinite';
  };
  return [question, result()];
}

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default game(gameData, rules);
