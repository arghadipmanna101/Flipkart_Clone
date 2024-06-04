document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "footer-searchtab", url: "../footer/footer.html" },
    { id: "header-searchtab", url: "../header/header.html" },
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
      <a class="btn col-lg-2 col-md-3 col-sm-4 col-6 p-2" href="../addtokart/?query=${product.name}">
          <div class="products">
              <div class="text-center img-fluid" style="height:150px";>
                  <img src="../json-api/product-img/${product.productImg}" style="width: 100%; height: 100%; object-fit: contain;" alt="${product.id}">
              </div>
              <div class="text-center card-title">${product.name}</div>
              <div class="text-center rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
              <div class="text-center"> Price:<strong> ₹${product.price}</strong></div>
          </div>
      </a>
  `;
}

// Function to display search results
function searchFetch(products) {
  const searchList = document.getElementById('results');
  searchList.innerHTML = products.map(product => createSearchProductCard(product)).join('');
}

// Fetch data from the JSON file and filter products based on the query
fetch('../json-api/product.json')
  .then(response => response.json())
  .then(data => {
      const query = getQueryParameter('query');
      const filteredProducts = data.filter(product => product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query));
      searchFetch(filteredProducts);
  })
  .catch(error => console.error('Error fetching data:', error));