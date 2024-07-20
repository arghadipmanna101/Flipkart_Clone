document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.getElementById("categories");

    function createCategoryItem(categoryData) {
        const categoryItem = document.createElement("li");
        categoryItem.id = categoryData.id;

        const icon = document.createElement("img");
        icon.src = "img/" + categoryData.icon;

        const name = document.createElement("span");
        name.textContent = categoryData.name;

        const nameWrapper = document.createElement("span");
        nameWrapper.appendChild(document.createElement("br"));
        nameWrapper.appendChild(name);

        categoryItem.appendChild(icon);
        categoryItem.appendChild(nameWrapper);

        const subcategoriesList = document.createElement("div");
        subcategoriesList.classList.add('dropdownbox', categoryData.id);

        if (categoryData.subcategories) {
            categoryData.subcategories.forEach(subcategoryData => {
                if (typeof subcategoryData === 'string') {
                    const singleItem = document.createElement("div");
                    singleItem.textContent = subcategoryData;
                    subcategoriesList.appendChild(singleItem);
                } else {
                    const subcategoryItem = createSubcategoryItem(subcategoryData);
                    subcategoriesList.appendChild(subcategoryItem);
                }
            });
        }

        categoryItem.appendChild(subcategoriesList);

        categoryItem.addEventListener('mouseenter', () => {
            subcategoriesList.style.display = 'block';
        });

        categoryItem.addEventListener('mouseleave', event => {
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !relatedTarget.closest(`.${categoryData.id}`)) {
                subcategoriesList.style.display = 'none';
            }
        });

        subcategoriesList.addEventListener('mouseenter', () => {
            subcategoriesList.style.display = 'block';
        });

        subcategoriesList.addEventListener('mouseleave', () => {
            subcategoriesList.style.display = 'none';
        });

        return categoryItem;
    }

    function createSubcategoryItem(subcategoryData) {
        const subcategoryItem = document.createElement("div");

        const subcategoryName = document.createElement("div");
        subcategoryName.textContent = subcategoryData.name;
        subcategoryName.className = subcategoryData.id;
        subcategoryItem.appendChild(subcategoryName);

        if (subcategoryData.subcategories) {
            const subsubcategoriesList = document.createElement("div");
            subsubcategoriesList.id = subcategoryData.id;
            subsubcategoriesList.className = "subdropdown";

            const moreInText = document.createElement("div");
            moreInText.textContent = `More in ${subcategoryData.name}`;
            subsubcategoriesList.appendChild(moreInText);

            subcategoryData.subcategories.forEach(subsubcategoryData => {
                const subsubcategoryItem = document.createElement("div");
                subsubcategoryItem.textContent = subsubcategoryData;
                subsubcategoriesList.appendChild(subsubcategoryItem);
            });

            subcategoryItem.appendChild(subsubcategoriesList);
        }

        const sideArrow = document.createElement("span");
        sideArrow.className = 'sidearrow';
        subcategoryItem.appendChild(sideArrow);

        return subcategoryItem;
    }

    fetch('js/categoryData.json')
        .then(response => response.json())
        .then(data => {
            categoriesList.innerHTML = '';
            data.forEach(categoryData => {
                const categoryItem = createCategoryItem(categoryData);
                categoriesList.appendChild(categoryItem);
            });
        })
        .catch(error => console.error('Error fetching category data:', error));
});
