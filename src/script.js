const mobileNavOpen = document.querySelector(".open");
const mobileNavClose = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const navItems = document.querySelectorAll(".nav-item");
const navItemsMobile = document.querySelectorAll(".nav-item-mo");
const copy = document.querySelector(".copy");

let year = new Date().getFullYear();
copy.innerHTML = year;

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
