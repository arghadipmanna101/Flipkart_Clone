document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "footer-orders", url: "../footer/footer.html" },
    { id: "header-orders", url: "../header/header.html" },
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


// header search bar search function 
setTimeout(() => {  
  const inputField_h = document.getElementById('inputField_h');
  const fetchButton_h = document.getElementById('fetchButton_h');

  function fetchValue_h() {
      const value = inputField_h.value;
      window.location.href = `../search/?query=${value}`;
  }
 
  fetchButton_h.addEventListener('click', fetchValue_h);

  inputField_h.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          fetchValue_h();
      }
  });


}, 500);

//end 