// импорт библиотеки readline-sync из ранее установленной через npm istall
import readlineSync from 'readline-sync';
// импорт названия игры выбора игры
import chooseYourGame from '../bin/brain-calc.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);

const mainBrainGame = () => {
    switch (chooseYourGame) {
        case: 'brain-calc':

    }
}


export default mainBrainGame;
