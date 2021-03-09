
let counterValue = 0;
let spanValue = document.querySelector('span#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.onclick = function() {
  counterValue -= 1;
  spanValue.innerHTML = counterValue;
}

increment.onclick = function() {
  counterValue += 1;
  spanValue.innerHTML = counterValue;
}



// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>