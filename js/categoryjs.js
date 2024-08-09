document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.getElementById("categories");

    function createCategoryItem(categoryData) {
        console.log("Creating category item for:", categoryData.name);
        const categoryItem = document.createElement("li");
        categoryItem.id = categoryData.id;

        const icon = document.createElement("img");
        icon.src = "img/" + categoryData.icon;

        const nameLink = document.createElement("a");
        nameLink.href = "#"; // Default href is "#"
        nameLink.textContent = categoryData.name;

        const name = document.createElement("span");
        name.appendChild(document.createElement("br"));
        name.appendChild(nameLink);

        categoryItem.appendChild(icon);
        categoryItem.appendChild(name);

        const subcategoriesList = document.createElement("div");
        subcategoriesList.classList.add('dropdownbox', `${categoryData.id}`);

        if (!categoryData.subcategories) {
            const singleItem = document.createElement("div");
            const singleLink = document.createElement("a");
            singleLink.href = "#";
            singleLink.textContent = categoryData.name;
            singleItem.appendChild(singleLink);
            subcategoriesList.appendChild(singleItem);
        } else {
            categoryData.subcategories.forEach(function (subcategoryData) {
                if (subcategoryData && subcategoryData.name === undefined) {
                    const singleItem = document.createElement("div");
                    singleItem.textContent = subcategoryData;
                    subcategoriesList.appendChild(singleItem);
                } else if (subcategoryData) {
                    const subcategoryItem = createSubcategoryItem(subcategoryData);
                    subcategoriesList.appendChild(subcategoryItem);
                }
            });
        }

        categoryItem.appendChild(subcategoriesList);

        categoryItem.addEventListener('mouseenter', function (event) {
            const existingList = document.querySelector(`.${categoryData.id}`);
            if (existingList) {
                existingList.remove();
            }
            document.querySelector('.categorylist-wrapper').appendChild(subcategoriesList);
            subcategoriesList.style.display = 'block';
        });

        categoryItem.addEventListener('mouseleave', function (event) {
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !relatedTarget.closest(`.${event.target.id}`)) {
                document.querySelectorAll(`.${event.target.id}`).forEach(elem => elem.remove());
                subcategoriesList.style.display = 'none';
            }
        });

        if (subcategoriesList && subcategoriesList.childNodes.length) {
            subcategoriesList.addEventListener('mouseenter', function(event){
                subcategoriesList.style.display = 'block';
            });
            
            subcategoriesList.addEventListener('mouseleave', function (event) {
                subcategoriesList.style.display = 'none';
                document.querySelectorAll(`.${categoryData.id}`).forEach(elem => elem.remove());
            });
        } else {
            console.log("subcategoriesList is not defined or is empty.");
        }

        // Add click event listener to redirect to top-offers.html if id is "top-offers"
        categoryItem.addEventListener('click', function () {
            if (categoryData.id === "top-offers") {
                window.location.href = "top-offers.html";
            }
        });

        return categoryItem;
    }

    function createSubcategoryItem(subcategoryData) {
        console.log("Creating subcategory item for:", subcategoryData.name);
        // Create the main subcategory item div
        const subcategoryItem = document.createElement("div");

        // Append the subcategory name
        const subcategoryName = document.createElement("div");
        subcategoryName.textContent = subcategoryData.name;
        subcategoryName.className = subcategoryData.id;
        subcategoryItem.appendChild(subcategoryName);

        // If there are subcategories, create a subsubcategories list
        if (subcategoryData.subcategories) {
            const subsubcategoriesList = document.createElement("div");
            subsubcategoriesList.id = subcategoryData.id;
            subsubcategoriesList.className = "subdropdown";

            const moreInText = document.createElement("div");
            moreInText.textContent = `More in ${subcategoryData.name}`;
            subsubcategoriesList.appendChild(moreInText);

            // Iterate over subcategories and append each subsubcategory item
            subcategoryData.subcategories.forEach(function (subsubcategoryData) {
                const subsubcategoryItem = document.createElement("div");
                subsubcategoryItem.textContent = subsubcategoryData;
                subsubcategoriesList.appendChild(subsubcategoryItem);
            });

            subcategoryItem.appendChild(subsubcategoriesList);
        }

        // Append the side arrow span
        const sideArrow = document.createElement("span");
        sideArrow.className = 'sidearrow';
        subcategoryItem.appendChild(sideArrow);

        return subcategoryItem;
    }

    fetch('js/categoryData.json')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);
            data.forEach(function (categoryData) {
                const categoryItem = createCategoryItem(categoryData);
                categoriesList.appendChild(categoryItem);
            });
        })
        .catch(error => console.error('Error fetching category data:', error));
});
