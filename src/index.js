// импорт библиотеки readline-sync из ранее установленной через npm istall
import readlineSync from 'readline-sync';
// импорт для игры Калькулятор
import chooseYourGame from '../bin/brain-calc.js';
import result from './games/calc-source.js';


// генератор случайных чисел из диапазона от min до max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const arg1 = getRandomNumber(-100, 100);
const arg2 = getRandomNumber(-100, 100);

// выбор случайной математической операции
const arrayOper = ['+', '-', '*'];
const indexArrayOper = getRandomNumber(0, 2);
const oper = arrayOper[indexArrayOper];



// приветствие и знакомство
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);

// сравнение результатов и получение ответа
const answerGame = () => {
    if (result === userInput) {
        console.log('Correct!');
    } console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${result}.'`);
    return;
}


const mainBrainGame = () => {
    switch (chooseYourGame) {
        case 'brain-calc':
            console.log('What is the result of the expression?');
            for (let i = 0; i < 3; i += 1) {
                console.log(`Question: ${arg1} ${oper} ${arg2}`);
                const userInput = readlineSync.question('Your answer: ');
                answerGame ();
            } console.log(`Congratulations, ${userName}`);
    }
};


export default mainBrainGame;

// экспорт для калькулятора
export {arg1, oper, arg2};
