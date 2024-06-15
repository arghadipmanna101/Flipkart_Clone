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
    

        categoryItem.id = categoryData.id;

        const icon = document.createElement("img");
        icon.src = "img/" + categoryData.icon;


        const nameLink = document.createElement("a");
        nameLink.href = categoryData.name + "-/"; //find index.html
        nameLink.textContent = categoryData.name;
    
        const name = document.createElement("span");
        name.appendChild(nameLink);
    
        categoryItem.appendChild(name);

    
        const subcategoriesList = document.createElement("ul");
    


        const subcategoriesList = document.createElement("div");
        subcategoriesList.classList.add('dropdownbox', `${categoryData.id}`);


        if (!categoryData.subcategories) {
            const singleItem = document.createElement("div");
            const singleLink = document.createElement("a");
            singleLink.href = categoryData.name + "-/";
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

                    const subcategoryItem = createCategoryItem(subcategoryData, true);

                    const subcategoryItem = createSubcategoryItem(subcategoryData);

                    subcategoriesList.appendChild(subcategoryItem);
                }
            });
        }
    
        categoryItem.appendChild(subcategoriesList);



        categoryItem.addEventListener('mouseenter', function (event) {
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


        return categoryItem;
    }

    function createSubcategoryItem(subcategoryData) {
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
            data.forEach(function (categoryData) {
                const categoryItem = createCategoryItem(categoryData);
                categoriesList.appendChild(categoryItem);
            });
        })
        .catch(error => console.error('Error fetching category data:', error));
});
