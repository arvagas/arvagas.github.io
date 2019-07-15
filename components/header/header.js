$(document).ready(() => {
    $(window).scroll(() => {
        let scroll = $(window).scrollTop()
        let transOne = $(window).height() - $('header').height()
        if (scroll > transOne) {
            $('header').addClass('header-trans-one')
        } else {
            $('header').removeClass('header-trans-one')
        }
    })
})

$('.mobile-btn').click(() => {
    $('nav').slideToggle()
})