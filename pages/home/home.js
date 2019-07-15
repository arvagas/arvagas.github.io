// Scroll from cta to about on click
$(document).ready(() => {
    $('.cta-btn').click(() => {
        $('body, html').animate({
            scrollTop: $("#about-section").offset().top
        }, 1000)
    })
})

// Scroll from about to project on click
$(document).ready(() => {
    $('.about-btn').click(() => {
        $('body, html').animate({
            scrollTop: $("#projects-section").offset().top
        }, 1000)
    })
})