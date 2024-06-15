document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.getElementById("categories");

    function createCategoryItem(categoryData, isSubcategory = false) {
        const categoryItem = document.createElement("li");
    
        if (categoryData.icon && !isSubcategory) {
            const icon = document.createElement("img");
            icon.src = "img/" + categoryData.icon;
            icon.style.display = "block";
            icon.style.margin = "auto";
            categoryItem.appendChild(icon);
        }
    
        const nameLink = document.createElement("a");
        nameLink.href = categoryData.name + "-/"; //find index.html
        nameLink.textContent = categoryData.name;
    
        const name = document.createElement("span");
        name.appendChild(nameLink);
    
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
                    const subcategoryItem = createCategoryItem(subcategoryData, true);
                    subcategoriesList.appendChild(subcategoryItem);
                }
            });
        }
    
        categoryItem.appendChild(subcategoriesList);
    
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
