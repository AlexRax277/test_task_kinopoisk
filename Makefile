# Создание образа приложения:
build:
	sudo docker build -t kinopoisk .

# Удаление образа:
del:
	sudo docker rmi kinopoisk:latest

# Запуск контейнера:
run:
	sudo docker run -d -p 3001:3000 --rm --name kinopoisk_app kinopoisk:latest

# Остановка контейнера:
stop:
	sudo docker stop kinopoisk_app

# Список образов:
list:
	sudo docker images

# Список всех контейнеров:
ps:
	sudo docker ps -a
	
# Запуск приложения локально (для разработки):
start:
	sudo npm start
	