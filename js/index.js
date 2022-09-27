// =====Trend Slider====
$('.trend').slick({
    centerMode: false,
    // centerPadding: '60px',
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                variableWidth: true,
                centerPadding: '40px',
                slidesToShow: 4,
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
    arrows: true,
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