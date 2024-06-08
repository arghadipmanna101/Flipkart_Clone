// Date and Time
const today = new Date();
const nextThreeDays = new Date(today);
nextThreeDays.setDate(today.getDate() + 3);

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[nextThreeDays.getDay()];
const date = nextThreeDays.toLocaleDateString();

// Function to save data to local storage
function saveToLocalStorage(key, newData) {
    let existingData = getFromLocalStorage(key) || [];

    newData.forEach(newProduct => {
        const isDuplicate = existingData.some(existingProduct => existingProduct.name === newProduct.name);
        if (!isDuplicate) {
            newProduct.quantity = newProduct.quantity || 1;  // Initialize quantity
            existingData.push(newProduct);
        }
    });

    localStorage.setItem(key, JSON.stringify(existingData));
}

// Function to retrieve data from local storage
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// Function to get query parameter
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to display search results
function searchFetch(products) {
    const searchList = document.getElementById("itemsInCart");
    searchList.innerHTML = products.map(product => fetchCartData(product)).join("");
    updatePriceDetail();  // Update price detail after rendering products
}

let totalPrice = 0;
let totalItems = 0;

// Function to generate HTML for a cart item
function fetchCartData(item) {
    const storedQuantity = parseInt(localStorage.getItem(`quantity-${item.name}`)) || item.quantity || 1;
    totalItems += storedQuantity;
    totalPrice += item.price * storedQuantity;

    return `
        <div class="itemInCart d-flex bg-white p-3 m-1">
            <div style="height: 112px; width: 112px;" class="m-3">
                <img src="../json-api/product-img/${item.productImg}" style="width: auto; height: 112px; object-fit: contain;" alt="${item.name}">
            </div>
            <div class="itemDetail">
                <div>
                    <p>${item.name}</p>
                    <p> Forest Green Strap, Regular</p>
                    <p> Seller: Ezig </p>
                </div>
                <div>
                    <b>₹${item.price}</b> 1 offer applied
                </div>
            </div>
            <div class="deliveryDate">
                Delivery by ${dayOfWeek}, ${date} | <del>₹40</del> Free
                <div class="quantity-container" style="width: 30px; display: flex; align-items:center; margin-top:25px;">
                    <button style="background-color: #fb641b; color:#ffffff; font-size: 18px; border-radius: 2px; margin-right: 15px;" class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <input style="width: 50px; text-align: center;" id="quantity-${item.name}" class="quantity-input" type="text" value="${storedQuantity}" readonly>
                    <button style="background-color: #fb641b; color:#ffffff; font-size: 18px; border-radius: 2px; margin-left: 15px;"  class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                </div>
            </div>
        </div>
    `;
}

// Function to show or hide cart based on product list
function updateCartDisplay(filteredProducts) {
    let cartInProduct = document.getElementById("cardInProduct");
    let cartisEmpty = document.getElementById("cardisEmpty");

    if (filteredProducts.length === 0) {
        cartInProduct.style.display = "none";
        cartisEmpty.style.display = "block";
    } else {
        cartInProduct.style.display = "block";
        cartisEmpty.style.display = "none";
    }
}

// Function to update the quantity and store in local storage
function updateQuantity(name, change) {
    const quantityInput = document.getElementById(`quantity-${name}`);
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity = currentQuantity + change;

    if (currentQuantity < 1) {
        currentQuantity = 1;  // Prevent quantity from going below 1
    } else {
        quantityInput.value = currentQuantity;
        localStorage.setItem(`quantity-${name}`, currentQuantity);

        // Update total price and total items
        const productData = getFromLocalStorage("filteredProducts").find(product => product.name === name);
        const itemPrice = productData.price;

        totalItems += change;
        totalPrice += itemPrice * change;

        // Update price detail
        updatePriceDetail();
    }
}

// Function to update price detail
function updatePriceDetail() {
    let priceDetail = `
    <div style="display: flex; flex-direction: column;">
        <div class="d-flex justify-content-between">
            <div>Price (${totalItems} items) </div>
            <div>₹${totalPrice}</div>
        </div>
        <div class="d-flex justify-content-between">
            <div>Discount </div>
            <div>0</div>
        </div>
        <div class="d-flex justify-content-between">
            <div>Delivery Charges </div>
            <div>Free</div>
        </div>
        <div class="d-flex justify-content-between">
            <div>Total Amount </div>
            <div><b>₹${totalPrice}</b></div>
        </div>
        <div>You will save ₹110 on this order</div>
    </div>
    `;
    document.getElementById("priceDetail").innerHTML = priceDetail;
}

// Fetch data from the JSON file and filter products based on the query
fetch("../json-api/product.json")
    .then(response => response.json())
    .then(data => {
        const query = getQueryParameter("query");
        const filteredProducts = data.filter(product => product.name === query);

        // Save filtered products to local storage without overwriting existing data
        saveToLocalStorage("filteredProducts", filteredProducts);

        // Retrieve updated filtered products from local storage
        const savedFilteredProducts = getFromLocalStorage("filteredProducts");

        // Display the filtered products
        searchFetch(savedFilteredProducts);

        // Update cart display based on filtered products
        updateCartDisplay(savedFilteredProducts);
    })
    .catch(error => console.error("Error fetching data:", error));

// Restore quantities on page load
document.addEventListener("DOMContentLoaded", () => {
    const components = [
        { id: "footer-addkart", url: "../footer/footer.html" },
        { id: "header-addkart", url: "../header/header.html" },
    ];

    components.forEach((component) => {
        fetch(component.url)
            .then((response) => response.text())
            .then((data) => {
                document.getElementById(component.id).innerHTML = data;
            })
            .catch((error) => console.error(`Error loading ${component.url}:`, error));
    });

    // Restore quantities from localStorage
    const items = getFromLocalStorage("filteredProducts");
    if (items) {
        searchFetch(items);
    }
});
