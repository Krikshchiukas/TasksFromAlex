const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('input');
const boxesDiv = document.querySelector('#boxes');

function createBoxes(amount) {
    let newDivSize = 30;

    for (let i = 0; i < amount; i++) {
        const newDiv = document.createElement('div');

        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        newDiv.style.backgroundColor = "#" + randomColor;

        newDiv.style.width = newDivSize + 'px';
        newDiv.style.height = newDivSize + 'px';
        newDivSize += 10;

        boxesDiv.appendChild(newDiv);
    }
}

renderBtn.addEventListener('click', function () {
    createBoxes(input.value);
});

destroyBtn.addEventListener('click', function () {
    while (boxesDiv.hasChildNodes()) {
        boxesDiv.removeChild(boxesDiv.firstChild)
    }
});

// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">
// Очистить</button>
// </div>

// <div id="boxes"></div>
