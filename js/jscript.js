import data from './crew.json' assert {type: 'json'};
const burgerBtn = document.querySelector('.burger-btn')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('.nav');
//crew
const crewBtns = document.querySelectorAll('.header__crew-btn')
const crewImg = document.querySelector('.header__crew-img')
const crewJob = document.querySelector('.header__crew-job')
const crewName = document.querySelector('.header__crew-name')
const crewBio = document.querySelector('.header__crew-text')

const commander = data.douglas
const spec = data.mark
const pilot = data.victor
const engineer = data.ansari



const showNav = () => {
    openBtn.classList.toggle('hide')
    closeBtn.classList.toggle('hide')
    nav.classList.toggle('nav--active')
}
const changeBtnActive = (e) => {
    crewBtns.forEach(btn => btn.classList.remove('header__crew-btn--active') )
    e.target.classList.add('header__crew-btn--active')
    if(crewBtns[0].classList.contains('header__crew-btn--active')) {
        crewImg.setAttribute('src', commander.images) 
        crewJob.textContent = commander.role
        crewName.textContent = commander.name
        crewBio.textContent = commander.bio
    }
    if(crewBtns[1].classList.contains('header__crew-btn--active')) {
        crewImg.setAttribute('src', spec.images) 
        crewJob.textContent = spec.role
        crewName.textContent = spec.name
        crewBio.textContent = spec.bio
    }
    if(crewBtns[2].classList.contains('header__crew-btn--active')) {
        crewImg.setAttribute('src', pilot.images) 
        crewJob.textContent = pilot.role
        crewName.textContent = pilot.name
        crewBio.textContent = pilot.bio
    }
    if(crewBtns[3].classList.contains('header__crew-btn--active')) {
        crewImg.setAttribute('src', engineer.images) 
        crewJob.textContent = engineer.role
        crewName.textContent = engineer.name
        crewBio.textContent = engineer.bio
    }
   
}
const specShow = (spec) => {
    if(e.target.contains('header__crew-btn--active')) {
        crewImg.setAttribute('url', this.images) 
    }
}



crewBtns.forEach(btn => btn.addEventListener('click', changeBtnActive))

burgerBtn.addEventListener('click', showNav)
