// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';

function gameData() {
  let arg1 = getRandomNumber(0, 10);
  const delta = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const randomIndexMass = getRandomNumber(1, length - 1);
  // для отладки console.log(`randomIndexMass ${randomIndexMass}`);
  const startArg = arg1;

  const mass = [];
  for (let i = 0; i <= length; i += 1) {
    mass.push(arg1);
    arg1 += delta;
  }
  mass[randomIndexMass] = '..';

  let question = ' ';
  for (let j = 0; j < length; j += 1) {
    question += `${mass[j]} `;
  }

  const result = () => String(startArg + delta * randomIndexMass);
  return [question, result()];
}

const rules = 'What number is missing in the progression?';

export default game(gameData, rules);
