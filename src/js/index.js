document.addEventListener('DOMContentLoaded', function () {
	const bulletItems = document.querySelectorAll('.pagination div')

	bulletItems.forEach((item) => {
		item.addEventListener('click', function () {
			bulletItems.forEach((otherItem) => {
				otherItem.classList.remove('active-bullet')
			})
			this.classList.add('active-bullet')
		})
	})

	const toggleBurger = () => {
		const menu = document.querySelector('#menu')
		menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'
	}

	document
		.querySelector('#burger-button')
		.addEventListener('click', toggleBurger)

	const toggleServiceCard = (card) => {
		const content = card.querySelector('#card-content')
		content.classList.toggle('animate-open')
		content.classList.toggle('animate-close')
	}
	// write here code here ...
	const serviceCards = document.querySelectorAll('.service-card')
	console.log(serviceCards)
	serviceCards.forEach((card) => {
		card.addEventListener('mouseenter', () => toggleServiceCard(card))
		card.addEventListener('mouseleave', () => toggleServiceCard(card))
		card.addEventListener('click', () => toggleServiceCard(card))

		// card.addEventListener('', toggleServiceCard)
	})
})
