// slides
document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i + 1}`] = new Swiper(n, {
		freeMode: true,
		// centeredSlides: true,
		loop: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 'auto',
		slidesOffsetBefore: -125,
	})
})
bindSwipers(slider1, slider2, slider3, slider4)

// Loader
const load = document.querySelector('.load')
window.addEventListener('load', () => {
	load.classList.add('active')
}, setTimeout(15000));


// popup
const structureCard = document.querySelectorAll('.slider__item')
const structurePopup = document.querySelector('.structure__popup')
const structurePopupClose = document.querySelector('.structure__popup-close')

if (structurePopupClose) {
	structurePopupClose.addEventListener('click', function () {
		structurePopup.classList.remove('active')
	})
}

if (structurePopup) {
	structurePopup.addEventListener('click', function (e) {
		if (e.target === structurePopup) {
			structurePopup.classList.remove('active')
		}
	})
}

structureCard.forEach((item) => {
	item.addEventListener('click', function () {

		structurePopup.classList.add('active')

		let itemTitle = item.querySelector('.slider__content-title').innerHTML,
			itemDescr = item.querySelector('.slider__content-descr').innerHTML,
			itemImg = item.querySelector('.slider__content-img').src;

		structurePopup.querySelector('.structure__popup-img').src = itemImg
		structurePopup.querySelector('.structure__popup-title').innerHTML = itemTitle
		structurePopup.querySelector('.structure__popup-descr').innerHTML = itemDescr

	})
})

