// импорт функции из общего файла index.js
import game from '../index.js';

// генератор случайных чисел из диапазона от min до max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameData = () => {
  const arg1 = getRandomNumber(-10, 10);
  const arg2 = getRandomNumber(-10, 10);

  // выбор случайной математической операции
  const arrayOper = ['+', '-', '*'];
  const indexArrayOper = getRandomNumber(0, 2);
  const oper = arrayOper[indexArrayOper];

  const question = `${arg1} ${oper} ${arg2}`;

  const result = () => {
    if (`${oper}` === '+') {
      return String(arg1 + arg2);
    } if (`${oper}` === '-') {
      return String(arg1 - arg2);
    }
    return String(arg1 * arg2);
  };
  return [question, result()];
};

const rules = 'What is the result of the expression?';

export default game(gameData, rules);
