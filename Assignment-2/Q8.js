// Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

const cartValue = cart.reduce((total, product) => total + product.price, 0);
let discountedSubtotal = 0;

for (const product of cart) {
  let itemDiscountRate = 0;
  if (product.category === "electronics") {
    itemDiscountRate = 0.10;
  } else if (product.category === "fashion") {
    itemDiscountRate = 0.05;
  }
  discountedSubtotal += product.price * (1 - itemDiscountRate);
}

const qualifiesForExtraDiscount = cartValue > 50000;
const finalTotal = discountedSubtotal * (qualifiesForExtraDiscount ? 0.95 : 1);
console.log(`Cart value before discounts: ₹${cartValue.toFixed(2)}`);
console.log(`Extra 5% cart discount: ${qualifiesForExtraDiscount ? "Yes" : "No"}`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
