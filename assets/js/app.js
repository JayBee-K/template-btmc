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

const selNhanTien = function () {
    $('#sel-nhan').change(function () {
        let elm = $(this);
        let boxNhan = $('#content-nhan');
        if (elm.val() != -1) {
            boxNhan.find('#flag-nhan').attr('src', elm.find('option:selected').attr('data-flag'));
            boxNhan.find('#name-nhan').html(elm.find('option:selected').attr('data-name'));
            boxNhan.find('#value-code_nhan').html(elm.find('option:selected').attr('data-code'));
            boxNhan.slideDown();
        } else {
            boxNhan.slideUp(function () {
                boxNhan.find('#flag-nhan').attr('src', '');
                boxNhan.find('#name-nhan').html('');
                boxNhan.find('#value-code_nhan').html('');
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
            alert('Vui l??ng ch???n ti???n t??? v?? s??? ti???n c???n chuy???n');
        } else {
            let boxNhan = $('#content-nhan');
            boxNhan.find('#preview-nhan').val('99999999');
            boxNhan.slideDown();
        }
        return false;
    })
}

const selTienTe = function () {
    $('#selTienTe').change(function () {
        let elm = $(this);
        if (elm.val() != -1) {
            $('#tiente').html(`????n v???: <b>${elm.find('option:selected').attr('data-code')}</b>`).addClass('active');
        } else {
            $('#tiente').removeClass('active').html('');
        }
    });
}

const selQuocGia = function () {
    $('#selQuocGia').change(function () {
        let elm = $(this);
        let selNganHang = $('#selNganHang');
        let optionFirst = `<option value="-1">Ch???n ng??n h??ng</option>`;
        if (elm.val() == -1) {
            selNganHang.html(optionFirst);
        } else {
            switch (elm.val()) {
                case "jp":
                    optionFirst += `<option value="">Ng??n h??ng ??? Nh???t 01</option>
                                    <option value="">Ng??n h??ng ??? Nh???t 02</option>
                                    <option value="">Ng??n h??ng ??? Nh???t 03</option>
                                    <option value="">Ng??n h??ng ??? Nh???t 04</option>
                                    <option value="">Ng??n h??ng ??? Nh???t 05</option>
                                    <option value="">Ng??n h??ng ??? Nh???t 06</option>
                                    <option value="">Ng??n h??ng ??? Nh???t 07</option>`;
                    selNganHang.html(optionFirst);
                    break;
                case "vn":
                    optionFirst += `<option value="">Ng??n h??ng ??? Vi???t Nam 01</option>
                                    <option value="">Ng??n h??ng ??? Vi???t Nam 02</option>
                                    <option value="">Ng??n h??ng ??? Vi???t Nam 03</option>
                                    <option value="">Ng??n h??ng ??? Vi???t Nam 04</option>
                                    <option value="">Ng??n h??ng ??? Vi???t Nam 05</option>
                                    <option value="">Ng??n h??ng ??? Vi???t Nam 06</option>
                                    <option value="">Ng??n h??ng ??? Vi???t Nam 07</option>`;
                    selNganHang.html(optionFirst);
                    break;
                case "tw":
                    optionFirst += `<option value="">Ng??n h??ng ??? ????i Loan 01</option>
                                    <option value="">Ng??n h??ng ??? ????i Loan 02</option>
                                    <option value="">Ng??n h??ng ??? ????i Loan 03</option>
                                    <option value="">Ng??n h??ng ??? ????i Loan 04</option>
                                    <option value="">Ng??n h??ng ??? ????i Loan 05</option>
                                    <option value="">Ng??n h??ng ??? ????i Loan 06</option>
                                    <option value="">Ng??n h??ng ??? ????i Loan 07</option>`;
                    selNganHang.html(optionFirst);
                    break;
                case "kr":
                    optionFirst += `<option value="">Ng??n h??ng ??? H??n Qu???c 01</option>
                                    <option value="">Ng??n h??ng ??? H??n Qu???c 02</option>
                                    <option value="">Ng??n h??ng ??? H??n Qu???c 03</option>
                                    <option value="">Ng??n h??ng ??? H??n Qu???c 04</option>
                                    <option value="">Ng??n h??ng ??? H??n Qu???c 05</option>
                                    <option value="">Ng??n h??ng ??? H??n Qu???c 06</option>
                                    <option value="">Ng??n h??ng ??? H??n Qu???c 07</option>`;
                    selNganHang.html(optionFirst);
                    break;
                case "cn":
                    optionFirst += `<option value="">Ng??n h??ng ??? Trung Qu???c 01</option>
                                    <option value="">Ng??n h??ng ??? Trung Qu???c 02</option>
                                    <option value="">Ng??n h??ng ??? Trung Qu???c 03</option>
                                    <option value="">Ng??n h??ng ??? Trung Qu???c 04</option>
                                    <option value="">Ng??n h??ng ??? Trung Qu???c 05</option>
                                    <option value="">Ng??n h??ng ??? Trung Qu???c 06</option>
                                    <option value="">Ng??n h??ng ??? Trung Qu???c 07</option>`;
                    selNganHang.html(optionFirst);
                    break;
                case "sn":
                    optionFirst += `<option value="">Ng??n h??ng ??? Singapore 01</option>
                                    <option value="">Ng??n h??ng ??? Singapore 02</option>
                                    <option value="">Ng??n h??ng ??? Singapore 03</option>
                                    <option value="">Ng??n h??ng ??? Singapore 04</option>
                                    <option value="">Ng??n h??ng ??? Singapore 05</option>
                                    <option value="">Ng??n h??ng ??? Singapore 06</option>
                                    <option value="">Ng??n h??ng ??? Singapore 07</option>`;
                    selNganHang.html(optionFirst);
                    break;
                case "au":
                    optionFirst += `<option value="">Ng??n h??ng ??? Australia 01</option>
                                    <option value="">Ng??n h??ng ??? Australia 02</option>
                                    <option value="">Ng??n h??ng ??? Australia 03</option>
                                    <option value="">Ng??n h??ng ??? Australia 04</option>
                                    <option value="">Ng??n h??ng ??? Australia 05</option>
                                    <option value="">Ng??n h??ng ??? Australia 06</option>
                                    <option value="">Ng??n h??ng ??? Australia 07</option>`;
                    selNganHang.html(optionFirst);
                    break;
                default:
                    selNganHang.html(optionFirst);
                    break;
            }
        }
    });
}

$(function () {
    navigationMobile();
    userMobile();
    clickOverlayMobile();
    slideBanner();
    selChuyenTien();
    selNhanTien();
    submitTinhThu();
    selTienTe();
    selQuocGia();
});