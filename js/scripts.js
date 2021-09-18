/*!
* Start Bootstrap - New Age v6.0.4 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    let contents = {
        featuresNav: {
            english: "Features",
            tamil: "அம்சங்கள்"
        },
        downloadNav: {
            english: "Download",
            tamil: "பதிவிறக்கம்"
        },
        feedbackNav: {
            english: "Send Feedback",
            tamil: "கருத்துகளை பதிவிடவும்"
        }
    }
    let toggleLanguageHandler = (languageId, hideLang) => {
        $('#'+languageId).on('click', event=> {
            $('#'+languageId).css('display', 'none');
            $('#'+hideLang).css('display', 'block');
            for(let content in contents) {
                console.log(content, $('#'+content), languageId, content[languageId])
                $('#'+content).text(contents[content][languageId])
            }
        })
    }
    toggleLanguageHandler('english', 'tamil');
    toggleLanguageHandler('tamil', 'english');
    $(".owl-carousel").owlCarousel({
        margin: 100,
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        items: 3
    });
});
