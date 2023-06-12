import crew from './crew.json' assert { type: 'json' }
import tech from './technology.json' assert { type: 'json' }
import dest from './destination.json' assert { type: 'json' }
const burgerBtn = document.querySelector('.burger-btn')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const exporeBtn = document.querySelector('.header__explore')
const crewBtns = document.querySelectorAll('.header__crew-btn')
const crewImg = document.querySelector('.header__crew-img')
const crewJob = document.querySelector('.header__crew-job')
const crewName = document.querySelector('.header__crew-name')
const crewBio = document.querySelector('.header__crew-text')
const techBtns = document.querySelectorAll('.header__tech-btn')
const techImg = document.querySelector('.header__tech-img')
const techName = document.querySelector('.header__tech-name')
const techText = document.querySelector('.header__tech-text')
const mediaQuery = window.matchMedia('(min-width: 1440px')
const launch = tech.launch
const destBtns = document.querySelectorAll('.header__dest-btn')
const destImg = document.querySelector('.header__dest-img')
const destName = document.querySelector('.header__dest-name')
const destText = document.querySelector('.header__dest-text')
const destDistance = document.querySelector('.distance')
const destTravel = document.querySelector('.header__dest-travel')
const techAnimation = [{ transform: 'translate(10%,100%) scale(0)' }, { transform: 'translate(0) scale(1)' }]
const animationTiming = {
	duration: 800,
	iterations: 1,
}
const showNav = () => {
	openBtn.classList.toggle('hide')
	closeBtn.classList.toggle('hide')
	nav.classList.toggle('nav--active')
}
const crewChange = e => {
	crewBtns.forEach(btn => btn.classList.remove('header__crew-btn--active'))
	e.target.classList.add('header__crew-btn--active')
	const crewInfo = function({images,role,name,bio}) {
		crewImg.setAttribute('src', images)
		crewJob.textContent = role
		crewName.textContent = name
		crewBio.textContent = bio
	}
	if (crewBtns[0].classList.contains('header__crew-btn--active')) {
		crewInfo(crew.douglas)
	}
	if (crewBtns[1].classList.contains('header__crew-btn--active')) {
		crewInfo(crew.mark)
	}
	if (crewBtns[2].classList.contains('header__crew-btn--active')) {
		crewInfo(crew.victor)
	}
	if (crewBtns[3].classList.contains('header__crew-btn--active')) {
		crewInfo(crew.ansari)
	}
}
const techChange = e => {
	techBtns.forEach(btn => btn.classList.remove('header__tech-btn--active'))
	e.target.classList.add('header__tech-btn--active')
	techBtns.forEach(btn => {
		if(btn.classList.contains('header__tech-btn--active') && mediaQuery.matches) {
			techText.animate(techAnimation, animationTiming)
		}
	})
	const spaceport = tech.spaceport
	const capsule = tech.capsule
	const techInfo = function({images,name,description}) {
		if (mediaQuery.matches) {
			techImg.setAttribute('src', images.portrait)
		} else {
			techImg.setAttribute('src', images.landscape)
		}
		techName.textContent = name
		techText.textContent = description
	}
	if (techBtns[0].classList.contains('header__tech-btn--active')) {
		techInfo(tech.launch)
	}
	if (techBtns[1].classList.contains('header__tech-btn--active')) {
		techInfo(tech.spaceport)
	}
	if (techBtns[2].classList.contains('header__tech-btn--active')) {
		techInfo(tech.capsule)
	}
}
const destChange = e => {
	destBtns.forEach(btn => btn.classList.remove('header__dest-btn--active'))
	e.target.classList.add('header__dest-btn--active')
	const planetInfo = function({images, name,description,distance,travel}) {
		destImg.setAttribute('src', images)
		destName.textContent = name
		destText.textContent = description
		destDistance.textContent =distance
		destTravel.textContent =travel
	}
	if (destBtns[0].classList.contains('header__dest-btn--active')){
	planetInfo(dest.moon)
	}
	if (destBtns[1].classList.contains('header__dest-btn--active')){
		planetInfo(dest.mars)
	}
	if (destBtns[2].classList.contains('header__dest-btn--active')){
		planetInfo(dest.europa)
	}
	if (destBtns[3].classList.contains('header__dest-btn--active')) {
		planetInfo(dest.titan)
	}
}
const checkMedia = () => {
	if (mediaQuery.matches && navLinks[3].classList.contains('nav__link--select')) {
		techImg.setAttribute('src', tech.launch.images.portrait)
		techText.animate(techAnimation, animationTiming)
	}
}
checkMedia()

burgerBtn.addEventListener('click', showNav)
crewBtns.forEach(btn => btn.addEventListener('click', crewChange))
techBtns.forEach(btn => btn.addEventListener('click', techChange))
destBtns.forEach(btn => btn.addEventListener('click', destChange))
