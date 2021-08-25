let faq = document.querySelectorAll('.item')

for(let item of faq) {
    item.onclick = () => {
        item.classList.toggle('active')
    }
}
