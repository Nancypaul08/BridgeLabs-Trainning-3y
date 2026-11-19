// A callback runs after greetUser prints its greeting.
function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // Call the function passed into greetUser.
}

greetUser("Alex", showEndMessage);
