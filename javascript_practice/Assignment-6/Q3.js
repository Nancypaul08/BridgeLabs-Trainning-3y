// Promise-based replacement for the callback-style fetchBugs function.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;
            if (apiFailed) {
                reject(new Error("Bug tracker API request failed."));
                return;
            }
            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bugs returned by the tracker:");
        console.table(bugs.map((description, index) => ({ id: index + 1, description })));
    })
    .catch(error => console.error("Could not load bugs:", error.message));
