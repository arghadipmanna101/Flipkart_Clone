document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.getElementById("categories");

    function createCategoryItem(categoryData) {
        const categoryItem = document.createElement("li");
        categoryItem.classList.add("category-item");


        const icon = document.createElement("img");
        icon.src = "img/" + categoryData.icon;

        const nameLink = document.createElement("a");
        nameLink.href = categoryData.name + "-/"; //find index.html
        nameLink.textContent = categoryData.name;

        const name = document.createElement("span");
        name.appendChild(document.createElement("br"));
        name.appendChild(nameLink);

        categoryItem.appendChild(icon);
        categoryItem.appendChild(name);

        // const subcategoriesList = document.createElement("ul");

        if (categoryData.subcategories && categoryData.subcategories.length > 0) {
            const subcategoriesList = document.createElement("ul");
            subcategoriesList.classList.add("subcategories-list");

            categoryData.subcategories.forEach(function (subcategoryData) {
                const subcategoryItem = document.createElement("li");

                if (typeof subcategoryData === 'string') {
                    subcategoryItem.textContent = subcategoryData;
                } else if (subcategoryData) {
                    const subcategoryLink = document.createElement("a");
                    subcategoryLink.href = subcategoryData.name + "-/";
                    subcategoryLink.textContent = subcategoryData.name;
                    subcategoryItem.appendChild(subcategoryLink);
                }

                subcategoriesList.appendChild(subcategoryItem);
            });

            categoryItem.appendChild(subcategoriesList);
        }

        return categoryItem;
    }

    fetch('js/categoryData.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(function (categoryData) {
                const categoryItem = createCategoryItem(categoryData);
                categoriesList.appendChild(categoryItem);
            });
        })
        .catch(error => console.error('Error fetching category data:', error));
});