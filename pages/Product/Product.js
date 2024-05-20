let sample_data = [
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"758",
        actualprice:"2,299"
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,329",
        actualprice:"1,799"
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,286",
        actualprice:"2,499"
    }, {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/z/o/46-ares02011a-arrow-sport-original-imagknbgg4dcqvvv.jpeg?q=70",
        names:"Men Slim Self Shirt",
        price:"1,758",
        actualprice:"2,099"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399"
    },
    , {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"2,038",
        actualprice:"2,899"
    },
    {
        Brand:"Puma",
        img_src:"",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578",
        actualprice:"10,399"
    },
    

];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product() {
    collection.map((element) => {
        let box = document.createElement("div");
        box.className = "product-card";

        let avatar = document.createElement("img");
        avatar.src = element.img_src;
        avatar.className = "avatar";

        let brand = document.createElement("p");
        brand.innerHTML = element.Brand;

        let name = document.createElement("p");
        name.innerHTML = element.names;

        let priceWrapper = document.createElement("div");
        priceWrapper.className = "price-wrapper";

        let price1 = document.createElement("span");
        price1.className = "price";
        price1.innerHTML = "₹" + element.price;

        let price2 = document.createElement("span");
        price2.className = "actual-price";
        price2.innerHTML = "₹" + element.actualprice;

        priceWrapper.append(price1, price2);

        box.append(avatar, brand, name, priceWrapper);
        document.getElementById("collection").append(box);
    });
}
