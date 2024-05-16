const categoriesData = [
    {
        "id": "grocery",
        "name": "Grocery",
        "subcategories": false
    },
    {
        "id": "mobile",
        "name": "Mobile",
        "subcategories": false
    },
    {
        "id": "clothing",
        "name": "Fashion",
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
        "id": "electronics",
        "name": "Electronics",
        "subcategories": false
    },
    {
        "id": "home-furniture",
        "name": "Home & Furniture",
        "subcategories": [
            {
                "id": "kitchen-appliances",
                "name": "Kitchen Appliances",
                "subcategories": ["Blenders", "Microwaves", "Coffee Makers", "Pressure Cookers", "Pans"]
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
        "name": "Beauty, Toys & More",
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
        "id": "Vehicle",
        "name": "Two Wheelers",
        "subcategories": [
            {
                "id": "vehicle1",
                "name": "Petrol Vehicles",
                "subcategories": false
            },
            {
                "id": "vehicle2",
                "name": "Electrical Vehicles",
                "subcategories": false
            }
        ]
    }
];
$(document).ready(function () {
    const categoriesList = $("#categories");

    function createSubcategories(subcategories) {
        const subcategoriesList = $("<ul>");

        subcategories.forEach(subcategory => {
            if (typeof subcategory === "string") {
                subcategoriesList.append($("<li>").text(subcategory));
            } else if (subcategory && subcategory.name) {
                const subcategoryItem = $("<li>").text(subcategory.name);
                if (subcategory.subcategories && subcategory.subcategories.length) {
                    subcategoryItem.append(createSubcategories(subcategory.subcategories));
                    subcategoryItem.on('click', function (e) {
                        e.stopPropagation();
                        $(this).toggleClass('open');
                    });
                }
                subcategoriesList.append(subcategoryItem);
            }
        });

        return subcategoriesList;
    }

    function createCategoryItem(categoryData) {
        const categoryItem = $("<li>").text(categoryData.name);
        if (categoryData.subcategories && categoryData.subcategories.length) {
            categoryItem.append($("<span><i class='fa fa-angle-down'></i></span>"));
            categoryItem.append(createSubcategories(categoryData.subcategories));
            categoryItem.on('click', function (e) {
                e.stopPropagation();
                $(this).toggleClass('open');
            });
        }
        return categoryItem;
    }

    categoriesData.forEach(categoryData => {
        categoriesList.append(createCategoryItem(categoryData));
    });
});
