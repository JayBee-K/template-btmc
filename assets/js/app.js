let windowWidth = $(window).width();
const handleTouchMove = function (ev) {
	ev.preventDefault();
}

const slideBanner = function () {
	new Swiper('#slideBanner', {
		loop: false,
		speed: 500,
		navigation: {
			nextEl: '#slideBanner .slide-button-next',
			prevEl: '#slideBanner .slide-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
	});
}

$(function () {
	slideBanner();
});