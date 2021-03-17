const input = document.querySelector('input#validation-input');
const input2 = document.querySelector('input#validation-input2');

input.addEventListener('focusout', validateInput);
input2.addEventListener('focusout', validateInput);

function validateInput(e) {
  const targetInput = e.target;

  if (targetInput.value.length != targetInput.dataset.length) {
    targetInput.className = 'invalid';
  } else {
    targetInput.className = 'valid';
  }
}

// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }