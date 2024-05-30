// for footer

document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'footer-mobiles', url: '../components/footer/footer.html' },
        { id: 'header-mobiles', url: '../components/header/header.html' },
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




  // Function to create a mobile card
  function createMobileCard(mobile) {
    return `
      <div class="col-lg-2 col-md-2 col-sm-4 col-6 p-2"> 
        <div class="mobiles">
            <div class="text-center"><img src="../assets/json-api/product-img/${mobile.productImg}" height="150px"
                alt="${mobile.id}">
            </div>
            <div class="text-center card-title">${mobile.name}</div>
            <div class="text-center">${mobile.rating}</div>
            <div class="text-center">Price: ₹${mobile.price}</div>
          </div>
        </div>
    `;
  }

  

  // Function to populate Apple mobiles
function populateAppleMobiles(mobiles) {
    const mobileList = document.getElementById('apple-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  
  // Function to populate Oppo mobiles
  function populateOppoMobiles(mobiles) {
    const mobileList = document.getElementById('oppo-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  
  // Function to populate Google mobiles
  function populateGoogleMobiles(mobiles) {
    const mobileList = document.getElementById('google-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  
  // Function to populate Motorola mobiles
  function populateMotorolaMobiles(mobiles) {
    const mobileList = document.getElementById('motorola-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }


  function populateredmiMobiles(mobiles) {
    const mobileList = document.getElementById('redmi-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  function populaterealmeMobiles(mobiles) {
    const mobileList = document.getElementById('realme-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  function populatepocoMobiles(mobiles) {
    const mobileList = document.getElementById('poco-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  function populatesamsungMobiles(mobiles) {
    const mobileList = document.getElementById('samsung-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  function populateinfinixMobiles(mobiles) {
    const mobileList = document.getElementById('infinix-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }
  function populatevivoMobiles(mobiles) {
    const mobileList = document.getElementById('vivo-mobile');
    mobileList.innerHTML = mobiles.map(mobile => createMobileCard(mobile)).join('');
  }

  
  // Fetch data from the JSON file and populate mobiles for each brand
  fetch('../assets/json-api/product.json')
    .then(response => response.json())
    .then(data => {
      const appleMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('apple') && mobile.category === "mobile");
      const oppoMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('oppo') && mobile.category === "mobile");
      const googleMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('google') && mobile.category === "mobile");
      const motorolaMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('motorola') && mobile.category === "mobile");
      const realmeMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('realme') && mobile.category === "mobile");
      const pocoMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('poco') && mobile.category === "mobile");
      const samsungMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('samsung') && mobile.category === "mobile");
      const infinixMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('infinix') && mobile.category === "mobile");
      const redmiMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('redmi') && mobile.category === "mobile");
      const vivoMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('vivo') && mobile.category === "mobile");
  
      populateAppleMobiles(appleMobiles);
      populateOppoMobiles(oppoMobiles);
      populateGoogleMobiles(googleMobiles);
      populateMotorolaMobiles(motorolaMobiles);
      populaterealmeMobiles(realmeMobiles);
      populatepocoMobiles(pocoMobiles);
      populatesamsungMobiles(samsungMobiles);
      populateinfinixMobiles(infinixMobiles);
      populateredmiMobiles(redmiMobiles);
      populatevivoMobiles(vivoMobiles);
    })
    .catch(error => console.error('Error fetching data:', error));


    



    //  djfkd

    // Fetch data from the JSON file and apple mobiles
//   fetch('../assets/json-api/product.json')
//   .then(response => response.json())
//   .then(data => {
//     const filteredMobiles = data.filter(mobile => mobile.category === "mobile");
//     appleMobiles(filteredMobiles);
//   })
//   .catch(error => console.error('Error fetching data:', error));


//   fetch('scripts/data.json')
//     .then(response => response.json())
//     .then(data => {
//       const filteredMobiles = data.filter(mobile => mobile.name.toLowerCase().includes('oppo'));
//       populateMobiles(filteredMobiles);
//     })
//     .catch(error => console.error('Error fetching data:', error));