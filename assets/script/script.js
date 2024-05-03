//### Hamburger Navbar
const barsMenu = document.querySelector(".bars-menu");
const navbarMenu = document.querySelector(".nav-navbar");
const navLink = document.querySelectorAll(".nav-link");
barsMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});
document.addEventListener("click", function (a) {
    if (!navbarMenu.contains(a.target) && !barsMenu.contains(a.target)) {
        navbarMenu.classList.remove("active");
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
