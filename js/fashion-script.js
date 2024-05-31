// for footer

document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'footer-fashion', url: '../footer/footer.html' },
        { id: 'header-fashion', url: '../header/header.html' },
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
function createfashionsProductCard(product) {
    return `
        <a class="btn col-lg-2 col-md-2 col-sm-4 col-6 p-2" href="/addtokart/?query=${product.name}"> 
          <div class="products">
          <div class="text-center img-fluid" style="height:150px";>
          <img src="../json-api/product-img/${product.productImg}" style="width: 100%; height: 100%; object-fit: contain;" alt="${product.id}">
      </div>
              <div class="text-center card-title">${product.name}</div>
              <div class="text-center">Price: ₹${product.price}</div>
            </div>
          </a>
      `;
  }
  
  
  function fashionsFetch(g) {
    const fashionsList = document.getElementById('fashions-product');
    fashionsList.innerHTML = g.map(product => createfashionsProductCard(product)).join('');
  }
  
  
  // Fetch data from the JSON file and fashions for each brand
  fetch('../json-api/product.json')
    .then(response => response.json())
    .then(data => {
      const g = data.filter(product => product.category.toLowerCase().includes('fashion'));
      fashionsFetch(g);
      })
      .catch(error => console.error('Error fetching data:', error));

