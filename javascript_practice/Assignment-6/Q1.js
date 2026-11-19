// Each coffee step takes a random 1–2 seconds and may fail.
function waitForCoffeeStep(stepName) {
    const delay = 1000 + Math.random() * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed.`));
                return;
            }
            console.log(stepName);
            resolve();
        }, delay);
    });
}

waitForCoffeeStep("Water boiled")
    .then(() => waitForCoffeeStep("Coffee brewed"))
    .then(() => waitForCoffeeStep("Coffee poured into a cup"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process error:", error.message));
