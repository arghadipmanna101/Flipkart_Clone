document.addEventListener("DOMContentLoaded", () => {
  const elementsToLoad = [
    { id: "footer-addkart", url: "../footer/footer.html" },
    { id: "header-addkart", url: "../header/header.html" },
  ];

  elementsToLoad.forEach(({ id, url }) => loadHtml(id, url));
});

const loadHtml = (id, url) => {
  fetch(url)
    .then((res) => res.ok ? res.text() : Promise.reject(res.status))
    .then((data) => document.getElementById(id).innerHTML = data)
    .catch((err) => {
      console.error(`Error loading ${url}:`, err);
      document.getElementById(id).innerHTML = `<p style="color: red;">Failed to load content. Please try again later.</p>`;
    });
};

const getQueryParameter = (name) => {
  return new URLSearchParams(window.location.search).get(name);
};

const formatIndianRupee = (number) => {
  const [integerPart, decimalPart] = number.toString().split(".");
  return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (decimalPart ? "." + decimalPart : "");
};

const createProductCard = (product) => {
  const discount = Math.floor((product.rating * parseInt(product.price.toString().slice(0, 2))) / 10);
  const discountedPrice = Math.round(((100 - discount) * product.price) / 100);

  return `
    <div class="col-md-6">
      <div class="container">
        <div class="text-center img-fluid" style="height:400px;">
          <img class="p-3" src="https://raw.githubusercontent.com/csathnere/APIs/main/json-ec/product-img/${product.productImg}" style="width:75%;height:75%;margin:auto;object-fit:contain;" alt="${product.name}">
        </div>
        <div>
          <a class="btn btn-primary" style="width:45%;height:50px;background-color:#ff9f00;padding-top:12px;" href="../viewcart/?query=${product.name}">
            <img src="../img/svg/cart_h.svg">&nbsp Add To Cart
          </a>
          <a class="btn btn-danger" style="width:45%;height:50px;background-color:#fb641b;padding-top:12px;" href="checkout.html">
            <img src="../img/svg/electricity.svg">&nbspBuy Now
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="products_kart">
        <div class="mt-2 card-title">${product.name}</div>
        <div class="rating">${product.rating} &nbsp<i class="bi bi-star-fill"></i></div>
        <span class="text-success mt-2">Special price</span>
        <div>
          <strong class="fs-3">₹${formatIndianRupee(discountedPrice)}</strong>
          <del style="color:#878787">₹${formatIndianRupee(product.price)}</del>
          <span style="color:#388e3c">${discount}% off</span>
        </div>
        <div class="text-success">Available offers</div>
        <div style="font-size:14px;">
          <img style="width:20px;height:20px;" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90">
          <span style="font-weight:600;">Bank Offer</span> Get ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above <a href="#">T&C</a><br>
          <img style="width:20px;height:20px;" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90">
          <span style="font-weight:600;">Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card <a href="#">T&C</a><br>
          <img style="width:20px;height:20px;" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90">
          <span style="font-weight:600;">Special Price</span> Get extra 12% off (price inclusive of cashback/coupon) <a href="#">T&C</a><br>
          <span class="text-primary"><a href="#" style="font-weight:500;">View 12 more offers</a></span>
        </div>
        <div style="background-color:#f8f8f8;padding:20px 10px;width:70%;">
          <span style="color:grey;font-size:15px;font-weight:500;">Warranty</span>
          <span style="font-size:14px;">&nbsp;&nbsp;Covers Manufacturing Defects <a href="#">Know More</a></span>
        </div>
        <div style="width:70%;padding:11px;background-color:#f8f8f8;border:none;">
          <div style="display:flex;align-items:center;margin-bottom:15px;">
            <div style="margin-right:20px;color:grey;font-size:15px;font-weight:500;margin-left:0px;">Delivery</div>
            <div style="border:none;border-bottom:2px solid #2874f0;">
              <form autocomplete="off" style="display:flex;align-items:center;width:100%;">
                <div style="position:relative;flex-grow:1;">
                  <svg width="16" height="16" viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:50%;left:10px;transform:translateY(-50%);">
                    <path fill="#2874f0" d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z" fill-rule="evenodd"></path>
                  </svg>
                  <input placeholder="Enter Delivery Pincode" type="text" maxlength="6" style="background-color:#f8f8f8;padding:10px 10px 10px 35px;border:none;width:100%;font-size:15px;color:grey;font-weight:500;" />
                </div>
                <button style="padding:10px 0;background-color:#f8f8f8;color:#2874f0;border:none;margin-left:10px;cursor:pointer;font-weight:550;font-size:15px;position:relative;">
                  Check
                </button>
              </form>
            </div>
          </div>
          <div style="padding:10px;background-color:#e9ecef;margin-left:80px;margin-right:110px;">
            <div style="display:flex;justify-content:space-between;font-size:15px;">
              <div style="font-weight:600;">Delivery by <span>16 Jul, Tuesday</span></div>
              <div style="width:2px;height:auto;background-color:grey;"></div>
              <div style="color:#388e3c;font-weight:500;">Free <span style="color:grey;font-size:10px;padding:0px 4px;border-radius:50%;border:1px solid grey;">?</span></div>
            </div>
            <div style="color:#757575;font-size:14px;">if ordered before 9:59 PM</div>
          </div>
          <div style="margin-top:10px;color:#007bff;cursor:pointer;font-size:15px;font-weight:550;margin-left:80px;">View Details</div>
        </div>
        <div class="card-title"><strong>${product.description}</strong></div>
      </div>
    </div>`;
};

const createSimilarProductCard = (product) => {
  const discount = Math.floor((product.rating * parseInt(product.price.toString().slice(0, 2))) / 10);
  const discountedPrice = Math.round(((100 - discount) * product.price) / 100);

  return `
    <a class="btn col-lg-2 col-md-3 m-1" href="productview.html?id=${product.id}" style="text-align:left;">
      <img src="https://raw.githubusercontent.com/csathnere/APIs/main/json-ec/product-img/${product.productImg}" style="width:75%;height:150px;display:block;margin:auto;object-fit:contain;" alt="${product.name}">
      <div class="text-success" style="font-weight:600;">₹${formatIndianRupee(discountedPrice)}</div>
      <div style="color:#212121;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:550;font-size:14px;">${product.name}</div>
      <div style="color:#878787;">₹${formatIndianRupee(product.price)}</div>
      <div style="color:#388e3c;">${discount}% off</div>
    </a>`;
};

const displayProduct = async () => {
  try {
    const productId = getQueryParameter("id");
    if (!productId) throw new Error("Product ID is missing in the URL.");

    const response = await fetch("https://raw.githubusercontent.com/csathnere/APIs/main/json-ec/products.json");
    if (!response.ok) throw new Error("Failed to fetch product data.");

    const products = await response.json();
    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) throw new Error("Product not found.");

    document.getElementById("productkart-card").innerHTML = createProductCard(product);

    const similarProductsContainer = document.getElementById("similar-products");
    similarProductsContainer.innerHTML = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .map((p) => createSimilarProductCard(p))
      .join("");
  } catch (error) {
    console.error(error);
    document.getElementById("productkart-card").innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
};

displayProduct();
