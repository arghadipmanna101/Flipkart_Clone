const categoriesData = [
    {
        "id": "grocery",
        "name": "Grocery",
        "image": "grocery.png",
        "subcategories": [],        
        // "subcategories": [
        //     {
        //         "id": "fruits-vegetables",
        //         "name": "Fruits & Vegetables",
        //         "subcategories": ["Fresh Fruits", "Fresh Vegetables"]
        //     },
        //     {
        //         "id": "dairy-eggs",
        //         "name": "Dairy & Eggs",
        //         "subcategories": ["Milk", "Cheese", "Eggs"]
        //     },
        //     {
        //         "id": "bakery",
        //         "name": "Bakery",
        //         "subcategories": ["Bread", "Pastries", "Cakes"]
        //     },
        //     {
        //         "id": "canned-packaged",
        //         "name": "Canned & Packaged",
        //         "subcategories": ["Canned Food", "Pasta", "Rice", "Snacks"]
        //     },
        //     {
        //         "id": "desserts",
        //         "name": "Desserts",
        //         "subcategories": null
        //     }
        // ]
    },
    {
        "id": "mobiles",
        "name": "Mobiles",
        "image": "mobile.png",
        "subcategories": []
    },
    {
        "id": "fashion",
        "name": "fashion",
        "image":"fashion.png",
        "subcategories": [
            {
                "id": "mens-fashion",
                "name": "Men's fashion",
                "subcategories": ["Shirts", "Pants", "Jackets"]
            },
            {
                "id": "womens-fashion",
                "name": "Women's fashion",
                "subcategories": ["Dresses", "Skirts", "Tops"]
            },
            {
                "id": "kids-fashion",
                "name": "Kids' fashion",
                "subcategories": ["T-shirts", "Jeans", "Dresses"]
            }
        ]
    },
    {
        "id": "electronics",
        "name": "Electronics",
        "image": "electronics.png",
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
        "id": "home-furniture",
        "name": "Home & Furniture",
        "image":"home&furniture.png",
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
        "id": "appliances",
        "name": "Appliances",
        "image":"appliances.png",
        "subcategories": []
    },
    {
        "id": "travel",
        "name": "Travel",
        "image":"travel.png",
        "subcategories": []
        //     {
        //         "id": "luggage",
        //         "name": "Luggage",
        //         "subcategories": ["Suitcases", "Backpacks", "Duffel Bags"]
        //     },
        //     {
        //         "id": "travel-accessories",
        //         "name": "Accessories",
        //         "subcategories": ["Travel Pillows", "Travel Adapters", "Luggage Tags"]
        //     },
        //     {
        //         "id": "travel-essentials",
        //         "name": "Travel Essentials",
        //         "subcategories": ["Passport Holders", "Toiletry Bags", "Travel Bottles"]
        //     }
        // ]
    },
    {
        "id": "beauty",
        "name": "Beauty, Toys&more",
        "image":"beauty&toys.png",
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
        "id": "two-wheelers",
        "name": "Two Wheelers",
        "image":"two-wheeler.png",
        "subcategories": [
            {
                "id": "fitness-equipment",
                "name": "Fitness Equipment",
                "subcategories": ["Dumbbells", "Resistance Bands", "Yoga Mats"]
            },
            {
                "id": "sports-fashion",
                "name": "fashion",
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
        
        let categoryItem;

        if(categoryData?.subcategories?.length === 0){
            categoryItem = $("<li>").append(`<p class="category">${categoryData.name} <p>`);
        }else{
            categoryItem = $("<li>").append(`<p class="category">${categoryData.name} <svg class="category-down-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg> <p>`);

        }

        categoryItem.append(`<img class='catecoryImg' src='images/categories/${categoryData.image}' alt='img' />`);
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



