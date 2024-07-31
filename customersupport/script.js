document.addEventListener("DOMContentLoaded", () => {
    [
      { id: "footer-addkart", url: "../footer/footer.html" },
      { id: "header-addkart", url: "../header/header.html" },
    ].forEach(({ id, url }) =>
      fetch(url)
        .then((res) => res.text())
        .then((data) => (document.getElementById(id).innerHTML = data))
        .catch((err) => console.error(`Error loading ${url}:`, err))
    );
  });