const BestWorksSwiper = document.querySelector('swiper-container')
const ClientsSwiper = document.querySelector('#clients-swiper')
// const cardsTeam = document.querySelector('.container-cards')
const injectStyles = [
	`
.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #dfebd0;
  border: 2px solid #34623f;
  cursor: pointer;
  transition: width 0.3s, border-radius 0.3s;
}

.swiper-pagination-bullet-active {
  width: 38px;
  background-color: #34623f;
  border-radius: 15px;
  transition: width 0.3s, background-color 0.3s, border-radius 0.3s,
    transform 0.3s;
}
`,
]

const clientContainerParams = {
	injectStyles,
	pagination: {
		clickable: true,
	},
}

const BestWorksParams = {
	injectStyles,
	pagination: {
		clickable: true,
	},
	loop: true,
}

Object.assign(BestWorksSwiper, BestWorksParams)
Object.assign(ClientsSwiper, clientContainerParams)

BestWorksSwiper.initialize()
ClientsSwiper.initialize()

// swipe when click on tabs
const tabs = document.querySelectorAll('.tab h4')
tabs.forEach((h4, index) => {
	h4.addEventListener('click', () => {
		BestWorksSwiper.swiper.slideTo(index)
	})
})
// change style of current active tab
BestWorksSwiper.swiper.on('slideChange', () => {
	const currentIndex = BestWorksSwiper.swiper.realIndex
	const tabs = document.querySelectorAll('.tab h4')
	tabs.forEach((h4, index) => {
		if (index === currentIndex) {
			return h4.classList.add('active')
		}
		h4.classList.remove('active')
	})
})
