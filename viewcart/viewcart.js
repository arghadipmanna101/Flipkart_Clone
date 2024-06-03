// Function to save data to local storage
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
    return data ? JSON.parse(data) : null;
  }
  
  // Function to get query parameter
  function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

 // Function to display search results
 function searchFetch(products) {
    const searchList = document.getElementById("itemsInCart");
    searchList.innerHTML += products
    .map(product => fetchCartData(product))
    .join("");
  }


  let totalPrice=0
  let totlaItems=0
  // Function to generate HTML for a cart item
  function fetchCartData(item) {
    totlaItems=totlaItems+1;
    totalPrice=totalPrice+ item.price

    return `
      <div class="itemInCart d-flex">
        <img class="p-3" src="../json-api/product-img/${item.productImg}" style="width: auto; height: 200px; object-fit: contain;" alt="${item.name}">
        <div class="itemDetail">
          <div>
            <p>${item.name}</p>
            <p>Forest Green Strap, Regular</p>
            <p>Seller: Ezig</p>
          </div>
          <div>
            ₹${item.price} Off1 offer applied
          </div>
        </div>
        <div class="deliveryDate">
          Delivery by Fri Jun 7
        </div>
      </div>
    `;
  }
  
  let cartInProduct=document.getElementById("cardInProduct")
  let cartisEmpty=document.getElementById("cardisEmpty")
  
  // Fetch data from the JSON file and filter products based on the query
  fetch("../json-api/product.json")
    .then(response => response.json())
    .then(data => {
      const query = getQueryParameter("query");
      const filteredProducts = data.filter(product => product.name === query);	  
	  if (filteredProducts.length==0){
		cartInProduct.style.display="none"
		cartisEmpty.style.display="block"		
	  } else{
		cartInProduct.style.display="block"
		cartisEmpty.style.display="none"
	  }

      // Save filtered products to local storage without overwriting existing data
      saveToLocalStorage("filteredProducts", filteredProducts);
      // Display the filtered products	  
      searchFetch(filteredProducts);	 
    })
    .catch(error => console.error("Error fetching data:", error));
  
  // Example usage to retrieve data from local storage later
  const savedFilteredProducts = getFromLocalStorage("filteredProducts");
  if (savedFilteredProducts) {
    // Use savedFilteredProducts as needed
	
    searchFetch(savedFilteredProducts);
  }
  



  let priceDetail=`
            <pre>
Price (${totlaItems} items)			₹${totalPrice}
Discount                        0
Delivery Charges                Free
Total Amount                    <b>₹${totalPrice}</b> 
You will save ₹110 on this order
                            </pre>
    `
document.getElementById("priceDetail").innerHTML=priceDetail


 


