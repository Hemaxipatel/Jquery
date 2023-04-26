// let togglebtn = document.querySelector(".toggle_btn");
// let nav_bar = document.querySelector(".nav-bar");
// let icon = document.querySelector(".fa-bars");

// togglebtn.addEventListener("click", function () {
//     nav_bar.classList.toggle("nav-change");

//     if (nav_bar.classList.contains("nav-change") == true) {
//         icon.classList.remove("fa-bars");
//         icon.classList.add("fa-xmark");
//     }
//     else {
//         icon.classList.remove("fa-xmark");
//         icon.classList.add("fa-bars");
//     }
// });

$(document).ready(function () {
    $icon = $(".fa-bars")
    $navbar = $(".nav-bar")
    $(".toggle_btn").click(function () {
        $(".nav-bar").toggleClass("nav-change")

        if ($navbar.hasClass("nav-change") == true) {
            $icon.removeClass("fa-bars")
            $icon.addClass("fa-xmark")
        } else {
            $icon.removeClass("fa-xmark")
            $icon.addClass("fa-bars")
        }
    })
})

// change menubar bg color when it scroll

// function changebg() {
//     let header = document.querySelector("header");
//     let current = window.scrollY;

//     if (current > 0) {
//         header.classList.add("header-fixed")
//     }
//     else {
//         header.classList.remove("header-fixed")
//     }
// }
// window.addEventListener("scroll", changebg);

$(document).ready(function () {
    $header = $("#topheader")
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $header.addClass("header-fixed")
        } else {
            $header.removeClass("header-fixed")
        }
    })
})
