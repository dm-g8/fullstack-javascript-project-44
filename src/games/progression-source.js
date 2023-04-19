// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';


function gameData() {
  let arg1 = getRandomNumber(-10, 10);
  const delta = getRandomNumber(-10, 10);
  const length = getRandomNumber(5, 10);
  const randomPlace = getRandomNumber(1, length);



  let question = `${arg1} `;

  for (let i = 1; i <= length; i += 1) {
    if (i = randomPlace) {
      arg1 = arg1 + delta;
      question = question + `.. `;
    } else {
      arg1 = arg1 + delta;
      question = question + `${arg1} `;
    };
  };

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
