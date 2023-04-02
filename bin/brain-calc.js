#!/usr/bin/env node
// импорт функции из общего файла index.js
import mainBrainGame from '../src/index.js';

const chooseYourGame = 'brain-calc';

// вызов функции
mainBrainGame();

export default chooseYourGame;
