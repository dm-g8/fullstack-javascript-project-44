// импорт функции из общего файла index.js
import game from '../index.js';
// импорт функции генератора случайных чисел из диапазона от min до max
import getRandomNumber from '../getRandomNumber.js';

// используется алгоритм перебора
function gameData() {
  const question = getRandomNumber(2, 20);
  const result = () => {
    let j = 2;
    while (j <= Math.sqrt(question)) {
      if (question % j === 0) {
        return 'no';
      }
      j += 1;
    } return 'yes';
  };
  return [question, result()];
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default game(gameData, rules);
