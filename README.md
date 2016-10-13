jquery.scrollUp
========

jquery.scrollUp — простой инструмент который позволяет добавить на страницу кнопку прокрутки к началу страницы.

Как пользоваться?
-------
Для начала скачайте плагин, распакуйте в директорию сайта и подключите в секцию `<head>` вашего html файла. Не забудьте подключить библиотеку jQuery.
```html
<head>
    <script src="jquery/jquery.min.js"></script>
    <link rel="stylesheet" href="jquery.scrollUp/jquery.scrollUp.min.css">
    <script src="jquery.scrollUp/jquery.scrollUp.min.js"></script>
</head>
```
Инициализируйте плагин:
```js
$(document).ready(function () {
    $.scrollUp(bg, color);
}
```
Где `bg` — цвет фона кноки, а `color` цвет стрелки.

Что бы изменить вёрстку кнопку, примените функцию `scrollUp()` на jquery объекте без параметров:
```js
$(document).ready(function () {
    $(".new-btn-for-up").scrollUp();
}
```
или
```js
$(document).ready(function () {
    $("<a class='new-btn-for-up' href='#'>Вверх</a>").scrollUp();
}
```