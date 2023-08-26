const toggleBurger = () => {
	const menu = document.querySelector('#menu')
	menu.style.display = menu.style.display === 'flex' ? '' : 'flex'

	// Добавьте следующие строки для скрытия кнопки "Замовити послугу" при открытии бургер-меню
	const headerTopButton = document.querySelector('#header-top-button')
	if (menu.style.display == 'flex') headerTopButton.style.display = 'none'
	else headerTopButton.removeAttribute('style')
}

document.querySelector('#burger-button').addEventListener('click', toggleBurger)

const toggleServiceCard = (card) => {
	const content = card.querySelector('#card-content')
	content.classList.toggle('animate-open')
	content.classList.toggle('animate-close')
}

const serviceCards = document.querySelectorAll('.service-card')
serviceCards.forEach((card) => {
	card.addEventListener('click', () => toggleServiceCard(card))
})
