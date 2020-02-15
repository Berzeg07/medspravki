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
});
