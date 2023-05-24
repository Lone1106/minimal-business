const mobileNavOpen = document.querySelector(".open");
const mobileNavClose = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const navItems = document.querySelectorAll(".nav-item");
const navItemsMobile = document.querySelectorAll(".nav-item-mo");
const copy = document.querySelector(".copy");
const cart = document.querySelector(".cart");
const cartOpen = document.querySelector(".cart-open");
const cartClose = document.querySelector(".cart-close");
const buyNow = document.querySelector(".buy-now");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");

// COPY YEAR FOOTER
let year = new Date().getFullYear();
copy.innerHTML = year;

// MOBILE NAVIGATION OPEN - CLOSE - ACTIVE CLASSES
mobileNavOpen.addEventListener("click", () => {
    mobileNav.classList.add("menu-open");
});

mobileNavClose.addEventListener("click", () => {
    mobileNav.classList.remove("menu-open");
});

navItems.forEach((i) => {
    i.addEventListener("click", () => {
        mobileNav.classList.remove("menu-open");

        navItems.forEach((item) => item.classList.remove("active-nav"));

        i.classList.add("active-nav");
    });
});

navItemsMobile.forEach((i) => {
    i.addEventListener("click", () => {
        mobileNav.classList.remove("menu-open");

        navItemsMobile.forEach((item) => item.classList.remove("active-nav"));

        i.classList.add("active-nav");
    });
});

// SHOPPING CART OPEN - CLOSE
cartOpen.addEventListener("click", () => {
    cart.classList.add("menu-open");
});

cartClose.addEventListener("click", () => {
    cart.classList.remove("menu-open");
});

// SHOPPING CART BEHAVIOUR
const products = [];
const shoppingCartItems = [];