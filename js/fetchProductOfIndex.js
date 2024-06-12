
// product fetch
// Function to create a product card
function createProductCard(product) {
    const discont=(Math.floor(product.rating*(parseInt((product.price.toString()).slice(0,2)))/10))
    const afterDiscontPrice=Math.round((100-discont)*product.price/100)
  
    function formatIndianRupee(number) {
      const parts = number.toString().split(".");
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const formattedNumber = parts.length > 1 ? integerPart + "." + parts[1] : integerPart;
      return formattedNumber;
    }

    return `
    <style>
    .products div{font-size:14px}.products img:hover{transform:scale(1.1)}.products{font-size:medium;display:flex;flex-direction:column;align-items:center}.rating{background-color:green;width:fit-content;padding:0 16px;border-radius:5px;color:#fff}.products .product_Img{height:150px}.products img{padding:1px;width:100%;height:100%;object-fit:contain}
    </style>
      <a class="btn col-lg-2 col-md-2 col-sm-4 col-6 p-2" href="addtokart/?query=${product.name}">
          <div class="products">
              <div class="text-center product_Img img-fluid">
                  <img src="json-api/product-img/${product.productImg}" alt="${product.id}">
              </div>
              <div class="text-center card-title pt-1">${product.name.slice(0, 20)} ${product.name.length > 20 ? "<b>...</b>":""}</div>
              <div class="text-center mb-1 rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
              <div class="text-center"><strong>₹${formatIndianRupee(afterDiscontPrice)}</strong> <del style="color:#878787">₹${formatIndianRupee(product.price)}</del> <span style="color:#388e3c"> ${discont}% off </span></div>
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
  
  // Function to under 15000 rs mobile
  function mobileUnder15000(products) {
    const productList = document.getElementById("mobileUnder15000-product");
    productList.innerHTML = products
      .map((product) => createProductCard(product))
      .join("");
  }
  
  
  
  // Function to s2-product
  function s2_products(products) {
    const productList = document.getElementById("s2-product");
    productList.innerHTML = products
      .map((product) => createProductCard(product))
      .join("");
  }
  
  // Function to under 500 Product
  function shopUnder500(products) {
    const productList = document.getElementById("shopUnder500-product");
    productList.innerHTML = products
      .map((product) => createProductCard(product))
      .join("");
  }
  
  // best of Electronics 
  function bestOfEelecronics_products(products) {
    const productList = document.getElementById("bestOfElectronics-product");
    productList.innerHTML = products
      .map((product) => createProductCard(product))
      .join("");
  }
  
  // seletcYourChoice-product
  function seletcYourChoice_products(products) {
    const productList = document.getElementById("seletcYourChoice-product");
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
  
  
  // General function to fetch 15000 rs mobile data
  function fetchAndShuffleDataMobile15000(url, callback, numberOfProducts) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
  
        const f_data = data.filter(product => product.price<=15000 && product.category=='mobile');
        // Shuffle the array using the Fisher-Yates algorithm
        for (let i = f_data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [f_data[i], f_data[j]] = [f_data[j], f_data[i]];
        }
  
        // Select the desired number of products from the shuffled array
        const selectedProducts = f_data.slice(0, numberOfProducts);
  
        // Call the callback function with the selected products
        callback(selectedProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  
  
  // best of electronics 
  function bestOfEelecronics(url, callback, numberOfProducts) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
  
        const f_data = data.filter(product => product.category=='electronics');
        // Shuffle the array using the Fisher-Yates algorithm
        for (let i = f_data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [f_data[i], f_data[j]] = [f_data[j], f_data[i]];
        }
  
        // Select the desired number of products from the shuffled array
        const selectedProducts = f_data.slice(0, numberOfProducts);
  
        // Call the callback function with the selected products
        callback(selectedProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  
  
  // General function to fetch under 500 data
  function fetchAndShuffleDataUnder(url, callback, numberOfProducts) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
  
        const f_data = data.filter(product => product.price<=500);
        // Shuffle the array using the Fisher-Yates algorithm
        for (let i = f_data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [f_data[i], f_data[j]] = [f_data[j], f_data[i]];
        }
  
        // Select the desired number of products from the shuffled array
        const selectedProducts = f_data.slice(0, numberOfProducts);
  
        // Call the callback function with the selected products
        callback(selectedProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  
  
  
  //  mobileUnder15000Data()
  // Fetch data for best-deal products  rendom products & top selection
  bestOfEelecronics("json-api/product.json", bestOfEelecronics_products, 6);
  
  fetchAndShuffleData("json-api/product.json", rendom_products, 12);
  fetchAndShuffleData("json-api/product.json", best_deal_products, 18);
  fetchAndShuffleData("json-api/product.json", top_selection_products, 12);
  fetchAndShuffleData("json-api/product.json", s2_products, 12);
  fetchAndShuffleData("json-api/product.json", seletcYourChoice_products, 120);
  
  fetchAndShuffleDataMobile15000("json-api/product.json", mobileUnder15000, 12);
  fetchAndShuffleDataUnder("json-api/product.json", shopUnder500, 18);
  
  
  
