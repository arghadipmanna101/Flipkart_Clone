// for footer

document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'footer-home&furniture', url: '../components/footer/footer.html' },
        { id: 'header-home&furniture', url: '../components/header/header.html' },
    ];

    components.forEach(component => {
        fetch(component.url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(component.id).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${component.url}:`, error));
    });
});

// end footer

// Function to create a product card
function createhomefurnitureProductCard(product) {
    return `
        <a class="btn col-lg-2 col-md-2 col-sm-4 col-6 p-2" href="##"> 
          <div class="products">
              <div class="text-center img-fluid"><img src="../assets/json-api/product-img/${product.productImg}" height="150px"
                  alt="${product.id}">
              </div>
              <div class="text-center card-title">${product.name}</div>
              <div class="text-center">Price: ₹${product.price}</div>
            </div>
          </a>
      `;
  }
  
  
  function homefurnitureFetch(g) {
    const homefurnitureList = document.getElementById('home&Furniture-product');
    homefurnitureList.innerHTML = g.map(product => createhomefurnitureProductCard(product)).join('');
  }
  
  
  // Fetch data from the JSON file and appliance for each brand
  fetch('../assets/json-api/product.json')
    .then(response => response.json())
    .then(data => {
      const g = data.filter(product => product.category.toLowerCase().includes('home&furniture'));
      homefurnitureFetch(g);
      })
      .catch(error => console.error('Error fetching data:', error));
