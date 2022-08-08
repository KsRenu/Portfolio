$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        // sticky navbar on scroll script
        if (this.scrollY < 500) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


/*SCROLL HOME*/
sr.reveal('.content', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.image', { origin: 'top', delay: 400 })

/*SCROLL ABOUT*/
sr.reveal(' .column left', { delay: 500 })
sr.reveal('.about .title', { delay: 300 })
sr.reveal('.about .text', { delay: 400 })
sr.reveal('.about .about-content', { delay: 500 })
sr.reveal('.maxwidth', { delay: 600, interval: 200 })

sr.reveal(' .experience .box-container', { delay: 200 })
sr.reveal('.about .title', { delay: 300 })


/*SCROLL SKILLS*/
sr.reveal('.skills', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL PORTFOLIO*/
sr.reveal('.projects .box .box-container', { delay: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact-content', { delay: 200 })
sr.reveal('.contact .icons', { delay: 400 })
sr.reveal('.contact .fields', { delay: 600 })

