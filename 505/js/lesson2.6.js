// Работа с текстом
// let h1 = document.querySelector('h1')
// let button = document.querySelector('button')

// button.onclick = () => {
//     h1.innerText += ' hello'
// }

// Работа с данными пользователя input select
let input = document.querySelector('input')
let select = document.querySelector('select')
let button = document.querySelector('button')

// button.onclick = () => {
//     let value = input.value

//     if(value.length <= 1) {
//         button.setAttribute('disabled', 'disabled')
//     } else {
//         button.removeAttribute('disabled')
//         input.style.border = '1px solid green'
//     }

//     // Regular Expressions Регулярные выражения
// }

button.setAttribute('disabled', 'disabled')

// События для input/textarea
input.onkeyup = () => {
    let value = input.value

    if(value.length <= 1) {
        button.setAttribute('disabled', 'disabled')
    } else {
        button.removeAttribute('disabled')
        input.style.border = '1px solid green'
    }
}

// select.onchange = () => {
//     console.log(select.value)
// }
