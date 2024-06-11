// footer and content page load 
document.addEventListener("DOMContentLoaded", () => {
  const components = [
    // { id: "content-page", url: "pages/content-page.html" },
    { id: "footer", url: "footer/footer.html" },
  ];

  components.forEach((component) => {
    fetch(component.url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(component.id).innerHTML = data;
      })
      .catch((error) =>
        console.error(`Error loading ${component.url}:`, error)
      );
  });
});
// end -footer



// Show or hide the "Go to Top" button based on scroll position
window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("goToTopBtn");
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});



 // Scroll to the top when the button is clicked
document.getElementById("goToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});


// loader
// old
// setTimeout(function() {
//     document.getElementById('loader').style.display = 'none';
//   }, 2000);

// new
  document.addEventListener("DOMContentLoaded", function() {
		const loader = document.querySelector(".loader-container");
		setTimeout(function() {
			loader.style.display = "none";
		}, 2000);
	});




