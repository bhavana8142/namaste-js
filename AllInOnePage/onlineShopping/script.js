// Elements reference
const cartTag = document.getElementById("product-container");
const removeTag = document.getElementById("Remove-container");
const feedbackEle = document.getElementById("feedback");
const totalAmount = document.getElementById("totalPrice");
const clearCartBtn = document.getElementById("clearCart");
const sortCarts = document.getElementById("sortCarts");

// default products

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
    },
    {
        id: 2,
        name: "phone",
        price: 20000,
    },
    {
        id: 3,
        name: "tablet",
        price: 15000,
    },
];
//empty cart
const cart = [];
// used to reset the timer
let timerId;

clearCartBtn.addEventListener("click", clearCart);

sortCarts.addEventListener("click", sortCart);

// clear cart
function clearCart() {
    cart.length = 0;
    renderCartDetails();
    updateFeedBack("cart was cleared", "success");
}
function sortCart() {
    cart.sort((item1, item2) => item1.price - item2.price);
    renderCartDetails();
}
function renderingDeatils() {
    products.forEach(function (product) {
        // const itembox = ` <div class="product-row">
        //                      <p>${product.name} RS ${product.price}</p>
        //                        <button>Add to cart</button></div>`;

        // cartTag.insertAdjacentHTML("beforeend", itembox);
        const { id, name, price } = product;

        const divElement = document.createElement("div");
        divElement.className = "product-row";
        divElement.innerHTML = `<p>${name} RS ${price}</p>
                            <button onclick = "addTocart(${id})">Add to cart</button>`;
        cartTag.appendChild(divElement);
    });
}
function renderCartDetails() {
    removeTag.innerHTML = "";
    cart.forEach(function (product) {
        const { id, name, price } = product;
        const divElement2 = document.createElement("div");
        divElement2.className = "product-row";
        divElement2.innerHTML = `<p> ${name} RS ${price} </p>
                        <button onclick="removeFromCart(${id})">Remove </button>`;
        removeTag.appendChild(divElement2);
    });
    // let totalPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     totalPrice += cart[i].price;

    // }

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
    totalAmount.textContent = ` RS ${totalPrice} `;
}

// Add to cart
function addTocart(id) {
    const isproductavailble = cart.some((product) => id === product.id);
    if (isproductavailble) {
        const alreadyAddedProduct = cart.find((product) => id === product.id);
        updateFeedBack(
            `${alreadyAddedProduct.name} is already  added to the cart`,
            "error",
        );
        return;
    }
    const productToAdd = products.find((product) => product.id === id);
    cart.push(productToAdd);
    renderCartDetails();
    updateFeedBack(`${productToAdd.name} is added to the cart`, "success");
}
function removeFromCart(id) {
    // const removeCart = products.find((product) => product.id === id);
    // console.log(removeCart);
    const product = cart.find((product) => id === product.id);
    const productiIndex = cart.findIndex((product) => product.id === id);
    const updatedCart = cart.splice(productiIndex, 1);

    updateFeedBack(`${product.name} is remove from the cart`, "error");

    renderCartDetails();
}


function updateFeedBack(msg, type) {
    clearTimeout(timerId);
    feedbackEle.style.display = "block";
    if (type === "success") {
        feedbackEle.style.backgroundColor = "green";
    }
    if (type === "error") {
        feedbackEle.style.backgroundColor = "red";
    }
    feedbackEle.textContent = msg;
    timerId = setTimeout(() => {
        feedbackEle.style.display = "none";
    }, 3000);
}

// rendering product
renderingDeatils();
