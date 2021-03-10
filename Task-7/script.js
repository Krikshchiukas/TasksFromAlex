const fontSizeControl = document.querySelector('input#font-size-control');

fontSizeControl.addEventListener('input', function() {
  const spanText = document.querySelector('span#text');
  let stepRange = fontSizeControl.value;
  spanText.style.fontSize = stepRange + 'px';
});

// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
