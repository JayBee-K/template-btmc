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
            $(this).prev().append(`<span><i class="far fa-plus"></i></span>`);
            $(this).attr({
                "id": "subMenuTopUp" + index,
                "class": "collapse list-unstyled mb-0",
                "data-parent": "#hasMenuTopUp"
            });

            $(this).find('a').prepend('<i class="far fa-angle-right"></i>');
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
    new Swiper('#slideBanner .swiper', {
        speed: 1000,
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

const selChuyenTien = function () {
    $('#sel-chuyen').change(function () {
        let elm = $(this);
        let boxChuyen = $('#content-chuyen');
        if (elm.val() != -1) {
            boxChuyen.find('#flag-chuyen').attr('src', elm.find('option:selected').attr('data-flag'));
            boxChuyen.find('#name-chuyen').html(elm.find('option:selected').attr('data-name'));
            boxChuyen.find('#value-code_chuyen').html(elm.find('option:selected').attr('data-code'));
            boxChuyen.slideDown();
        } else {
            boxChuyen.slideUp(function () {
                boxChuyen.find('#flag-chuyen').attr('src', '');
                boxChuyen.find('#name-chuyen').html('');
                boxChuyen.find('#value-code_chuyen').html('');
            });
        }
    });
}

const submitTinhThu = function () {
    $('#frmTinhThu').submit(function (e) {
        let selChuyenTien = $('#sel-chuyen');
        let selNhanTien = $('#sel-nhan');
        let inputChuyenTien = $('#value-chuyen');
        if (selChuyenTien.val() == -1 || selNhanTien.val() == -1 || inputChuyenTien.val() < 1) {
            alert('Vui lòng chọn tiền tệ và số tiền cần chuyển');
        } else {
            let boxNhan = $('#content-nhan');
            let selNhan = $('#sel-nhan');
            boxNhan.find('#flag-nhan').attr('src', selNhan.find('option:selected').attr('data-flag'));
            boxNhan.find('#name-nhan').html(selNhan.find('option:selected').attr('data-name'));
            boxNhan.find('#value-code_nhan').html(selNhan.find('option:selected').attr('data-code'));
            boxNhan.find('#preview-nhan').val('99999999');
            boxNhan.slideDown();
        }
        return false;
    })
}

const selTienTe = function () {
    $('#selTienTe').change(function () {
        let elm = $(this);
        console.log(elm.val());
        if (elm.val() != -1) {
            $('#tiente').html(`Đơn vị: <b>${elm.find('option:selected').attr('data-code')}</b>`).addClass('active');
        } else {
            $('#tiente').removeClass('active').html('');
        }
    });
}

$(function () {
    navigationMobile();
    userMobile();
    clickOverlayMobile();
    slideBanner();
    selChuyenTien();
    submitTinhThu();
    selTienTe();
});