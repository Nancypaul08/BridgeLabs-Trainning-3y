function loadProfile() {
    return new Promise(resolve => setTimeout(() => resolve("Profile Loaded"), 2000));
}

function loadPosts() {
    return new Promise(resolve => setTimeout(() => resolve("Posts Loaded"), 1500));
}

function loadMessages() {
    return new Promise(resolve => setTimeout(() => resolve("Messages Loaded"), 1000));
}

// Select exactly one module to reject so each run has both a success and a
// failure while still demonstrating Promise.allSettled for every request.
const modules = [
    ["Profile", loadProfile],
    ["Posts", loadPosts],
    ["Messages", loadMessages]
];
const failingModuleIndex = Math.floor(Math.random() * modules.length);
const requests = modules.map(([moduleName, loadModule], index) => {
    const request = loadModule();
    if (index !== failingModuleIndex) return request;
    return request.then(() => { throw new Error(`${moduleName} service unavailable`); });
});

const startTime = Date.now();
Promise.allSettled(requests).then(results => {
    results.forEach((result, index) => {
        const moduleName = modules[index][0];
        if (result.status === "fulfilled") {
            console.log(`${moduleName}: succeeded — ${result.value}`);
        } else {
            console.log(`${moduleName}: failed — ${result.reason.message}`);
        }
    });
    console.log(`Total time: ${Date.now() - startTime} ms`);
});
