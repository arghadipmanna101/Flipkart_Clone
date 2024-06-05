const categoriesData = [
    {
        "id": "grocery",
        "name": "Grocery&Food",
        "image": "images/grocery.webp", // Add the path to the image
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
                "subcategories": ["Cookies", "Ice-Cream"]
            }
        ]
    },
    {
        "id": "electronics",
        "name": "Electronics",
        "image": "images/electronics.png",
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
        "image": "images/clothing.png",
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
        "image": "images/home-furniture.png",
        "subcategories": [
            {
                "id": "Kitchen-appliances",
                "name": "Kitchen Appliances",
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
            {
                "id": "pet",
                "name": "Pet Supplies",
                "subcategories": ["Dogs", "Cats", "Fish and Aquatics"]
            }
        ]
    },
    {
        "id": "beauty",
        "name": "Beauty",
        "image": "images/beauty.png",
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
        "image": "images/travel.png",
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
        "name": "Sports",
        "image": "images/sports-stationary.png",
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
                "subcategories": [
                    "Action Figures",
                    "Board Games",
                    "Dolls",
                    "Puzzles",
                    "Remote Control Toys"
                ]
            },
            {
                "id": "stationary",
                "name": "Stationary",
                "subcategories": [
                    "Notebooks",
                    "Pens",
                    "Markers",
                    "Folders",
                    "Sticky Notes"
                ]
            }
        ]
    }
];

$(document).ready(function () {
    const categoriesList = $("#categories");

    function createCategoryItem(categoryData) {
        const categoryItem = $("<li>").attr('id', `${categoryData.id}`);
        const categoryLink = $("<a>").attr("href", `#${categoryData.id}`).text(categoryData.name);

        // Adding images to the main category items only
        const categoryImage = $("<img>").attr("src", `./assets/images/${categoryData.id}.webp`).attr("alt", categoryData.name);
        categoryLink.prepend(categoryImage);

        categoryItem.append(categoryLink);

        const subcategoriesList = $("<div>").attr("class", `dropdownbox ${categoryData.id}`);


        if (!categoryData.subcategories) {
            const singleItem = $("<div>").text(categoryData.name);
            subcategoriesList.append(singleItem);
        } else {
            $.each(categoryData.subcategories, function (index, subcategoryData) {
                if (subcategoryData && typeof subcategoryData === "string") {
                    const subcategoryItem = $("<div>").text(subcategoryData);
                    subcategoriesList.append(subcategoryItem);
                } else if (subcategoryData) {
                    const subcategoryItem = createSubcategoryItem(subcategoryData);
                    subcategoriesList.append(subcategoryItem);
                }
            });
        }

        categoryItem.on('mouseenter', function (event) {
            $('.categorylist-wrapper').append(subcategoriesList);
            //categoryItem.append(subcategoriesList);
            subcategoriesList.show();
        });

        categoryItem.on('mouseleave', function (event) {

            // subcategorieslist should not hide when mouse leave to subdropdown
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget.closest(`.${event.target.id}`)) {
                $(`.${event.target.id}`).remove();
                subcategoriesList.hide();
            }
        });

        if (subcategoriesList && subcategoriesList.length) {
            subcategoriesList.on('mouseleave', function (event) {
                console.log(event.relatedTarget);
                subcategoriesList.hide();
                $(`.${categoryData.id}`).remove();
            });
        } else {
            console.log("subcategoriesList is not defined or is empty.");
        }

        return categoryItem;
    }

    function createSubcategoryItem(subcategoryData) {
        const subcategoryItem = $("<div>");
        subcategoryItem.append($("<div>").text(subcategoryData.name));
        if (subcategoryData.subcategories) {
            const subsubcategoriesList = $("<div>").attr({ "id": subcategoryData.id, "class": "subdropdown" });
            subsubcategoriesList.append($("<div>").text(`More in ${subcategoryData.name}`));

            $.each(subcategoryData.subcategories, function (index, subsubcategoryData) {
                const subsubcategoryItem = $("<div>").text(subsubcategoryData);
                subsubcategoriesList.append(subsubcategoryItem);
            });
            subcategoryItem.append(subsubcategoriesList);
        }
        subcategoryItem.append($("<span>").attr('class', 'sidearrow'));
        return subcategoryItem;
    }

    categoriesData.forEach(function (categoryData) {
        const categoryItem = createCategoryItem(categoryData);
        categoriesList.append(categoryItem);
    });

});


