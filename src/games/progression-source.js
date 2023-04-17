// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';


function gameData() {
  const arg1 = getRandomNumber(-10, 10);
  const arg2 = getRandomNumber(-10, 10);

  const question = `${arg1} ${arg2}`;

  const result = () => {
//    if (`${oper}` === '+') {
//      return String(arg1 + arg2);
//    } if (`${oper}` === '-') {
//      return String(arg1 - arg2);
//    }
//    return String(arg1 * arg2);
  };
  return [question, result()];
}

const rules = 'What number is missing in the progression?';

export default game(gameData, rules);
