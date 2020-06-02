$('.series-wrapper').slick({
    dots: false,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 320,
        settings: "unslick"
        }
        ,
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });


    const modal = document.getElementById("mobileMenu");

    const btn = document.getElementById("menuHamburger");
    
    btn.onclick = function () {
    modal.style.display = "block";
    };
    
    btn.onclick = function () {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
    };
    