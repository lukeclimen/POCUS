$(function() {
    let openModalButtons = $('[data-target]');
    let closeModalButtons = $('[data-close-button]');

    openModalButtons
    .click(function() {
        let modal = $(this).attr("data-target");
        console.log(modal);
        $(modal).addClass("modal-active");
        $('.overlay').addClass("overlay-active");

        if(modal != '#overview') {
            let video = $(this).attr("data-id");
            $('#observed-video').attr("src", "videos/" + video + ".gif");
            video++;
            $('#normal-video').attr("src", "videos/" + video + ".gif");
            let title = $(this).attr("alt");
            $('#video-modal-header').html(title);
        }
    });

    closeModalButtons
    .click(function() {
        $('.modal').removeClass("modal-active");
        $('.overlay').removeClass("overlay-active");
    });
})