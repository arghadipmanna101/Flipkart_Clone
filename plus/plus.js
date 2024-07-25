let btmText = `
<p class="hdg">Get Flipkart Plus Membership Online and Enjoy Benefits for the Plus Life </p>
    <p class="cnt">To democratise access and broaden diversity in e-commerce, Flipkart never stops adding new features.
        With this goal in mind, the reward programme Flipkart Plus is designed to improve client relationships and
        provide them with additional benefits. Flipkart Plus membership is an earned loyalty programme created to
        satisfy a wide range of Flipkart customers. Hence, there is no Flipkart Plus membership price, however, you can
        use SuperCoins to access its advantages. Flipkart Plus membership benefits include getting free and quick
        delivery, as well as access to exclusive marketplace launch previews. Getting priority customer service,
        acquiring exclusive Flipkart Pay Later choices, and receiving selected rewards from ecosystem partners across
        travel, OTT, lifestyle, health and fitness, are among the additional advantages. This means that you can
        (Flipkart) explore plus and get engaged in the Plus campaign and get exclusive deals and benefits. So, if you
        want to become a member of Flipkart’s prime membership, all you have to do is shop more and earn SuperCoins
        without having to pay Flipkart membership prices.</p>
    <br>
    <p class="hdg">All You Need to Know About Flipkart Plus Membership</p>
    <p class="cnt">Flipkart customers receive extra benefits in the form of SuperCoins. Every month, Flipkart issues
        billions of SuperCoins for its regular customers. You will receive a Plus membership invitation once you have
        earned 200 SuperCoins in a calendar year. You must activate the invitation within 30 days of receiving it to
        have access to this Membership. You won't have to use SuperCoins in your account to activate this membership.
        Spending up to 100 rupees will get you two SuperCoins. You can earn up to 50 SuperCoins in a single order.
        Besides, SuperCoins can be used to profit from a variety of services and offerings. Flipkart has been working on
        bringing SuperCoins to the ecosystem since launching the concept in 2021. One move in this direction was the
        introduction of SuperCoin Pay and SuperCoin Exchange. For Indians, choosing to shop is an emotional decision,
        and rewarding it wholeheartedly creates a strong emotional connection with the business. This was a crucial
        realisation that prompted the development of this loyalty programme. The Flipkart Plus phenomenon is
        particularly pronounced in the heartland cities in Tier 2+ cities of India.</p>
    <br>
    <p class="hdg">Flipkart Plus Membership Benefits</p>
    <p class="cnt">If you are a member of this loyalty program, you can earn up to four SuperCoins for every 100 rupees
        you spend. This membership offers you free shipping on all Plus products. And, you can get early entry to sales
        to take advantage of low prices before everyone else. You can also get priority assistance whenever you need it
        and go ahead of the line. Additionally, you can benefit from a special offer that is exclusively offered to the
        members. You can get assured enrollment in the Flipkart Pay Later service. To get this membership, all you need
        to do is purchase your favourite or required item. By making purchases, you can earn Super Coins, which you can
        then use on Flipkart Plus to redeem great rewards, deals, recharges, and more.</p>
    <style>
        p {
            margin: 0;
            padding: 0;
        }

        .hdg {
            font-weight: bold;
        }

        .cnt {
            font-size: 12px;
        }
    </style>
`;

document.getElementById("btmTxtP").innerHTML = btmText;

document.addEventListener("DOMContentLoaded", () => {
  fetch("products.json")
      .then(response => response.json())
      .then(products => {
          const productList = document.getElementById("productList");
          products.forEach(product => {
              const productDiv = document.createElement("div");
              productDiv.className = "product";
              productDiv.innerHTML = `
                  <img src="${product.image}" alt="Product Image" />
                  <div class="name">${product.name}</div>
                  <div class="price">${product.price}</div>
              `;
              productList.appendChild(productDiv);
          });
      })
      .catch(error => console.error("Error loading products:", error));
});

// fetch header footer

document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "header-plus", url: "../header/header.html" },
    { id: "footer-plus", url: "../footer/footer.html" },
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
