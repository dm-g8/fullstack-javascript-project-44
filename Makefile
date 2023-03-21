# Makefile
install: # установка всех проектных зависимостей
	npm ci
brain-games: # запуск игры
	node bin/brain-games.js