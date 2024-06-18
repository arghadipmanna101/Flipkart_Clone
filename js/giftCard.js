document.addEventListener("DOMContentLoaded", function () {
  const amountSelect = document.getElementById("amount");
  const selectedAmount = document.getElementById("selectedAmount");
  const form = document.getElementById("giftCardForm");

  amountSelect.addEventListener("change", function () {
    selectedAmount.textContent = `₹${amountSelect.value}`;
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(`You have selected a gift card with amount: ₹${amountSelect.value}`);
  });
});


// fetch footer

document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { id: "footer-giftCard", url: "../footer/footer.html" },
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
