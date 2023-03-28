# Makefile
install: # установка всех проектных зависимостей
	npm ci
brain-games: # запуск игры
	node bin/brain-games.js
publish: # публикация пакета с флагом для отладки без установки пакетов в npm
	npm publish --dry-run
lint: # запуск eslint
	npx eslint .