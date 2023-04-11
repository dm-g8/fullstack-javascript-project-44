// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';

function gameData() {
  const arg1 = getRandomNumber(-100, 100);
  const arg2 = getRandomNumber(-100, 100);
  const question = `${arg1} ${arg2}`;
  
  const result = () => {
    };
  return [question, result()];
  }
  
  const rules = 'Find the greatest common divisor of given numbers.';
  
  export default game(gameData, rules);



//  const result = () => {
//    if (`${oper}` === '+') {
//      return String(arg1 + arg2);
//    } if (`${oper}` === '-') {
//      return String(arg1 - arg2);
//    }
//    return String(arg1 * arg2);
//  };
//  return [question, result()];
// }