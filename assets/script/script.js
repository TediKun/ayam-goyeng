//### Hamburger Navbar
const barsMenu = document.querySelector(".bars-menu");
const navbarMenu = document.querySelector(".nav-navbar");
const navLink = document.querySelectorAll(".nav-link");
barsMenu.addEventListener("click", a => {
    navbarMenu.classList.toggle("active");
    a.preventDefault();
});
//### Search Navbar
const searchBtn = document.querySelector(".search");
const searchNavbar = document.querySelector(".search-navbar");
searchBtn.addEventListener("click", a => {
    searchNavbar.classList.toggle("active");
    a.preventDefault();
});
//###
//### Shopping Card
const shopBtn = document.querySelector(".shop");
const shoppingSlide = document.querySelector(".shopping-slide");
shopBtn.addEventListener("click", a => {
    shoppingSlide.classList.toggle("active");
    a.preventDefault();
});
//###
document.addEventListener("click", function (a) {
    if (!navbarMenu.contains(a.target) && !barsMenu.contains(a.target)) {
        navbarMenu.classList.remove("active");
    }
    if (!searchBtn.contains(a.target) && !searchNavbar.contains(a.target)) {
        searchNavbar.classList.remove("active");
    }
    if (!shoppingSlide.contains(a.target) && !shopBtn.contains(a.target)) {
        shoppingSlide.classList.remove("active");
    }
});
navLink.forEach(function (val, i) {
    navLink[i].addEventListener("click", () => {
        navbarMenu.classList.remove("active");
    });
});
//###
//### Scroll Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});
//###

//### Menu Masuk Keranjang
const imgMenu = document.querySelectorAll(".image-menu");
const menuHover = document.querySelectorAll(".hover_menu");
const btnKeranjang = document.querySelectorAll("#add-cart");

imgMenu.forEach(function (val, i) {
    val.addEventListener("mouseover", i => {
        menuHover.forEach(function (val, i, a) {
            val.classList.toggle("active");
        });
    });
});
