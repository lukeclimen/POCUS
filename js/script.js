$(function() {
    let openModalButtons = $('[data-target]');
    let closeModalButtons = $('[data-close-button]');
    let overlay = $('.overlay');

    openModalButtons
    .click(function() {
        let modal = $(this).attr("data-target");
        console.log(modal);
        $(modal).addClass("modal-active");
        $('.overlay').addClass("overlay-active");
    });

    closeModalButtons
    .click(function() {
        $('.modal').removeClass("modal-active");
        $('.overlay').removeClass("overlay-active");
    });
})