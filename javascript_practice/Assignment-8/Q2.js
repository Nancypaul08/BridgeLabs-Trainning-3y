// Online food ordering with map(), reduce(), and error handling.
const menu = [
    { name: "Burger", price: 8.5 },
    { name: "Pizza", price: 12 },
    { name: "Salad", price: 6.25 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(itemName => {
        const item = menu.find(menuItem => menuItem.name === itemName);
        if (!item) throw new Error(`“${itemName}” is not on the menu.`);
        return item.price;
    });
    return prices.reduce((total, price) => total + price, 0);
}

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

try {
    const order = ["Burger", "Salad"];
    print(`Order total: $${calculateBill(order).toFixed(2)}`);
} catch (error) {
    print(`Could not calculate order: ${error.message}`);
}

try {
    calculateBill(["Burger", "Sushi"]);
} catch (error) {
    print(`Could not calculate order: ${error.message}`);
}
