document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "footer-orders", url: "../components/footer/footer.html" },
    { id: "header-orders", url: "../components/header/header.html" },
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
