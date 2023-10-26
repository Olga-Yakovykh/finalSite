"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let burger = document.querySelector('.burger');
    let headerMenu = document.querySelector('.header_menu');
    let body = document.documentElement;

    // Function to close the menu
    function closeMenu() {
        burger.classList.remove('active');
        headerMenu.classList.remove('active');
        body.classList.remove('lock');
    }

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    let menuLinks = document.querySelectorAll('.header_menu a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    // Function to smoothly scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", scrollToTop);
});

// Обработчик события прокрутки страницы
window.addEventListener("scroll", function () {
    var banner = document.getElementById("banner");
    var bannerTop = banner.getBoundingClientRect().top;
    var windowBottom = window.innerHeight;

    // Если верхняя граница секции banner видима в окне браузера, добавьте класс "active" для секции
    if (bannerTop < windowBottom) {
        banner.classList.add("active");
    } else {
        banner.classList.remove("active");
    }
});






