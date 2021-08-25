let div = document.getElementsByTagName('div')

for(let item of div) {
    item.onclick = () => {
        item.classList.toggle('active')
    }
}
