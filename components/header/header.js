$(document).ready(() => {
    $(window).scroll(() => {
        let scroll = $(window).scrollTop()
        let transOne = $(window).height() - 44
        if (scroll > transOne) {
            $('header').addClass('header-trans-one')
        } else {
            $('header').removeClass('header-trans-one')
        }
    })
})