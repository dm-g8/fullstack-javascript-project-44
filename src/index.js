// импорт библиотеки readline-sync из ранее установленной через npm istall
import readlineSync from 'readline-sync';

// сольный импорт для игры Калькулятор
// import {gameData, rules} from './games/calc-source.js';
// сольный импорт для игры Проверка на четность
// import {gameData, rules} from './games/even-source.js';

export default function game(indexData, rules) {
// для сольного импорта и запуска игр
  // const game = () => {

  // приветствие и знакомство
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(`${rules}`);

  for (let i = 0; i < 3; i += 1) {
    // для сольного запуска игры
    // const [question, result] = gameData();
    const [question, result] = indexData();

    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    // сравнение результатов и получение ответа
    if (result === userInput) {
      console.log('Correct!');
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!'`);
}

// экспорт, когда работает только одна функция
// возможно получится применить при использовании динамического импорта
// или следить за тем, какая функция запущена, чтобы выбирать откуда
// импортировать данные для игры
// export default game;
