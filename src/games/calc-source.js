//import {arg1, oper, arg2} from '../index.js';

// генератор случайных чисел из диапазона от min до max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const arg1 = getRandomNumber(-100, 100);
const arg2 = getRandomNumber(-100, 100);

// выбор случайной математической операции
const arrayOper = ['+', '-', '*'];
const indexArrayOper = getRandomNumber(0, 2);
const oper = arrayOper[indexArrayOper];

let result;
if (`${oper}` === '+') {
    result = arg1 + arg2;
} else if (`${oper}` === '-') {
    result = arg1 - arg2;
} else {
    result = arg1 * arg2;
};

export default result;
export {arg1, oper, arg2};