# Makefile
install: # установка всех проектных зависимостей
	npm ci
brain-games: # запуск игры
	node bin/brain-games.js
publish: # публикация пакета с флагом для отладки без установки пакетов в npm
	npm publish --dry-run
lint: # запуск eslint
	npx eslint .
brain-even: # запуск игры brain-even
	node bin/brain-even.js
brain-calc: # запуск игры brain-calc
	node bin/brain-calc.js
brain-gcd: # запуск игры brain-gcd
	node bin/brain-gcd.js
brain-progression: # запуск игры brain-progression
	node bin/brain-progression.js
brain-prime: # запуск игры brain-prime
	node bin/brain-prime.js

