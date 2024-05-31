const searchJSON = (query) => {
  // Fetch JSON data from the data.json file
  return fetch("json-api/product.json")
    .then((response) => response.json())
    .then((data) => {
      const results = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
      });

      return results;
    })
    .catch((error) => console.error("Error fetching JSON:", error));
};

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("input_data");
  const autocompleteResults = document.getElementById("autocompleteResults");
  const searchButton = document.getElementById("searchButton");
  const resultsContainer = document.getElementById("results");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim();
    searchJSON(query).then((autocompleteSuggestions) => {
      // Clear previous autocomplete suggestions
      autocompleteResults.innerHTML = "";

      // Display autocomplete suggestions
      if (query.length > 0 && autocompleteSuggestions.length > 0) {
        autocompleteSuggestions.forEach((result) => {
          const suggestionItem = document.createElement("div");
          suggestionItem.classList.add("autocomplete-item");
          suggestionItem.textContent = `${result.name} - ${result.category}`;
          suggestionItem.addEventListener("click", function () {
            searchInput.value = result.name;
            autocompleteResults.style.display = "none";
          });
          autocompleteResults.appendChild(suggestionItem);
        });
        autocompleteResults.style.display = "block";
      } else {
        autocompleteResults.style.display = "none";
      }
    });
  });

  searchButton.addEventListener("click", function () {
    autocompleteResults.style.display = "none";
    const query = searchInput.value.trim();

    if (query === "") {
      resultsContainer.innerHTML = "";
    } else {
      searchJSON(query).then((searchResults) => {
        // Clear previous results
        resultsContainer.innerHTML = "";

        // Display results
        if (searchResults.length === 0) {
          resultsContainer.innerHTML = "No results found.";
        } else {
          searchResults.forEach((result) => {
            const resultElement = document.createElement("div");
            resultElement.classList.add("col-md-2");
            resultElement.classList.add("col-sm-4");
            resultElement.classList.add("col-6");
            resultElement.classList.add("p-2");
            resultElement.innerHTML = `
            <a href="addtokart/?query=${result.name}">
            <div class="text-center" style="height:150px";>
            <img src="json-api/product-img/${result.productImg}" style="width: 100%; height: 100%; object-fit: contain;"
            alt="${result.name}">
            </div>
            <div class="text-center card-title">${result.name}</div>
            <div class="text-center">Price: ₹${result.price}</div>
            </a>
            `;
            resultsContainer.appendChild(resultElement);
          });          
        }
      });
    }
  });
});
