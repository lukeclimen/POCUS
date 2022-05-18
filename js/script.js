$(function() {
    let openModalButtons = $('[data-modal-target]');
    let closeModalButtons = $('[data-close-button]');
    let overlay = $('.overlay');
    openModalButtons
    .click(function() {
        $('.modal').addClass("modal-active");
        $('.overlay').addClass("overlay-active");
    });
    closeModalButtons
    .click(function() {
        $('.modal').removeClass("modal-active");
        $('.overlay').removeClass("overlay-active");
    });
})