// Product class, discount method, formatted details, and price filtering.
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent = 10) {
        this.price = Number((this.price * (1 - percent / 100)).toFixed(2));
        return this.price;
    }

    getDetails() {
        return `${this.name} (#${this.id}) — ${this.category}: $${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Keyboard", 1250, "Accessories"),
    new Product(2, "Mouse", 650, "Accessories"),
    new Product(3, "Monitor", 8200, "Electronics")
];

products[0].applyDiscount(10);
console.log("Products priced above 1000:");
products.filter(product => product.price > 1000).forEach(product => console.log(product.getDetails()));
