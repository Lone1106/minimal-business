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
const clearCartButton = document.querySelector(".clear-cart");

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
        id: "1",
        price: 4.99,
        title: "Product 1",
        image: new URL("img/1.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: "2",
        price: 10.99,
        title: "Product 2",
        image: new URL("img/2.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: "3",
        price: 499.99,
        title: "Product 3",
        image: new URL("img/3.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: "4",
        price: 0.99,
        title: "Product 4",
        image: new URL("img/4.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: "5",
        price: 1.99,
        title: "Product 5",
        image: new URL("img/5.png", import.meta.url),
        description:
            "Description for the current product will go in here. Dont make it too long though!",
    },
    {
        id: "6",
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
                                class="w-full"
                                src="${product.image}"
                                alt="Image of ${product.title}"
                                loading="lazy"
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
                                    class="add bg-black text-white font-bebas px-3 py-1 rounded border-2 border-solid border-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black transition"
                                    data-identifier="${product.id}"
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

// ADD TO CART
let cartItems = [];
const addButtons = document.querySelectorAll(".add").forEach((button) => {
    let itemKey = Number(button.dataset.identifier);
    button.addEventListener("click", () => {
        let newItem = JSON.parse(JSON.stringify(products[itemKey - 1]));
        let filter = cartItems.find((x) => x.id === newItem.id);
        if (!!filter) {
            filter.quantity++;
        } else {
            newItem.quantity = 1;
            cartItems.push(newItem);
        }
        createCartItems();
    });
});

function createCartItems() {
    cartList.innerHTML = "";
    cartItems.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("flex", "justify-between", "items-center");
        li.innerHTML = `
            <span>${item.title}</span>
            <input type="number" min="0" max="10" placeholder="1" value="${
                item.quantity
            }" class="quan w-10 text-center" data-ident=${item.id} />
            <span class="w-20 text-right">${(
                item.price * item.quantity
            ).toFixed(2)} €</span>
        `;
        cartList.appendChild(li);
        handleQuantity();
    });
    calculateTotal();
}

function handleQuantity() {
    const quantityEl = document.querySelectorAll(".quan").forEach((el) => {
        el.addEventListener("change", (e) => {
            let ident = e.target.dataset.ident;
            let newQuantity = Number(e.target.value);
            let filter = cartItems.findIndex((x) => x.id === ident);

            if (newQuantity < 1) {
                if (filter !== -1) cartItems.splice(filter, 1);
            } else {
                cartItems.find((x) => x.id === ident).quantity = newQuantity;
            }

            createCartItems();
        });
    });
}

function calculateTotal() {
    let total = 0;
    cartItems.forEach((item) => {
        let curr = item.quantity * item.price;
        total += curr;
    });
    cartTotal.innerHTML = `${total.toFixed(2)} €`;
}

function buyItemsNow() {
    cartList.innerHTML = "";
    cartItems = [];
    cartTotal.innerHTML = "0 €";
    setTimeout(() => alert("Thanks for shopping with us!"), 200);
}
buyNow.onclick = buyItemsNow;
