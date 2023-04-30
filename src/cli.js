// импорт библиотеки readline-sync из ранее установленной через npm istall
import readlineSync from 'readline-sync';

const sayYourName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
};
export default sayYourName;
