let arr = [
  {
    img_src:
      "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery",
    subcategories: ["Fruits & Vegetables", "Dairy & Eggs", "Bakery", "Canned & Packaged", "Desserts"]
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
    title: "Mobiles",
    subcategories: ["Smartphones", "Feature Phones"]
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
    title: "Fashion",
    subcategories: ["Kitchen Appliances", "Furniture", "Home Decor", "Pet supplies"],
    href:'Product.html'
    
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
    title: "Electronics",
    subcategories: ["Mobile Phones", "Computers", "Accessories"]
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
    title: "Home and Furniture",
    subcategories: ["Kitchen Appliances", "Furniture", "Home Decor", "Pet supplies"]
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
    title: "Appliances",
    subcategories: ["Kitchen Appliances", "Furniture", "Home Decor", "Pet supplies"]
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
    title: "Travel",
    subcategories: ["Luggage", "Accessories", "Travel Essentials"]
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
    title: "Beauty, Toys and More",
    href: "",
    subcategories: ["Face", "Eyes", "Lips"]
  },
  {
    img_src:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
    title: "Two Wheelers",
    href: "",
    subcategories: ["Kitchen Appliances", "Furniture", "Home Decor", "Pet supplies"]
  },
];

arr.forEach(element => {
  let box = document.createElement('div');
  box.className = "category-box";

  let image = document.createElement('img');
  image.src = element.img_src;
  image.alt = element.title;
  image.className = "category-image";

  let title = document.createElement("p");
  title.className = "category-title";
  title.innerHTML = element.title;

 

  box.appendChild(image);
  box.appendChild(title);



  document.getElementById("categories").appendChild(box);
});
