$(document).ready(function() {

    $('.custom-select select').select2();

    $(".form-inp_phone").mask("7 (999) 999-99-99");

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-menu').fadeToggle();
    });

    $('.bars').click(function() {
        $(this).toggleClass('active');
        $('.list-dropdown').fadeToggle();
    });

    $('.tabs a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab-block').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.tabs a:first').click();

    var microloans = new Swiper('.ref-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1365: {
                slidesPerView: 3
            },
            1366: {
                slidesPerView: 4
            }
        },
        navigation: {
            nextEl: '.ref-next',
            prevEl: '.ref-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var lissence = new Swiper('.lissence-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1365: {
                slidesPerView: 3
            },
            1366: {
                slidesPerView: 4
            },
            1599: {
                slidesPerView: 4
            }
        },
        navigation: {
            nextEl: '.lis-next',
            prevEl: '.lis-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var show = $('.rent');
    var showTop = show.offset().top;
    var newMap = document.querySelector('.new-map');
    $(window).bind('scroll', function() {
        var windowTop = $(this).scrollTop();
        if (windowTop > showTop) {
            $(window).unbind('scroll');
            newMap.setAttribute("src", "https://api-maps.yandex.ru/2.1/?lang=ru_RU");
            setTimeout(function() {
                ymaps.ready(init);

                function init() {
                    var center = [55.755814, 37.617635];
                    var myMap = new ymaps.Map('map', {
                        center: center,
                        controls: [],
                        zoom: 8
                    }, {
                        searchControlProvider: 'yandex#search'

                    });

                    myMap.behaviors.disable('scrollZoom');

                    var myPlacemark = new ymaps.Placemark(center, {
                        balloonContent: 'Москва',
                        hintContent: 'Москва'
                    }, {
                        iconLayout: 'default#image',
                        iconImageSize: [42, 42]
                    });

                    myMap.geoObjects.add(myPlacemark);
                }
            }, 500);
            return;
        }
    });

});
