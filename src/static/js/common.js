$(document).ready(function(){
    // custom select *
    $('.custom-select select').select2();

    // Phone-mask
    $(".form-inp_phone").mask("7 (999) 999-99-99");

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').fadeToggle();
    });
    $('.bars').click(function(){
        $(this).toggleClass('active');
        $('.list-dropdown').fadeToggle();
    });

    microloans = new Swiper('.ref-slider', {
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



});
