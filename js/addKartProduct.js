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
      .catch((error) =>
        console.error(`Error loading ${component.url}:`, error)
      );
  });
});

// Function to get query parameter
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

var simiCategory;
// Function to create product card
function createSearchProductCard(product) {
  simiCategory = product.category;
  const discont = (Math.floor(product.rating * (parseInt((product.price.toString()).slice(0, 2))) / 10));
  const afterDiscontPrice = Math.round((100 - discont) * product.price / 100);

  function formatIndianRupee(number) {
    const parts = number.toString().split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedNumber = parts.length > 1 ? integerPart + "." + parts[1] : integerPart;
    return formattedNumber;
  }

  return `
  <style>
  .products_kart img:hover{transform:scale(1.1)}.products_kart{font-size:medium;display:flex;flex-direction:column;}.rating{background-color:green;width:fit-content;padding:0 16px;border-radius:5px;color:#fff}.products_kart .product_Img{height:150px}.products_kart img{padding:1px;width:100%;height:100%;object-fit:contain}
  </style>
            <div class="col-md-6">
              <div class="container">
                <div class="text-center img-fluid" style="height:400px" ;>
                    <img class="p-3" src="../json-api/product-img/${product.productImg}"
                        style="width: 100%; height: 100%; object-fit: contain;" alt="${product.name}">
                </div>
                <div>
                  <a class="btn btn-primary" style="width: 48%" href="../viewcart/?query=${product.name}"> <img src="../img/svg/cart_h.svg">&nbsp Add To Cart</a>
                  <a class="btn btn-danger" style="width: 48%" href="checkout.html"><img src="../img/svg/electricity.svg">&nbspBuy Now</a>
                </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class=" products_kart">
                  <div class="mt-2 card-title">${product.name}</div>
                  <div class=" rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
                  <span class="text-success mt-2">Special price</span>
                  <div class=""><strong class="fs-3">₹${formatIndianRupee(afterDiscontPrice)}</strong> <del style="color:#878787">₹${formatIndianRupee(product.price)}</del> <span style="color:#388e3c"> ${discont}% off </span></div>
                  <div>
                  <div class="text-success">Available offers</div>
                  Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C <br>
                  Bank Offer5% Cashback on Flipkart Axis Bank CardT&C<br>
                  Special PriceGet extra 12% off (price inclusive of cashback/coupon)T&C<br>
                  <span class="text-primary">View 12 more offers</span>
                  </div>
                  <div>
                  Warranty
                  Covers Manufacturing Defects  Know More
                  </div>
                  </br></br>
                  <div class="card-title"><strong>${product.description}</strong></div>
                  </br></br>
                </div>                
            </div>      
    `;
}

// Function to create similar product cards
function createSearchSimilarProducts(product) {
  const discont = (Math.floor(product.rating * (parseInt((product.price.toString()).slice(0, 2))) / 10));
  const afterDiscontPrice = Math.round((100 - discont) * product.price / 100);

  function formatIndianRupee(number) {
    const parts = number.toString().split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedNumber = parts.length > 1 ? integerPart + "." + parts[1] : integerPart;
    return formattedNumber;
  }

  return `
  <style>
  .productsSimi div{font-size:14px}.productsSimi img:hover{transform:scale(1.1)}.productsSimi{font-size:medium;display:flex;flex-direction:column;align-items:center}.rating{background-color:green;width:fit-content;padding:0 16px;border-radius:5px;color:#fff}.productsSimi .product_Img{height:150px}.productsSimi img{padding:1px;width:100%;height:100%;object-fit:contain}
  </style>
    <a class="btn col-lg-2 col-md-3 col-sm-4 col-6 p-2" href="?query=${product.name}">
        <div class="productsSimi">
            <div class="text-center product_Img img-fluid">
                <img src="../json-api/product-img/${product.productImg}" alt="${product.id}">
            </div>
            <div class="text-center card-title pt-1">${product.name.slice(0, 20)} ${product.name.length > 20 ? "<b>...</b>" : ""}</div>
            <div class="text-center mb-1 rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
            <div class="text-center"><strong>₹${formatIndianRupee(afterDiscontPrice)}</strong> <del style="color:#878787">₹${formatIndianRupee(product.price)}</del> <span style="color:#388e3c"> ${discont}% off </span></div>
        </div>
    </a>
  `;
}

// Function to display search results
function searchFetch(products) {
  const searchList = document.getElementById("addkart");
  searchList.innerHTML = products
    .map((product) => createSearchProductCard(product))
    .join("");
}

// Function to display similar products
function searchFetchSimi(products) {
  const searchList = document.getElementById("similarProducts");
  searchList.innerHTML = products
    .map((product) => createSearchSimilarProducts(product))
    .join("");
}

// Fetch data from the JSON file and filter products based on the query
fetch("../json-api/product.json")
  .then((response) => response.json())
  .then((data) => {
    const query = getQueryParameter("query");
    const filteredProducts = data.filter((product) => product.name == query);
    searchFetch(filteredProducts);
    setInterval(() => {
      const filteredProductsSimi = data.filter((product) => product.category == simiCategory);
      searchFetchSimi(filteredProductsSimi.slice(0, 12));
    }, 1500);
  })
  .catch((error) => console.error("Error fetching data:", error));

// Header search bar search function
setTimeout(() => {
  const inputField_h = document.getElementById('inputField_h');
  const fetchButton_h = document.getElementById('fetchButton_h');

  function fetchValue_h() {
    const value = inputField_h.value;
    window.location.href = `../search/?query=${value}`;
  }

  fetchButton_h.addEventListener('click', fetchValue_h);

  inputField_h.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      fetchValue_h();
    }
  });
}, 500);
