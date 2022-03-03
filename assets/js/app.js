let windowWidth = $(window).width();
const handleTouchMove = function (ev) {
	ev.preventDefault();
}
const navigationMobile = function (e) {
	if (windowWidth < 992) {
		$("#header .header-inner .header-inner_nav > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenuTopUp" + index,
				"data-toggle": "collapse"
			});

			$(this).prev().find('i').remove();
			$(this).prev().append(`<span><i class="fal fa-plus"></i></span>`);
			$(this).attr({
				"id": "subMenuTopUp" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenuTopUp"
			});
		})

		/*
		 * Call menu mobile
		 */
		let body = $('body'),
			hamburgerIcon = $('#call-header_mobile');

		hamburgerIcon.click(function (e) {
			if (!body.hasClass('is-show_navigation')) {
				body.attr({
					'class': 'is-show_navigation',
					'style': 'overflow-y: hidden'
				});
				document.addEventListener('touchmove', handleTouchMove, {passive: false});
				$('#user-mobile').removeClass('active');
			} else {
				closeFloatMobile();
			}
		});
	}
}


const closeFloatMobile = function () {
	$('body').attr({
		'class': '',
		'style': ''
	});
	document.removeEventListener('touchmove', handleTouchMove);
}

const headerScroll = function (e) {
	$(window).scroll(function (e) {
		if ($(document).scrollTop() > $('#header').innerHeight()) {
			$('#header').addClass('is-scroll').removeClass('is-scrolled');
		} else {
			$('#header').removeClass('is-scroll').addClass('is-scrolled');
		}
	});
}


const userMobile = function (e) {
	let body = $('body'),
		buttonCallUser = $('#call-user_mobile');

	buttonCallUser.click(function (e) {
		if (!body.hasClass('is-show_user')) {
			body.attr({
				'class': 'is-show_user',
				'style': 'overflow-y: hidden'
			});
			document.addEventListener('touchmove', handleTouchMove, {passive: false});
			$('#user-mobile').removeClass('active');
		} else {
			closeFloatMobile();
		}
	});
}
const clickOverlayMobile = function () {
	$('#header-overlay').click(function () {
		closeFloatMobile();
	});
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
	navigationMobile();
	userMobile();
	clickOverlayMobile();
	slideBanner();
});