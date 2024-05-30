document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "content-page", url: "components/pages/content-page.html" },
    { id: "footer", url: "components/footer/footer.html" },
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
// end -footer

// product fetch
// Function to create a product card
function createProductCard(product) {
  return `
    <a class="btn col-lg-2 col-md-2 col-sm-4 col-6 p-2" href="##"> 
      <div class="products">
          <div class="text-center img-fluid"><img src="../assets/json-api/product-img/${product.productImg}" height="150px"
              alt="${product.id}">
          </div>
          <div class="text-center card-title">${product.name}</div>
          <div class="text-center">${product.rating}</div>
          <div class="text-center">Price: ₹${product.price}</div>
        </div>
      </a>
  `;
}

// Function to populate rendom products
function rendom_products(products) {
  const productList = document.getElementById("rendom-product");
  productList.innerHTML = products
    .map((product) => createProductCard(product))
    .join("");
}

// Function to best deal products
function best_deal_products(products) {
  const productList = document.getElementById("best-deal-product");
  productList.innerHTML = products
    .map((product) => createProductCard(product))
    .join("");
}
// Function to best top-selection-product
function top_selection_products(products) {
  const productList = document.getElementById("top-selection-product");
  productList.innerHTML = products
    .map((product) => createProductCard(product))
    .join("");
}

// General function to fetch and shuffle data
function fetchAndShuffleData(url, callback, numberOfProducts) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Shuffle the array using the Fisher-Yates algorithm
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }

      // Select the desired number of products from the shuffled array
      const selectedProducts = data.slice(0, numberOfProducts);

      // Call the callback function with the selected products
      callback(selectedProducts);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Fetch data for best-deal products  rendom products & top selection
fetchAndShuffleData("../assets/json-api/product.json", rendom_products, 12);
fetchAndShuffleData("../assets/json-api/product.json", best_deal_products, 18);
fetchAndShuffleData(
  "../assets/json-api/product.json",
  top_selection_products,
  12
);
