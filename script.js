// Function to update the cart count display
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

// Initialize cart if it doesn't exist
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Function to add items to the cart
function addToCart(productName, price, imgSrc) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let product = {
        name: productName,
        price: price,
        img: imgSrc
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count
    updateCartCount();
}

// Ensure the cart count is updated when the page loads
window.onload = updateCartCount;