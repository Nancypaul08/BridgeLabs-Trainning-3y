// Fetch product data from the Fake Store API and print useful card details.
async function displayProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const products = await response.json();
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}\n`);
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.", error.message);
    }
}

// Run with Node.js 18+ or in a modern browser with fetch support.
displayProducts();
