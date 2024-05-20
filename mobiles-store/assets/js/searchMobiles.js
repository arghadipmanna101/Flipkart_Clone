const searchJSON = (query) => {
  // Fetch JSON data from the data.json file
  return fetch('assets/js/tutorialData.json')
    .then((response) => response.json())
    .then((data) => {
      const results = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.topic.toLowerCase().includes(query.toLowerCase())
        );
      });

      return results;
    })
    .catch((error) => console.error('Error fetching JSON:', error));
};

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const autocompleteResults = document.getElementById("autocompleteResults");
  const searchButton = document.getElementById("searchButton");
  const resultsContainer = document.getElementById("results");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim();
    searchJSON(query)
      .then((autocompleteSuggestions) => {
        // Clear previous autocomplete suggestions
        autocompleteResults.innerHTML = "";

        // Display autocomplete suggestions
        if (query.length > 0 && autocompleteSuggestions.length > 0) {
          autocompleteSuggestions.forEach((result) => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("autocomplete-item");
            suggestionItem.textContent = `${result.name} - ${result.topic}`;
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
      resultsContainer.innerHTML = "Please enter any topic or teacher's name";
    } else {
      searchJSON(query)
        .then((searchResults) => {
          // Clear previous results
          resultsContainer.innerHTML = "";

          // Display results
          if (searchResults.length === 0) {
            resultsContainer.innerHTML = "No results found.";
          } else {
            searchResults.forEach((result) => {
              const resultElement = document.createElement("div");
              resultElement.classList.add("col-lg-5");
              resultElement.innerHTML = `${result.frameLink}`;
              resultsContainer.appendChild(resultElement);
            });
          }
        });
    }
  });
});
