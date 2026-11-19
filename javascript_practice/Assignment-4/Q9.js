// Cart totals and SAVE20 / DISC10-style coupon codes.
class Cart {
    constructor() { this.items = []; }
    addItem(name, price, quantity = 1) {
        if (!name.trim() || price < 0 || quantity < 1) throw new Error("Provide a name, non-negative price, and positive quantity.");
        this.items.push({ name: name.trim(), price: Number(price), quantity: Number(quantity) });
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    applyCoupon(code) {
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());
        if (!match || Number(match[2]) < 1 || Number(match[2]) > 99) return { valid: false, discount: 0, total: this.getTotal() };
        const discount = Number(match[2]);
        return { valid: true, discount, total: Number((this.getTotal() * (1 - discount / 100)).toFixed(2)) };
    }
}

const cart = new Cart();
cart.addItem("Notebook", 5.5, 2);
cart.addItem("Pen", 1.25, 3);
console.log("Subtotal:", cart.getTotal().toFixed(2));
console.log("SAVE20:", cart.applyCoupon("SAVE20"));
