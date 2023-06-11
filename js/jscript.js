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
const techChange = e => {
	techBtns.forEach(btn => btn.classList.remove('header__tech-btn--active'))
	e.target.classList.add('header__tech-btn--active')
	if (techBtns[0].classList.contains('header__tech-btn--active')) {
		if (mediaQuery.matches) {
			techImg.setAttribute('src', launch.images.portrait)
		} else {
			techImg.setAttribute('src', launch.images.landscape)
		}
		techName.textContent = launch.name
		techText.textContent = launch.description
		techText.animate(techAnimation, animationTiming)
	}
	if (techBtns[1].classList.contains('header__tech-btn--active')) {
		const spaceport = tech.spaceport
		if (mediaQuery.matches) {
			techImg.setAttribute('src', spaceport.images.portrait)
		} else {
			techImg.setAttribute('src', spaceport.images.landscape)
		}
		techName.textContent = spaceport.name
		techText.textContent = spaceport.description
		techText.animate(techAnimation, animationTiming)
	}
	if (techBtns[2].classList.contains('header__tech-btn--active')) {
		const capsule = tech.capsule
		if (mediaQuery.matches) {
			techImg.setAttribute('src', capsule.images.portrait)
		} else {
			techImg.setAttribute('src', capsule.images.landscape)
		}
		techName.textContent = capsule.name
		techText.textContent = capsule.description
		techText.animate(techAnimation, animationTiming)
	}
}
const destChange = e => {
	destBtns.forEach(btn => btn.classList.remove('header__dest-btn--active'))
	e.target.classList.add('header__dest-btn--active')
	if (destBtns[0].classList.contains('header__dest-btn--active')) {
		const moon = dest.moon
		destImg.setAttribute('src', moon.images)
		destName.textContent = moon.name
		destText.textContent = moon.description
		destDistance.textContent = moon.distance
		destTravel.textContent = moon.travel
	}
	if (destBtns[1].classList.contains('header__dest-btn--active')) {
		const mars = dest.mars
		destImg.setAttribute('src', mars.images)
		destName.textContent = mars.name
		destText.textContent = mars.description
		destDistance.textContent = mars.distance
		destTravel.textContent = mars.travel
	}
	if (destBtns[2].classList.contains('header__dest-btn--active')) {
		const europa = dest.europa
		destImg.setAttribute('src', europa.images)
		destName.textContent = europa.name
		destText.textContent = europa.description
		destDistance.textContent = europa.distance
		destTravel.textContent = europa.travel
	}
	if (destBtns[3].classList.contains('header__dest-btn--active')) {
		const titan = dest.titan
		destImg.setAttribute('src', titan.images)
		destName.textContent = titan.name
		destText.textContent = titan.description
		destDistance.textContent = titan.distance
		destTravel.textContent = titan.travel
	}
}
if (mediaQuery.matches && navLinks[3].classList.contains('nav__link--select')) {
	techImg.setAttribute('src', launch.images.portrait)
	techText.animate(techAnimation, animationTiming)
}
burgerBtn.addEventListener('click', showNav)
crewBtns.forEach(btn => btn.addEventListener('click', crewChange))
techBtns.forEach(btn => btn.addEventListener('click', techChange))
destBtns.forEach(btn => btn.addEventListener('click', destChange))
