// импорт библиотеки readline-sync из ранее установленной через npm istall
import readlineSync from 'readline-sync';

//генератор случайных чисел из диапазона от min до max
const getRandomNumber = (min, max) => {     
    let min = -100;
    let max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const brainEven = () => {
    const userName = readlineSync.question('May I have your name?: ');
    console.log(`Hi, ${userName}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let count = 0;
    while (count <= 3) {
        console.log(`Question: ${getRandomNumber}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === 'yes' | getRandomNumber % 2 === 0 || answer === 'no' | getRandomNumber % 2 !== 0) {
            console.log('Correct!');
            count += 1;
        } console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${userName}!`);
        return;
    } console.log(`Congratulations, ${userName}!`);
};

export default brainEven;