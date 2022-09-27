// =====Trend Slider====
$('.trend').slick({
    centerMode: false,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                variableWidth: true,
                centerPadding: '40px',
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                variableWidth: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]

});

// =====Deal Slider====
$('.deal').slick({
    centerMode: false,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]

});

// =====Offer Slider====
$('.offer').slick({
    centerMode: false,
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]

});