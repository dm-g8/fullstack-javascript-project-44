// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';


function gameData() {
  let arg1 = getRandomNumber(-10, 10);
  const delta = getRandomNumber(-10, 10);
  const length = getRandomNumber(5, 10);
  const randomPlace = getRandomNumber(1, length);
  console.log(randomPlace);
  const startArg = arg1;

  let mass = [];
  for (let i = 1; i <= length; i += 1) {
    mass.push(arg1);
    arg1 += delta;
  }
  mass[randomPlace] = '..';

  let question = ' ';
  for (let j = 1; j < length; j += 1) {
    question += `${mass[j]} `;
  };

  const result = () => {
  return String(startArg + delta * randomPlace);
};
  return [question, result()];
}

const rules = 'What number is missing in the progression?';

export default game(gameData, rules);
