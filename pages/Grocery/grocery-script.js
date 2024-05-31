document.addEventListener('DOMContentLoaded', function() {
    const products = [
      { name: 'Fresh Vegetables', image: 'https://source.unsplash.com/300x200/?vegetables' },
      { name: 'Organic Fruits', image: 'https://source.unsplash.com/300x200/?fruits' },
      { name: 'Dairy Products', image: 'https://source.unsplash.com/300x200/?dairy' },
      { name: 'Bakery Items', image: 'https://source.unsplash.com/300x200/?bakery' },
      { name: 'Beverages', image: 'https://source.unsplash.com/300x200/?beverages' },
      { name: 'Snacks', image: 'https://source.unsplash.com/300x200/?snacks' },
    ];
  
    const productsSection = document.querySelector('.products-section .row');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col-md-4');
      productCard.innerHTML = `
        <div class="card product-card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      `;
      productsSection.appendChild(productCard);
    });
  });
  