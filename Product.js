// Fetch product data from product.JSON file
fetch('product.json')
  .then(response => response.json())
  .then(data => {
    
    const productContainer = document.getElementById('product-container');
    
  
    data.products.forEach(product => {
   
      const card = document.createElement('div');
      card.classList.add('card');

    
      const image = document.createElement('div');
      image.classList.add('image');
      image.innerHTML = `<img src="${product.imageUrl}" alt="${product.title}">`;

    
      const details = document.createElement('div');
      details.classList.add('details');
      details.innerHTML = `
        <p class="brand">${product.Brand}</p>
        <h2 class="title">${product.title}</h2>
        <p class="price">Price: $${product.price}</p>
        <p class="actualprice">actualprice: $${product.actualprice}</p>
        <button class="btn">Add to Cart</button>
      `;

     
      card.appendChild(image);
      card.appendChild(details);

    
      productContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching product data:', error));

  