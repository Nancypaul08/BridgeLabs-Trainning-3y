// Login form validation with a specific message for each failed rule.
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    const errors = [];
    if (!/^.{5,}$/.test(username)) errors.push("Username must be at least 5 characters.");
    if (password.length < 8) errors.push("Password must be at least 8 characters.");
    if (!/[0-9]/.test(password)) errors.push("Password must include a number.");
    if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
    if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");
    document.querySelector("#login-result").textContent = errors.length ? errors.join(" ") : "Login details are valid.";
});
