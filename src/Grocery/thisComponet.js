document.addEventListener("DOMContentLoaded", () => {
    [
        { id: "footer", url: "../../components/footer.html" },
        { id: "header", url: "../../components/header.html" },
    ].forEach(({ id, url }) =>
        fetch(url)
            .then((res) => res.text())
            .then((data) => (document.getElementById(id).innerHTML = data))
            .catch((err) => console.error(`Error loading ${url}:`, err))
    );
});
// end header and footer 

// javascript for title
let path = window.location.pathname;
let firstSlashIndex = path.indexOf('/');
let secondSlashIndex = path.indexOf('/', firstSlashIndex + 1);
let fileName = path.substring(secondSlashIndex + 1);
let [a,b] =fileName.split('/');
document.getElementById('pageTitle').textContent = a;

// javascript for products
// Function to create a product card
function createelectronicsProductCard(product) {
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
      <a class="btn col-lg-2 col-md-3 col-sm-4 col-6 p-2" href="../../addtokart/?query=${product.name}">
          <div class="products">
              <div class="text-center product_Img img-fluid">
                  <img src="https://raw.githubusercontent.com/csathnere/APIs/main/json-ec/product-img/${product.productImg}" alt="${product.id}">
              </div>
              <div class="text-center card-title pt-1">${product.name.slice(0, 20)} ${product.name.length > 20 ? "<b>...</b>":""}</div>
              <div class="text-center mb-1 rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
              <div class="text-center"><strong>₹${formatIndianRupee(afterDiscontPrice)}</strong> <del style="color:#878787">₹${formatIndianRupee(product.price)}</del> <span style="color:#388e3c"> ${discont}% off </span></div>
          </div>
      </a>
  `;
    }
  
  
  function electronicsFetch(g) {
    const electronicsList = document.getElementById('component');
    electronicsList.innerHTML = g.map(product => createelectronicsProductCard(product)).join('');
  }
  
  
  // Fetch data from the JSON file and electronics for each brand
  fetch('https://raw.githubusercontent.com/csathnere/APIs/main/json-ec/product.json')
    .then(response => response.json())
    .then(data => {
      const g = data.filter(product => product.category.toLowerCase().includes('grocery'));
      electronicsFetch(g);
      })
      .catch(error => console.error('Error fetching data:', error));