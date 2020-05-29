const mobile = document.getElementById("mobileMenu");

const logo = document.getElementById("menuHamburger");

logo.onclick = function () {
mobile.style.display = "block";
};

logo.onclick = function () {
    if (mobile.style.display === "block") {
        mobile.style.display = "none";
    } else {
        mobile.style.display = "block";
    }
    };
