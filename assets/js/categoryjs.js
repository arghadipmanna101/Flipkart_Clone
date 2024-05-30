document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.getElementById("categories");

    function createCategoryItem(categoryData) {
        const categoryItem = document.createElement("li");

        const icon = document.createElement("img");
        icon.src = "assets/img/" + categoryData.icon;

        const nameLink = document.createElement("a");
        nameLink.href = categoryData.name + "-/"; //find index.html
        nameLink.textContent = categoryData.name;

        const name = document.createElement("span");
        name.appendChild(document.createElement("br"));
        name.appendChild(nameLink);

        categoryItem.appendChild(icon);
        categoryItem.appendChild(name);

        const subcategoriesList = document.createElement("ul");

        if (!categoryData.subcategories) {
            const singleItem = document.createElement("li");
            const singleLink = document.createElement("a");
            singleLink.href = categoryData.name + "-/";
            singleLink.textContent = categoryData.name;
            singleItem.appendChild(singleLink);
            subcategoriesList.appendChild(singleItem);
        } else {
            categoryData.subcategories.forEach(function (subcategoryData) {
                if (subcategoryData && subcategoryData.name === undefined) {
                    const singleItem = document.createElement("li");
                    singleItem.textContent = subcategoryData;
                    subcategoriesList.appendChild(singleItem);
                } else if (subcategoryData) {
                    const subcategoryItem = createCategoryItem(subcategoryData);
                    subcategoriesList.appendChild(subcategoryItem);
                }
            });
        }

        categoryItem.appendChild(subcategoriesList);
        // console.log(categoryItem);

        return categoryItem;
    }

    fetch('assets/js/categoryData.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(function (categoryData) {
                const categoryItem = createCategoryItem(categoryData);
                categoriesList.appendChild(categoryItem);
            });
        })
        .catch(error => console.error('Error fetching category data:', error));
});
