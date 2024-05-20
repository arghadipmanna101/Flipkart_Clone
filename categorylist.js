const categoriesData = [
    {
        "id": "grocery",
        "name": "Grocery",
        "icon": "grocery.webp",
        "subcategories": [
            {
                "id": "fruits-vegetables",
                "name": "Fruits & Vegetables",
                "icon": "grocery.webp",
                "subcategories": ["Fresh Fruits", "Fresh Vegetables"]
            },
            {
                "id": "dairy-eggs",
                "name": "Dairy & Eggs",
                "icon": "grocery.webp",
                "subcategories": ["Milk", "Cheese", "Eggs"]
            },
            {
                "id": "bakery",
                "name": "Bakery",
                "icon": "grocery.webp",
                "subcategories": ["Bread", "Pastries", "Cakes"]
            },
            {
                "id": "canned-packaged",
                "name": "Canned & Packaged",
                "icon": "grocery.webp",
                "subcategories": ["Canned Food", "Pasta", "Rice", "Snacks"]
            },
            {
                "id": "desserts",
                "name": "Desserts",
                "icon": "grocery.webp",
                "subcategories": null
            }
        ]
    },
    {
        "id": "Mobiles",
        "name":"Mobiles",
        "icon": "electronics.webp",
        "subcategories": [
            {
                "id": "mobile-phones",
                "name": "Mobile Phones",
                "icon": "electronics.webp",
                "subcategories": ["Smartphones", "Feature Phones"]
            },
        ]
    },
    {
        "id": "electronics",
        "name": "Electronics",
        "icon": "electronics.webp",
        "subcategories": [
            {
                "id": "mobile-phones",
                "name": "Mobile Phones",
                "icon": "electronics.webp",
                "subcategories": ["Smartphones", "Feature Phones"]
            },
            {
                "id": "computers",
                "name": "Computers",
                "icon": "grocery.webp",
                "subcategories": ["Laptops", "Desktops", "Tablets"]
            },
            {
                "id": "accessories",
                "name": "Accessories",
                "icon": "grocery.webp",
                "subcategories": ["Headphones", "Chargers", "Cases"]
            }
        ]
    },
    {
        "id": "clothing",
        "name": "Clothing",
        "icon": "grocery.webp",
        "subcategories": [
            {
                "id": "mens-clothing",
                "name": "Men's Clothing",
                "icon": "grocery.webp",
                "subcategories": ["Shirts", "Pants", "Jackets"]
            },
            {
                "id": "womens-clothing",
                "name": "Women's Clothing",
                "icon": "grocery.webp",
                "subcategories": ["Dresses", "Skirts", "Tops"]
            },
            {
                "id": "kids-clothing",
                "name": "Kids' Clothing",
                "icon": "grocery.webp",
                "subcategories": ["T-shirts", "Jeans", "Dresses"]
            }
        ]
    },
    {
        "id": "home-furniture",
        "name": "Home & Furniture",
        "icon": "grocery.webp",
        "subcategories": [
            {
                "id": "Kitchen-appliances",
                "name": "kitchen Appliances",
                "icon": "grocery.webp",
                "subcategories": ["Blenders", "Microwaves", "Coffee Makers", "Pressure cookers", "Pans"]
            },
            {
                "id": "furniture",
                "name": "Furniture",
                "icon": "grocery.webp",
                "subcategories": ["Sofas", "Tables", "Chairs", "Beds"]
            },
            {
                "id": "home-decor",
                "name": "Home Decor",
                "icon": "grocery.webp",
                "subcategories": ["Rugs", "Lamps", "Mirrors", "Clocks"]
            },
            ,
            {
                "id": "pet",
                "name": "Pet supplies",
                "icon": "grocery.webp",
                "subcategories": ["Dogs", "Cats", "Fish and Aquatics"]
            }
        ]
    },
    {
        "id": "beauty",
        "name": "Beauty",
        "icon": "grocery.webp",
        "subcategories": [
            {
                "id": "face",
                "name": "Face",
                "icon": "grocery.webp",
                "subcategories": ["Foundation", "Concealer", "Powder"]
            },
            {
                "id": "eyes",
                "name": "Eyes",
                "icon": "grocery.webp",
                "subcategories": ["Eyeshadow", "Mascara", "Eyeliner"]
            },
            {
                "id": "lips",
                "name": "Lips",
                "icon": "grocery.webp",
                "subcategories": ["Lipstick", "Lip Gloss", "Lip Liner"]
            }
        ]
    },
    {
        "id": "travel",
        "name": "Travel",
        "icon": "grocery.webp",
        "subcategories": [
            {
                "id": "luggage",
                "name": "Luggage",
                "icon": "grocery.webp",
                "subcategories": ["Suitcases", "Backpacks", "Duffel Bags"]
            },
            {
                "id": "travel-accessories",
                "name": "Accessories",
                "icon": "grocery.webp",
                "subcategories": ["Travel Pillows", "Travel Adapters", "Luggage Tags"]
            },
            {
                "id": "travel-essentials",
                "name": "Travel Essentials",
                "icon": "grocery.webp",
                "subcategories": ["Passport Holders", "Toiletry Bags", "Travel Bottles"]
            }
        ]
    },
    {
        "id": "sports-stationary",
        "name": "Sports & Stationary",
        "icon": "grocery.webp",
        "subcategories": [
            {
                "id": "fitness-equipment",
                "name": "Fitness Equipment",
                "icon": "grocery.webp",
                "subcategories": ["Dumbbells", "Resistance Bands", "Yoga Mats"]
            },
            {
                "id": "sports-clothing",
                "name": "Clothing",
                "icon": "grocery.webp",
                "subcategories": ["Athletic Wear", "Running Shoes", "Sports Bras"]
            },
            {
                "id": "sports-accessories",
                "name": "Accessories",
                "icon": "grocery.webp",
                "subcategories": ["Water Bottles", "Gym Bags", "Fitness Trackers"]
            },
            {
                "id": "toys",
                "name": "Toys",
                "icon": "grocery.webp",
                "subcategories": null
            },
            ,
            {
                "id": "stationary",
                "name": "Stationary",
                "icon": "grocery.webp",
                "subcategories": null
            }

        ]
    }
];


$(document).ready(function () {
    const categoriesList = $("#categories");

    function createCategoryItem(categoryData) {
        const categoryItem = $("<li>");
        const icon = $("<img>").attr("src", "images/categoryListImg/" + categoryData.icon);
        const nameLink = $("<a>").attr("href", categoryData.name+"-store/"+categoryData.name+"-store.html").text(categoryData.name);
        const name = $("<br><span>").append(nameLink);

        categoryItem.append(icon, name);

        const subcategoriesList = $("<ul>");

        if (!categoryData.subcategories) {
            const singleItem = $("<li>").append($("<a>").attr("href", categoryData.name+"-store/"+categoryData.name+".-store.html").text(categoryData.name));
            subcategoriesList.append(singleItem);
        } else {
            $.each(categoryData.subcategories, function (index, subcategoryData) {
                if (subcategoryData && subcategoryData.name == undefined) {
                    const singleItem = $("<li>").text(subcategoryData);
                    subcategoriesList.append(singleItem);
                } else if (subcategoryData) {
                    const subcategoryItem = createCategoryItem(subcategoryData);
                    subcategoriesList.append(subcategoryItem);
                }
            });
        }

        categoryItem.append(subcategoriesList);
        console.log(categoryItem);

        return categoryItem;
    }

    categoriesData.forEach(function (categoryData) {
        const categoryItem = createCategoryItem(categoryData);
        categoriesList.append(categoryItem);
    });
});


