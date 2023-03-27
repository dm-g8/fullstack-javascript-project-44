//импорт библиотеки readline-sync из ранее установленной через npm istall 
import readlineSync from 'readline-sync';

const sayYourName = () => {
const userName = readlineSync.question('May I have your name?: ');
console.log('Hi, ' + userName + '!');
};
export { sayYourName };