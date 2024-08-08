
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
