let div = document.querySelectorAll('div')

for(let item of div) {
    let width = 150
    
    item.onclick = () => {
        width += 50

        item.classList.add('active')
        item.style.width = width + 'px'
    }
}
