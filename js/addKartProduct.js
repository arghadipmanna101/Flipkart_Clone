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

// Function to create product card
function createSearchProductCard(product) {
  return `
            <div class="col-md-6">
                <div class="text-center img-fluid" style="height:300px" ;>
                    <img class="p-3" src="../json-api/product-img/${product.productImg}"
                        style="width: 100%; height: 100%; object-fit: contain;" alt="${product.name}">
                </div>
            </div>
            <div class="col-md-6">
                <div class=" products">
                  <div class="text-center card-title">${product.name}</div>
                  <div class="text-center">Price: ₹${product.price}</div>
                  <div class="text-center rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
                  </br></br>
                  <div class="text-center card-title">${product.description}</div>
                  </br></br>
                </div>
                <div>
                  <a class="btn btn-primary" href="../viewcart/?query=${product.name}">Add To Cart</a>
                  <button class="btn btn-danger">Buy Now</button>
                </div>
            </div>       
    `;
}

// Function to display search results
function searchFetch(products) {
  const searchList = document.getElementById("addkart");
  searchList.innerHTML = products
    .map((product) => createSearchProductCard(product))
    .join("");
}

// Fetch data from the JSON file and filter products based on the query
fetch("../json-api/product.json")
  .then((response) => response.json())
  .then((data) => {
    const query = getQueryParameter("query");
    const filteredProducts = data.filter((product) => product.name == query);
    searchFetch(filteredProducts);
    console.log(query)
  })
  .catch((error) => console.error("Error fetching data:", error));
