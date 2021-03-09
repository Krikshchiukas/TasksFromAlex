
  const categories = document.querySelectorAll('ul#categories > li.item');
    console.log(categories.length);

    for (let category of categories) {
    const categoryName = category.querySelector('h2').textContent;
    console.log('Name of category is: ' + categoryName);

    const numOfElements = category.querySelectorAll('ul > li').length;
    console.log('number of elements: ' + numOfElements);
    }

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4