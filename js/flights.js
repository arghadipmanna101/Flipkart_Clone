// for footer

document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'footer-flights', url: '../footer/footer.html' },
        { id: 'header-flights', url: '../header/header.html' },
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
    <a class="btn col-lg-2 col-md-3 col-sm-4 col-6 p-2" href="../addtokart/?query=${product.name}">
        <div class="products">
            <div class="text-center product_Img img-fluid">
                <img src="../json-api/product-img/${product.productImg}" alt="${product.id}">
            </div>
            <div class="text-center card-title pt-1">${product.name.slice(0, 20)} ${product.name.length > 20 ? "<b>...</b>":""}</div>
            <div class="text-center mb-1 rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
            <div class="text-center"><strong>₹${formatIndianRupee(afterDiscontPrice)}</strong> <del style="color:#878787">₹${formatIndianRupee(product.price)}</del> <span style="color:#388e3c"> ${discont}% off </span></div>
        </div>
    </a>
`;
  }
  
// Function to fetch and display flights
function flightsFetch(g) {
    const flightsList = document.getElementById('flights-product');
    flightsList.innerHTML = g.map(product => createFlightCard(product)).join('');
}

// Fetch data from the JSON file for flights
fetch('../json-api/product.json')
    .then(response => response.json())
    .then(data => {
        const g = data.filter(product => product.category.toLowerCase().includes('flights'));
        flightsFetch(g);
    })
    .catch(error => console.error('Error fetching data:', error));



// header search bar search function 
setTimeout(() => {  
  const inputField_h = document.getElementById('inputField_h');
  const fetchButton_h = document.getElementById('fetchButton_h');

  function fetchValue_h() {
      const value = inputField_h.value;
      window.location.href = `../search/?query=${value}`;
  }
 
  fetchButton_h.addEventListener('click', fetchValue_h);

  inputField_h.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          fetchValue_h();
      }
  });


}, 500);

//end 
