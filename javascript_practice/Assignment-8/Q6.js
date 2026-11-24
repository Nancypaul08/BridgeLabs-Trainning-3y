// E-commerce inventory operations with array methods.
const products = [
    { id: 1, name: "Tea", category: "Grocery", price: 8, stock: 3 },
    { id: 2, name: "Coffee", category: "Grocery", price: 14, stock: 12 },
    { id: 3, name: "Mug", category: "Kitchen", price: 10, stock: 4 },
    { id: 4, name: "Pan", category: "Kitchen", price: 32, stock: 7 },
    { id: 5, name: "Notebook", category: "Stationery", price: 5, stock: 2 }
];

function getLowStockProducts(items, threshold = 5) {
    return items.filter(product => product.stock < threshold);
}

function sortProductsByPrice(items) {
    return [...items].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(items) {
    return items.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(items) {
    return items.reduce((groups, product) => {
        if (!groups[product.category]) groups[product.category] = [];
        groups[product.category].push(product);
        return groups;
    }, {});
}

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

print(`Low stock (under 5): ${getLowStockProducts(products).map(product => product.name).join(", ")}`);
print(`Price order: ${sortProductsByPrice(products).map(product => `${product.name} ($${product.price})`).join(", ")}`);
print(`Total inventory value: $${calculateTotalInventoryValue(products).toFixed(2)}`);
Object.entries(groupByCategory(products)).forEach(([category, items]) => {
    print(`${category}: ${items.map(product => product.name).join(", ")}`);
});
