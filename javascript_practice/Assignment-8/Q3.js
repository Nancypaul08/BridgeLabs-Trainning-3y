// Product constructor and a prototype method.
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100 percent.");
    }
    return this.price * (1 - percent / 100);
};

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

const products = [
    new Product("Headphones", 80),
    new Product("Keyboard", 120),
    new Product("Mouse", 40)
];
const discounts = [10, 15, 5];
products.forEach((product, index) => {
    print(`${product.name}: $${product.price.toFixed(2)} → $${product.applyDiscount(discounts[index]).toFixed(2)} (${discounts[index]}% off)`);
});
print("Abstraction: callers use applyDiscount(percent) without repeating the discount calculation.");
