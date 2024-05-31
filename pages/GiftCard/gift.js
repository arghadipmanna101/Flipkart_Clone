document.addEventListener('DOMContentLoaded', function() {
    const amountSelect = document.getElementById('amount');
    const selectedAmount = document.getElementById('selectedAmount');
    const form = document.getElementById('giftCardForm');
  
    amountSelect.addEventListener('change', function() {
      selectedAmount.textContent = `₹${amountSelect.value}`;
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert(`You have selected a gift card with amount: ₹${amountSelect.value}`);
    });
  });
  