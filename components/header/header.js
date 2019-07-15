// Change header settings when scrolling past the first section
$(window).scroll(() => {
    let scroll = $(window).scrollTop()
    let transOne = $(window).height() - $('header').height()
    if (scroll > transOne) {
        $('header').addClass('header-trans-one')
    } else {
        $('header').removeClass('header-trans-one')
    }
})

// Open or close when mobile button is clicked
$('.mobile-btn').click(() => {
    $('.nav-container').slideToggle()
})



// Close menu when windows resizes
$(window).resize(() => {
    if ($(window).width() > 500) $('.nav-container').show()
    else $('.nav-container').slideUp()
})


// Close menu when scroll
$(window).scroll(() => {
    if ($(window).width() > 500) $('.nav-container').show()
    else $('.nav-container').slideUp()
})