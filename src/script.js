const mobileNav = document.querySelector(".mobile-nav");
const navItems = document.querySelectorAll(".nav-item");
const navItemsMobile = document.querySelectorAll(".nav-item-mo");
const copy = document.querySelector(".copy");
const cart = document.querySelector(".cart");
const buyNow = document.querySelector(".buy-now");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const openCloseNav = document.querySelectorAll(".open-close-nav");
const openCloseCart = document.querySelectorAll(".open-close-cart");
const productsGrid = document.querySelector(".products-grid");

// COPY YEAR FOOTER
let year = new Date().getFullYear();
copy.innerHTML = year;

//OPEN/CLOSE CART/MOBNAV- ACTIVE CLASSES
openCloseNav.forEach((button) => {
    button.addEventListener("click", () => {
        mobileNav.classList.toggle("menu-open");
    });
});

openCloseCart.forEach((button) => {
    button.addEventListener("click", () => {
        cart.classList.toggle("menu-open");
    });
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

// SHOPPING CART AND PRODUCTS
const products = [
    {
        id: 1,
        price: 4.99,
        title: "Product 1",
        image: new URL("img/1.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: 2,
        price: 10.99,
        title: "Product 2",
        image: new URL("img/2.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: 3,
        price: 499.99,
        title: "Product 3",
        image: new URL("img/3.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: 4,
        price: 0.99,
        title: "Product 4",
        image: new URL("img/4.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: 5,
        price: 1.99,
        title: "Product 5",
        image: new URL("img/5.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: 6,
        price: 19.99,
        title: "Product 6",
        image: new URL("img/6.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
];

function createProducts() {
    products.forEach((product) => {
        let newFigure = document.createElement("figure");
        newFigure.classList.add(
            "w-full",
            "h-full",
            "rounded",
            "border-solid",
            "border-black",
            "border-2"
        );

        newFigure.innerHTML = `
            <div class="overflow-hidden">
                            <img
                                class="h-full"
                                src="${product.image}"
                                alt="Product image"
                            />
                        </div>
                        <div class="p-4">
                            <h3 class="font-bebas text-2xl">${product.title}</h3>
                            <p class="font-roboto">${product.description}</p>
                            <div
                                class="pt-4 flex justify-end gap-4 items-center"
                            >
                                <p class="font-bebas text-xl">${product.price} €</p>
                                <button
                                    class="bg-black text-white font-bebas px-3 py-1 rounded border-2 border-solid border-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black transition"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
        `;

        productsGrid.appendChild(newFigure);
    });
}
createProducts();
