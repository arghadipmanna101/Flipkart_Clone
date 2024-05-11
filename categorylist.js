const categoriesData = [
    {
        "id": "grocery",
        "name": "Grocery",
        "subcategories": [
            {
                "id": "fruits-vegetables",
                "name": "Fruits & Vegetables",
                "subcategories": ["Fresh Fruits", "Fresh Vegetables"]
            },
            {
                "id": "dairy-eggs",
                "name": "Dairy & Eggs",
                "subcategories": ["Milk", "Cheese", "Eggs"]
            },
            {
                "id": "bakery",
                "name": "Bakery",
                "subcategories": ["Bread", "Pastries", "Cakes"]
            },
            {
                "id": "canned-packaged",
                "name": "Canned & Packaged",
                "subcategories": ["Canned Food", "Pasta", "Rice", "Snacks"]
            },
            {
                "id": "desserts",
                "name": "Desserts",
                "subcategories": null
            }
        ]
    },
    {
        "id": "electronics",
        "name": "Electronics",
        "subcategories": [
            {
                "id": "mobile-phones",
                "name": "Mobile Phones",
                "subcategories": ["Smartphones", "Feature Phones"]
            },
            {
                "id": "computers",
                "name": "Computers",
                "subcategories": ["Laptops", "Desktops", "Tablets"]
            },
            {
                "id": "accessories",
                "name": "Accessories",
                "subcategories": ["Headphones", "Chargers", "Cases"]
            }
        ]
    },
    {
        "id": "clothing",
        "name": "Clothing",
        "subcategories": [
            {
                "id": "mens-clothing",
                "name": "Men's Clothing",
                "subcategories": ["Shirts", "Pants", "Jackets"]
            },
            {
                "id": "womens-clothing",
                "name": "Women's Clothing",
                "subcategories": ["Dresses", "Skirts", "Tops"]
            },
            {
                "id": "kids-clothing",
                "name": "Kids' Clothing",
                "subcategories": ["T-shirts", "Jeans", "Dresses"]
            }
        ]
    },
    {
        "id": "home-furniture",
        "name": "Home & Furniture",
        "subcategories": [
            {
                "id": "Kitchen-appliances",
                "name": "kitchen Appliances",
                "subcategories": ["Blenders", "Microwaves", "Coffee Makers", "Pressure cookers", "Pans"]
            },
            {
                "id": "furniture",
                "name": "Furniture",
                "subcategories": ["Sofas", "Tables", "Chairs", "Beds"]
            },
            {
                "id": "home-decor",
                "name": "Home Decor",
                "subcategories": ["Rugs", "Lamps", "Mirrors", "Clocks"]
            },
            ,
            {
                "id": "pet",
                "name": "Pet supplies",
                "subcategories": ["Dogs", "Cats", "Fish and Aquatics"]
            }
        ]
    },
    {
        "id": "beauty",
        "name": "Beauty",
        "subcategories": [
            {
                "id": "face",
                "name": "Face",
                "subcategories": ["Foundation", "Concealer", "Powder"]
            },
            {
                "id": "eyes",
                "name": "Eyes",
                "subcategories": ["Eyeshadow", "Mascara", "Eyeliner"]
            },
            {
                "id": "lips",
                "name": "Lips",
                "subcategories": ["Lipstick", "Lip Gloss", "Lip Liner"]
            }
        ]
    },
    {
        "id": "travel",
        "name": "Travel",
        "subcategories": [
            {
                "id": "luggage",
                "name": "Luggage",
                "subcategories": ["Suitcases", "Backpacks", "Duffel Bags"]
            },
            {
                "id": "travel-accessories",
                "name": "Accessories",
                "subcategories": ["Travel Pillows", "Travel Adapters", "Luggage Tags"]
            },
            {
                "id": "travel-essentials",
                "name": "Travel Essentials",
                "subcategories": ["Passport Holders", "Toiletry Bags", "Travel Bottles"]
            }
        ]
    },
    {
        "id": "sports-stationary",
        "name": "Sports & Stationary",
        "subcategories": [
            {
                "id": "fitness-equipment",
                "name": "Fitness Equipment",
                "subcategories": ["Dumbbells", "Resistance Bands", "Yoga Mats"]
            },
            {
                "id": "sports-clothing",
                "name": "Clothing",
                "subcategories": ["Athletic Wear", "Running Shoes", "Sports Bras"]
            },
            {
                "id": "sports-accessories",
                "name": "Accessories",
                "subcategories": ["Water Bottles", "Gym Bags", "Fitness Trackers"]
            },
            {
                "id": "toys",
                "name": "Toys",
                "subcategories": null
            },
            ,
            {
                "id": "stationary",
                "name": "Stationary",
                "subcategories": null
            }

        ]
    }
];

$(document).ready(function () {
    const categoriesList = $("#categories");

    function createCategoryItem(categoryData) {
        const categoryItem = $("<li>").text(categoryData.name);

        const subcategoriesList = $("<ul>");

        if (!categoryData.subcategories) {
            const singleItem = $("<li>").text(categoryData.name);
            subcategoriesList.append(singleItem);
        } else {
            $.each(categoryData.subcategories, function(index, subcategoryData) {
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

    categoriesData.forEach(function(categoryData) {
        const categoryItem = createCategoryItem(categoryData);
        categoriesList.append(categoryItem);
    });
});



