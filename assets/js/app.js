let windowWidth = $(window).width();
const handleTouchMove = function (ev) {
	ev.preventDefault();
}

const slideBanner = function () {
	new Swiper('#slideBanner .swiper', {
		speed: 1500,
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: '#slideBanner .button-next',
			prevEl: '#slideBanner .button-prev',
		},
	});
}

$(function () {
	slideBanner();
});