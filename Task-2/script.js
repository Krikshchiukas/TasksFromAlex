const ingredients = [
    'Potato',
    'Mushroom',
    'Garlic',
    'Tomato',
    'Aubegin',
    'Corget'
];

function convertItemsFromArr() {
    const ingredientsList = document.querySelector('ul#ingredients');
    for (let ingredient of ingredients) {
        const ingredientItem = document.createElement('LI');
        ingredientItem.appendChild(document.createTextNode(ingredient));
        ingredientsList.appendChild(ingredientItem);

    }
}

convertItemsFromArr();

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().