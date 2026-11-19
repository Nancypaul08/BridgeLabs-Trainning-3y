// Each server responds after its specified delay and can randomly fail.
function contactServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
                return;
            }
            resolve(`${serverName} responded`);
        }, delay);
    });
}

const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment error:", error.message));

Promise.race([serverA, serverB])
    .then(firstResponse => console.log("Fastest response:", firstResponse))
    .catch(error => console.error("Fastest response failed:", error.message));
