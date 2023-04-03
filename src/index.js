// импорт библиотеки readline-sync из ранее установленной через npm istall
import readlineSync from 'readline-sync';
// импорт для игры Калькулятор
//import chooseYourGame from '../bin/brain-calc.js';
import result from './games/calc-source.js';


import {arg1, oper, arg2} from './games/calc-source.js';


// приветствие и знакомство
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
if (chooseYourGame === 'brain-calc') {
    console.log('What is the result of the expression?');
}

// сравнение результатов и получение ответа
const answerGame = (calc, userInput) => {
    for (let i = 0; i < 3; i += 1) {
        if (calc === parseInt(userInput, 10)) {
            console.log('Correct!');
        } else {
        console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${calc}.'`);
        return;
        } console.log(`Congratulations, ${userName}`);
  };
};

const mainBrainGame = (chooseYourGame) => {
    if (chooseYourGame === 'brain-calc') {
                console.log(`Question: ${arg1} ${oper} ${arg2}`);
                const userInput = readlineSync.question('Your answer: ');
                answerGame (result, userInput);
    };
};


export default mainBrainGame;

// экспорт для калькулятора
//export {arg1, oper, arg2};
