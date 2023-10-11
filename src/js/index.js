const toggleBurger = () => {
	const menu = document.querySelector('#menu')
	menu.style.display = menu.style.display === 'flex' ? '' : 'flex'

	const headerTopButton = document.querySelector('#header-top-button')
	if (menu.style.display == 'flex') headerTopButton.style.display = 'none'
	else headerTopButton.removeAttribute('style')
}

// service cards
// Function to toggle the service card's state

const toggleOpen = (card) => {
	const content = card.querySelector('#card-content')
	content.classList.add('animate-open')
	content.classList.remove('animate-close')
}

const toggleClose = (card) => {
	const content = card.querySelector('#card-content')
	content.classList.add('animate-close')
	content.classList.remove('animate-open')
}

// Get all service cards
const serviceCards = document.querySelectorAll('.service-card')

// Add click event listeners to each service card
let expanded = serviceCards[3]
toggleOpen(expanded)

serviceCards.forEach((card, idx) => {
	card.addEventListener('click', () => {
		if (card !== expanded) {
			toggleClose(expanded)
			if (window.innerWidth >= 1280) {
				// Get the common parent node (assuming cards are direct children of the same parent)
				const parent = card.parentNode

				// Swap the positions of the cards using insertBefore
				parent.insertBefore(card, expanded)
				parent.insertBefore(expanded, card)
			}
			// Update the expanded card reference
			expanded = card
			toggleOpen(expanded)
		}
	})
})

document.querySelector('#burger-button').addEventListener('click', toggleBurger)
