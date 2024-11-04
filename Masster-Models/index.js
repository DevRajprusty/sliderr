let scrollContainer = document.querySelector('.scroll')
let back = document.querySelector("#backBtn")
let next = document.querySelector("#nextBtn")

scrollContainer.addEventListener('wheel',(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = "auto";
})

next.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 900;
})
back.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 900;
})

