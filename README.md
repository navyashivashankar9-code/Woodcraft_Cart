# wonder wood E-commerce Website

A small handcrafted wooden toys and crafts storefront built with static HTML/CSS/JavaScript and PHP support for backend connections.

## Project Overview

This project includes:
- `index.html` — homepage with brand introduction and navigation
- `product.html` — product catalog with add-to-cart buttons
- `cart.html` — shopping cart page that reads cart data from `localStorage`
- `about.html` — about page describing the business
- `contact_us.html` — contact page with form layout and support info
- `signup.html` — signup page for user registration
- `script.js` — client-side cart logic and cart count management
- `connection.php` — PHP MySQL connection helper for server-side operations
- `style.css` — shared styling for layout, navigation, and cart components

## Tech Stack

- HTML
- CSS
- JavaScript
- PHP
- MySQL
- Browser `localStorage`
- Google Fonts

## Setup Instructions

1. Clone or download the repository.
2. Serve the files from a local web server that supports PHP (for example, XAMPP, WAMP, or MAMP).
3. Place the project folder in your web server's document root.
4. Import or create a MySQL database named `jain` if using the PHP backend.
5. Update `connection.php` with your database credentials if needed.
6. Open `index.html` in your browser or access the project through your local web server.

## Cart Workflow

- Products are added to the cart with JavaScript via `addToCart()`.
- Cart items are stored in `localStorage.cart`.
- `cart.html` reads the cart from `localStorage`, renders items, calculates the total, and supports removal.
- Checkout stores invoice details in `localStorage.invoice` and redirects to `payment.html`.

## Notes

- The application uses client-side storage for cart persistence.
- `connection.php` is included for database connectivity but the project does not include all server-side pages such as `signup.php` or `payment.html`.


