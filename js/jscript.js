import crew from './crew.json' assert { type: 'json' }
import tech from './technology.json' assert { type: 'json' }
const burgerBtn = document.querySelector('.burger-btn')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('.nav')
const navClose = document.querySelector('.header__close-nav')
//crew
const crewBtns = document.querySelectorAll('.header__crew-btn')
const crewImg = document.querySelector('.header__crew-img')
const crewJob = document.querySelector('.header__crew-job')
const crewName = document.querySelector('.header__crew-name')
const crewBio = document.querySelector('.header__crew-text')
//tech
const techBtns = document.querySelectorAll('.header__tech-btn')
const techImg = document.querySelector('.header__tech-img')
const techName = document.querySelector('.header__tech-name')
const techText = document.querySelector('.header__tech-text')
const mediaQuery = window.matchMedia('(min-width: 1200px')
console.log(mediaQuery);
const showNav = () => {
	openBtn.classList.toggle('hide')
	closeBtn.classList.toggle('hide')
	nav.classList.toggle('nav--active')
}
const crewChange = e => {
	crewBtns.forEach(btn => btn.classList.remove('header__crew-btn--active'))
	e.target.classList.add('header__crew-btn--active')
	if (crewBtns[0].classList.contains('header__crew-btn--active')) {
		const commander = crew.douglas
		crewImg.setAttribute('src', commander.images)
		crewJob.textContent = commander.role
		crewName.textContent = commander.name
		crewBio.textContent = commander.bio
	}
	if (crewBtns[1].classList.contains('header__crew-btn--active')) {
		const spec = crew.mark
		crewImg.setAttribute('src', spec.images)
		crewJob.textContent = spec.role
		crewName.textContent = spec.name
		crewBio.textContent = spec.bio
	}
	if (crewBtns[2].classList.contains('header__crew-btn--active')) {
		const pilot = crew.victor
		crewImg.setAttribute('src', pilot.images)
		crewJob.textContent = pilot.role
		crewName.textContent = pilot.name
		crewBio.textContent = pilot.bio
	}
	if (crewBtns[3].classList.contains('header__crew-btn--active')) {
		const engineer = crew.ansari
		crewImg.setAttribute('src', engineer.images)
		crewJob.textContent = engineer.role
		crewName.textContent = engineer.name
		crewBio.textContent = engineer.bio
	}
}
const techChange = (e) => {
    techBtns.forEach(btn => btn.classList.remove('header__tech-btn--active'))
    e.target.classList.add('header__tech-btn--active')
    if (techBtns[0].classList.contains('header__tech-btn--active')) {
		const launch = tech.launch
        if(mediaQuery.matches) {
            techImg.setAttribute('src', launch.images.portrait)
        }else {
            techImg.setAttribute('src', launch.images.landscape)
        }
		techName.textContent = launch.name
		techText.textContent = launch.description
	}
	if (techBtns[1].classList.contains('header__tech-btn--active')) {
		const spaceport = tech.spaceport
        if(mediaQuery.matches) {
            techImg.setAttribute('src', spaceport.images.portrait)
        }else {
            techImg.setAttribute('src', spaceport.images.landscape)
        }
		techName.textContent = spaceport.name
		techText.textContent = spaceport.description
	}
	if (techBtns[2].classList.contains('header__tech-btn--active')) {
		const capsule = tech.capsule
        if(mediaQuery.matches) {
            techImg.setAttribute('src', capsule.images.portrait)
        }else {
            techImg.setAttribute('src', capsule.images.landscape)
        }
		techName.textContent = capsule.name
		techText.textContent = capsule.description
	}
}


burgerBtn.addEventListener('click', showNav)
crewBtns.forEach(btn => btn.addEventListener('click', crewChange))
techBtns.forEach(btn => btn.addEventListener('click', techChange))
