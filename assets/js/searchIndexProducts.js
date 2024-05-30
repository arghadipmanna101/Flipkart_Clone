document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "footer-searchtab", url: "../components/footer/footer.html" },
    { id: "header-searchtab", url: "../components/header/header.html" },
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
      <a class="btn col-lg-2 col-md-3 col-sm-4 col-6 p-2" href="#">
          <div class="products">
              <div class="text-center img-fluid">
                  <img src="../assets/json-api/product-img/${product.productImg}" height="150px" alt="${product.id}">
              </div>
              <div class="text-center card-title">${product.name}</div>
              <div class="text-center">Price: ₹${product.price}</div>
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
fetch('../assets/json-api/product.json')
  .then(response => response.json())
  .then(data => {
      const query = getQueryParameter('query');
      const filteredProducts = data.filter(product => product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query));
      searchFetch(filteredProducts);
  })
  .catch(error => console.error('Error fetching data:', error));