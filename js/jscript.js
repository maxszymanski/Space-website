const burgerBtn = document.querySelector('.burger-btn')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('.nav')

const showNav = () => {
    openBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    nav.classList.toggle('nav--active')
}
burgerBtn.addEventListener('click', showNav)