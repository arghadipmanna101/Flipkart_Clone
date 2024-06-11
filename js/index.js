// footer and content page load 
document.addEventListener("DOMContentLoaded", () => {
  const components = [
    // { id: "content-page", url: "pages/content-page.html" },
    { id: "footer", url: "footer/footer.html" },
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




/* <a class="nav-link" href="../search/?query=electronics */
// product fetch
// Function to create a product card
function createProductCard(product) {
  return `
    <a class="btn col-lg-2 col-md-2 col-sm-4 col-6 p-2" href="addtokart/?query=${product.name}"> 
      <div class="products">
      <i class="bi bi-heart-fill" style="color : #e2d8d8ab; align-self: flex-end;"></i>
      <div class="text-center img-fluid" style="height:150px";>
      <img src="json-api/product-img/${product.productImg}" style="width: 100%; height: 100%; object-fit: contain;" alt="${product.id}">
  </div>
          <div class="text-center card-title">${product.name}</div>
          <div class="text-center rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
          <div class="text-center"><strong> ₹${product.price}</strong></div>
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





 // Show or hide the "Go to Top" button based on scroll position
 document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById('goToTopBtn');

  function checkButtonVisibility() {
      if (window.innerWidth > 100 && window.scrollY > 100) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  }

// Show or hide the "Go to Top" button based on scroll position
window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("goToTopBtn");
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});


  window.addEventListener('scroll', checkButtonVisibility);
  window.addEventListener('resize', checkButtonVisibility);

  backToTopButton.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' 
      });
  });
  checkButtonVisibility();
});



// loader
// old
// setTimeout(function() {
//     document.getElementById('loader').style.display = 'none';
//   }, 2000);

// new
  document.addEventListener("DOMContentLoaded", function() {
		const loader = document.querySelector(".loader-container");
		setTimeout(function() {
			loader.style.display = "none";
		}, 2000);
	});




