// Simulate an order API that has a 50% chance to fail on each attempt.
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject(new Error("Temporary order service error"));
                return;
            }
            resolve("Order accepted");
        }, 400);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success — ${result}`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed — ${error.message}`);
        }
    }
    throw new Error("Order could not be processed");
}

processOrder().catch(error => console.error("Final order error:", error.message));
