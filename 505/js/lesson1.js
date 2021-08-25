// DOM - Document Object Model - Объектная модель документа
// Поиск элементов
let button = document.querySelector('div') // Удобный вариант

button.onclick = () => {
    button.classList.add('heart')
    button.innerHTML = ''
}

// h1.onclick = () => {
//     // Классы
//     h1.classList.add('active')
//     body.classList.add('active')

//     input.setAttribute('class', 'ABCD')

//     // Аттрибуты
//     // Добавление/изменение
//     input.setAttribute('placeholder', 'Впишите не текст')
//     input.setAttribute('disabled', 'disabled')
    
//     // Чтение
//     console.log(input.getAttribute('placeholder'))

//     // Удаление
//     input.removeAttribute('type')
//     input.setAttribute('type', 'color')
    
//     // Стили
//     input.style.transform = 'translateX(100px)'
//     input.style.backgroundColor = 'red'
// }



// Цикл элементов
