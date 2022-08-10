// slider
$(document).ready(function(){
    $(".carousel").slick({
    slidesToShow: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon class=" ti-arrow-left" name="arrow-left"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon class=" ti-arrow-right" name="arrow-right"></ion-icon></button>`,
    responsive: [{
        breakpoint: 600,
        settings: {
            arrows: false,
            draggable: true,
        }
    }]
    });
});

// xử lý băng chuyền của client
$(document).ready(function(){
    $(".carousel-reviews").slick({
    slidesToShow: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    dots: true,
    responsive: [{
        breakpoint: 600,
        settings: {
            draggable: true,
        }
    }]
    });
});

function start() {
    On_Off_navMobile();
}

start();

function On_Off_navMobile() {
    let btnNavMobile = document.querySelector('.box-btn-navMobile');
    let boxNavMobile = document.querySelector('.box-navMobile');

    btnNavMobile.addEventListener('click', function() {
        if(btnNavMobile.classList.value === 'box-btn-navMobile') {
            btnNavMobile.classList.add('active-btn-nav');
            boxNavMobile.classList.add('active-box-nav');
        }
        else {
            btnNavMobile.classList.remove('active-btn-nav');
            boxNavMobile.classList.remove('active-box-nav');
        }
    })
}