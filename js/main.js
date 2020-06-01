$('.responsive').slick({
    dots:false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 320,
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


//const mobile = document.getElementById("mobileMenu");

//const logo = document.getElementById("menuHamburger");

//logo.onclick = function () {
//mobile.style.display = "block";
//};

//logo.onclick = function () {
        //    if (mobile.style.display === "block") {
        //   mobile.style.display = "none";
        //  } else {
        //      mobile.style.display = "block";
        //    }
//    };
