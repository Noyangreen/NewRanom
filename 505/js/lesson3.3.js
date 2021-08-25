let timer = 50
let h1 = document.querySelector('h1')
let counter = 60

let inter = setInterval(() => {
    h1.innerText = counter
    counter--

    if(counter < 0) {
        h1.style.color = 'red'

        clearInterval(inter)
    }
}, timer)

// let timeOut = setTimeout(() => {
//     console.log('Interval is done!');
// }, timer + 500)

// clearInterval(inter)
// clearTimeout(timeOut)
