// Callback-based stages used to demonstrate a deeply nested pipeline.
function runStageWithCallback(stageName, callback) {
    setTimeout(() => {
        console.log(`[callback] ${stageName}`);
        callback();
    }, 1000);
}

function runCallbackPipeline() {
    console.log("Callback pipeline:");
    runStageWithCallback("design", () => {
        runStageWithCallback("build", () => {
            runStageWithCallback("test", () => {
                runStageWithCallback("deploy", () => {
                    runStageWithCallback("celebrate", () => {
                        console.log("Callback pipeline complete.");
                    });
                });
            });
        });
    });
}

// Async/await keeps the same sequential order with a flat, readable flow.
function waitForStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
        console.log(`[async/await] ${stageName}`);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("Async/await pipeline:");
    await waitForStage("design");
    await waitForStage("build");
    await waitForStage("test");
    await waitForStage("deploy");
    await waitForStage("celebrate");
    console.log("Async/await pipeline complete.");
}

// async/await avoids deeply nested indentation and lets try/catch handle
// failures in a way that resembles ordinary synchronous control flow.
runCallbackPipeline();
runAsyncPipeline();
