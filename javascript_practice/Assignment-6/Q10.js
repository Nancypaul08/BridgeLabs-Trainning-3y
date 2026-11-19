// Each delivery stage gets a random 1–2 second delay and may fail.
function runDeliveryStep(stepName, successMessage) {
    const delay = 1000 + Math.random() * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed`));
                return;
            }
            console.log(successMessage);
            resolve();
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        // Await pauses this async function until the current step settles.
        // The event loop can process timers and other work during each wait.
        await runDeliveryStep("takeOrder", "Step 1: Order taken");
        await runDeliveryStep("prepare", "Step 2: Food prepared");
        await runDeliveryStep("pack", "Step 3: Package ready");
        await runDeliveryStep("dispatch", "Step 4: Out for delivery");
        await runDeliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();
