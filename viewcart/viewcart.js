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
  const searchList = document.getElementById("itemsInCart");
  searchList.innerHTML = products.map(product => fetchCartData(product)).join("");

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
  totalItems += 1;
  totalPrice += item.price;

  return `
  <div class="cartItmListInviewCart bg-white">
    <div class="itemInCart d-flex p-3 m-1">
      <div style="height: 112px; width: 112px;" class="m-3">
        <img src="../json-api/product-img/${item.productImg}" style="width: auto; height: 80px; object-fit: contain;" alt="${item.name}">
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
      </div>
    </div>
    <div class="cartItmRmPMdiv container-fluid pt-2 pb-2" style="border-top:1px solid #f1f3f6">
      <div class="row">
        <div class="plusMinItm col-sm-6">
          <div class="d-flex justify-content-center align-items-center">
            <button class="cartItmPMBtn" disabled=""> – </button>
            <div class="cartItmQty"><input type="text" class="text-center" value="1" style="width:50px"></div>
            <button class="cartItmPMBtn"> + </button>
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

// Function to update the quantity and store in local storage
function updateQuantity(name, change) {
    const quantityInput = document.getElementById(`quantity-${name}`);
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity = currentQuantity + change;
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
  totalItems = products.length;
  totalPrice = products.reduce((acc, item) => acc + item.price, 0);

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
      <div>You will save ₹40 on this order</div>
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
    // Display the filtered products
    searchFetch(savedFilteredProducts);
  })
  .catch(error => console.error("Error fetching data:", error));

// end
//Date and Time
const today = new Date();
const nextThreeDays = new Date(today);
nextThreeDays.setDate(today.getDate() + 3);

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[nextThreeDays.getDay()];
const date = nextThreeDays.toLocaleDateString();

//Cart JS
//Function to save data to local storage
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
  searchList.innerHTML = products.map(product => fetchCartData(product)).join("");

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
function fetchCartData(item) {
  totalItems += 1;
  totalPrice += item.price;

  return `
  <div class="cartItmListInviewCart bg-white">
    <div class="itemInCart d-flex p-3 m-1">
      <div style="height: 112px; width: 112px;" class="m-3">
        <img src="../json-api/product-img/${item.productImg}" style="width: auto; height: 80px; object-fit: contain;" alt="${item.name}">
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
      </div>
    </div>
    <div class="cartItmRmPMdiv container-fluid pt-2 pb-2" style="border-top:1px solid #f1f3f6">
      <div class="row">
        <div class="plusMinItm col-sm-6">
          <div class="d-flex justify-content-center align-items-center">
            <button class="cartItmPMBtn" disabled=""> – </button>
            <div class="cartItmQty"><input type="text" class="text-center" value="1" style="width:50px"></div>
            <button class="cartItmPMBtn"> + </button>
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
  totalItems = products.length;
  totalPrice = products.reduce((acc, item) => acc + item.price, 0);

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
      <div>You will save ₹40 on this order</div>
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
  })
  .catch(error => console.error("Error fetching data:", error));
// end
