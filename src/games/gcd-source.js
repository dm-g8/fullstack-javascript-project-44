// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';

function gameData() {
  const arg1 = getRandomNumber(-20, 20);
  const arg2 = getRandomNumber(-20, 20);
  const question = `${arg1} ${arg2}`;

  const result = () => {
    // классический алгоритм Евклида
    if (arg1 === arg2) {
      return arg1;
    }
    let number1 = Math.abs(arg1);
    let number2 = Math.abs(arg2);
    while (number1 !== 0 && number2 !== 0) {
      if (number1 > number2) {
        number1 -= number2;
      } else {
        number2 -= number1;
      }
    }
    return String(number1 + number2);
  };
  return [question, result()];
}

const rules = 'Find the greatest common divisor of given numbers.';

export default game(gameData, rules);
