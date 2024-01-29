# Тестовое задание 

SPA на React с использованием react-router и интеграцией данных с API [кинопоиск (неоф.)](https://kinopoiskapiunofficial.tech/). Проект включает в себя функциональные компоненты, кастомные хуки и может быть дополнен компонентами высшего порядка HOC для улучшения масштабируемости и переиспользования кода. Приложение также адаптировано под мобильные устройства, обеспечивая удобное использование как на десктопе, так и на мобильных устройствах.

Для развертывания приложения используется GitHub Pages. Скрипты для работы с проектом определены в файле package.json:

* npm run start: Запускает приложение в режиме разработки.
* npm run predeploy: Создает оптимизированную сборку приложения для развертывания.
* npm run deploy: Развертывает приложение на GitHub Pages, используя утилиту gh-pages.

Перед развертыванием приложения на GitHub Pages необходимо настроить соответствующий репозиторий и создать токен доступа (token), который будет использоваться для автоматического развертывания приложения.

## Структура проекта

- `src/`: Исходный код приложения.
- `Dockerfile`: Файл для создания Docker-образа приложения.
- `Makefile`: Файл с командами для работы с Docker и запуска приложения.

## Запуск проекта

Для запуска проекта вам понадобится Node.js. Следуйте инструкциям ниже:
1. Установите зависимости:

   ```
   npm install
1. Запустите проект локально:

    ```
    npm start
1. Откройте http://localhost:3000 в вашем браузере для просмотра приложения.

## Создание Docker-образа
Чтобы создать Docker-образ приложения, выполните следующие команды:

```
make build
```

## Запуск Docker-контейнера
Для запуска Docker-контейнера выполните:

```
make run
```
После запуска контейнера приложение будет доступно по адресу http://localhost:3001.

## Остановка Docker-контейнера
Для остановки Docker-контейнера выполните:

```
make stop
```
Happy hacking and good luck! =)