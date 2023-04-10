// генератор случайных чисел из диапазона от min до max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomNumber;
