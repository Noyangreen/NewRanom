let button = document.querySelector('button')

button.onclick = () => {
    // #1
    button.firstElementChild.style.color = 'red'
    
    // #2
    button.children[0].style.color = 'red'
}
