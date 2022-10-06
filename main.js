const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCart = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");




menuEmail.addEventListener("click", toggleDesktopMenu);
iconHamMenu.addEventListener("click", toggleMobileMenu);
iconCart.addEventListener("click", toggleIconCart);



function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    shoppingCart.classList.add("inactive");
};

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    shoppingCart.classList.add("inactive");
};

function toggleIconCart() {
    shoppingCart.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
};