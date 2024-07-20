// Existing code...

const today = new Date();
const nextThreeDays = new Date(today);
nextThreeDays.setDate(today.getDate() + 3);

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[nextThreeDays.getDay()];
const date = nextThreeDays.toLocaleDateString();

// Cart JS

// Function to save data to local storage
function saveToLocalStorage(key, newData) {
    let existingData = getFromLocalStorage(key) || [];

    // Check for duplicates and add only unique products
    newData.forEach(newProduct => {
        const isDuplicate = existingData.some(existingProduct => existingProduct.name === newProduct.name);
        if (!isDuplicate) {
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
    searchList.innerHTML = products.map((product, index) => fetchCartData(product, index)).join(""); // Added index parameter to the map function

    // Add event listeners for remove buttons
    document.querySelectorAll('.cartItmSfLRmBtn.remove').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            confirmRemoveItem(productName);
        });
    });

    updateCartDisplay(products);
    updatePriceDetail(products);
}

let totalPrice = 0;
let totalItems = 0;

// Function to generate HTML for a cart item
function fetchCartData(item, index) { // Added index parameter to the function
    totalItems += 1;
    totalPrice += item.price;

    const discount = (Math.floor(item.rating * (parseInt((item.price.toString()).slice(0, 2))) / 10));
    const afterDiscountPrice = Math.round((100 - discount) * item.price / 100);

    function formatIndianRupee(number) {
        const parts = number.toString().split(".");
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!d))/g, ",");
        const formattedNumber = parts.length > 1 ? integerPart + "." + parts[1] : integerPart;
        return formattedNumber;
    }

    return `
  <div class="cartItmListInviewCart bg-white">
    <div class="itemInCart d-flex p-3 m-1">
      <div style="height: 60px; width: 112px;" class="m-3 d-flex justify-content-center">
        <img src="https://raw.githubusercontent.com/csathnere/APIs/main/json-ec/product-img/${item.productImg}" style="width: auto; height: 80px; object-fit: contain;" alt="${item.name}">
      </div>
      <div class="itemDetail">
        <div>
          <p>${item.name}</p>
          <p> Forest Green Strap, Regular</p>
          <p> Seller: Ezig </p>
        </div>
        <div class=""><strong>₹${formatIndianRupee(afterDiscountPrice)}</strong> <del style="color:#878787">₹${formatIndianRupee(item.price)}</del> <span style="color:#388e3c"> ${discount}% off </span>
        <span class="text-success">1 offer applied</span>
        </div>
      </div>
      <div class="deliveryDate">
        Delivery by ${dayOfWeek}, ${date} | <del>₹40</del> Free
      </div>
    </div>
    <div class="cartItmRmPMdiv container-fluid pt-2 pb-2" style="border-top:1px solid #f1f3f6">
      <div class="row">
        <div class="plusMinItm col-sm-6">
          <div class="d-flex justify-content-center align-items-center">
            <button class="cartItmPMBtn" onclick="decreaseQuantity(${index})">–</button>&nbsp <!-- Added onclick event with index parameter -->
            <div class="cartItmQty"><input type="text" class="text-center input" value="1" id="quantity-${index}" style="width:50px; border: 1px solid #f1f3f6"></div>&nbsp <!-- Added id with index parameter -->
            <button class="cartItmPMBtn" onclick="increaseQuantity(${index})">+</button> <!-- Added onclick event with index parameter -->
          </div>
        </div>
        <div class="cartItmSfLRm d-flex justify-content-around align-items-center col-sm-6">
          <div class="cartItmSfLRmBtn">Save for later</div>
          <div class="cartItmSfLRmBtn remove" data-name="${item.name}">Remove</div>
        </div>
      </div>
    </div>
  </div>
  `;
}

// Function to increase the quantity of a specific item
function increaseQuantity(index) { // Added function to handle increasing quantity
    const input = document.getElementById(`quantity-${index}`); // Use index to target specific input
    input.value = Number(input.value) + 1;
}

// Function to decrease the quantity of a specific item
function decreaseQuantity(index) { // Added function to handle decreasing quantity
    const input = document.getElementById(`quantity-${index}`); // Use index to target specific input
    const currentValue = Number(input.value);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    } else {
        const productName = input.closest('.cartItmListInviewCart').querySelector('.remove').getAttribute('data-name');
        confirmRemoveItem(productName);
    }
}

// Function to confirm and remove an item from the cart
function confirmRemoveItem(name) {
    const confirmRemove = confirm(`Are you sure you want to remove "${name}" from the cart?`);
    if (confirmRemove) {
        removeItem(name);
    }
}

// Function to remove an item from the cart
function removeItem(name) {
    let existingData = getFromLocalStorage("filteredProducts") || [];
    const updatedData = existingData.filter(item => item.name !== name);
    localStorage.setItem("filteredProducts", JSON.stringify(updatedData));

    // Update the displayed cart and price details
    searchFetch(updatedData);

    // Show success popup
    showPopup(`"${name}" has been removed from your cart successfully.`);
}

// Function to show a popup message
function showPopup(message) {
    const popup = document.getElementById('popupCartItem');
    popup.textContent = message;
    popup.classList.remove('hidden');
    popup.classList.add('visible');

    // Hide the popup after 1 second
    setTimeout(() => {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
    }, 3000);
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

// Function to update the price detail section
function updatePriceDetail(products) {
    function formatIndianRupee(number) {
        const parts = number.toString().split(".");
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!d))/g, ",");
        const formattedNumber = parts.length > 1 ? integerPart + "." + parts[1] : integerPart;
        return formattedNumber;
    }
    totalItems = products.length;
    totalMRP = products.reduce((acc, item) => acc + (item.price), 0);
    totalPrice = products.reduce((acc, item) => acc + (Math.round((100 - ((Math.floor(item.rating * (parseInt((item.price.toString()).slice(0, 2))) / 10)))) * item.price / 100)), 0);
    totalDiscount = totalMRP - totalPrice

    let priceDetail = `
    <div style="display: flex; flex-direction: column;">
      <div class="d-flex justify-content-between">
        <div>Price (${totalItems} items) </div>
        <div>₹${formatIndianRupee(totalMRP)}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Discount </div>
        <div>₹${formatIndianRupee(totalDiscount)}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Delivery Charges </div>
        <div>Free</div>
      </div>
      <div class="d-flex justify-content-between">
        <div><strong>Total Amount</strong></div>
        <div>₹${formatIndianRupee(totalPrice)}</div>
      </div>
    </div>`

    document.getElementById("priceDetail").innerHTML = priceDetail;
}

// Fetch and display data
fetch("https://raw.githubusercontent.com/csathnere/APIs/main/json-ec/product.json")
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
    })
    .catch(error => console.error("Error fetching data:", error));