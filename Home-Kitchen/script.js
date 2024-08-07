// Initialize cart
let cart = [];

// Function to update cart display
function updateCartDisplay() {
    // For simplicity, just log cart items to console
    console.log('Cart:', cart);
}

// Function to handle add to cart button click
function handleAddToCart(event) {
    // Ensure the button is clicked
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('add-to-cart')) {
        const productCard = event.target.closest('.product-card');
        const productId = productCard.getAttribute('data-product-id');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;

        // Add product to cart
        const product = {
            id: productId,
            name: productName,
            price: productPrice,
        };

        cart.push(product);
        updateCartDisplay();
    }
}

// Attach event listener to the document
document.addEventListener('click', handleAddToCart);
