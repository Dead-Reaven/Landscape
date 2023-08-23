const swiperEl = document.querySelector('swiper-container')
const clientsContainer = document.querySelector('#clients-swiper')
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

const params = {
	injectStyles,
	pagination: {
		clickable: true,
	},
	loop: true,
}

Object.assign(swiperEl, params)
Object.assign(clientsContainer, clientContainerParams)

swiperEl.initialize()
clientsContainer.initialize()
