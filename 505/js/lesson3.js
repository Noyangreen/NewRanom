// Навигация по DOM-элементам
let button = document.querySelector('button')

button.parentNode // Родитель

button.children // Дети Array
button.children[1] // Конкретный сын
button.firstElementChild // Первый сын
button.lastElementChild // Последний сын

button.previousElementSibling // Предыдущий брат
button.nextElementSibling // Следующий брат
