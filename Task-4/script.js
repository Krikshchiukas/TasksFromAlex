let counterValue = 0;

const counterValueSpan = document.querySelector('span#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

function increment() {
  counterValue++;
}

function decrement() {
  counterValue--;
}

function reset() {
  counterValue = 0;
}

function refreshValue() {
  counterValueSpan.innerHTML = counterValue;
}

incrementBtn.onclick = function() {
  increment();
  refreshValue();
}

decrementBtn.onclick = function() {
  decrement();
  refreshValue();
}

resetBtn.onclick = function() {
  reset();
  refreshValue();
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