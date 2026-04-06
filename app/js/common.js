
$(function () {

    $('.menu-toggle').on('click', function () {
        $('.header-mob').toggleClass('active');
        $(this).toggleClass('active');
    });

    if (typeof Swiper !== 'undefined' && document.querySelector('.js-news-featured-swiper')) {
        new Swiper('.js-news-featured-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 450,
            loop: true,
            pagination: {
                el: '.js-news-featured-pagination',
                clickable: true,
                bulletClass: 'news-intro-featured-bullet',
                bulletActiveClass: 'news-intro-featured-bullet--active',
            },
        });
    }

    if (typeof Swiper !== 'undefined' && document.querySelector('.js-home-featured-swiper')) {
        new Swiper('.js-home-featured-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 450,
            loop: true,
            pagination: {
                el: '.js-home-featured-pagination',
                clickable: true,
                bulletClass: 'home-featured-bullet',
                bulletActiveClass: 'home-featured-bullet--active',
            },
        });
    }

});


window.addEventListener('load', function () {

}, false);


