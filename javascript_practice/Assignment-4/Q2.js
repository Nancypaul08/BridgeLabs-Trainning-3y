// Browser validation for the registration form in Q2.html.
const registrationForm = document.querySelector("#registration-form");
const registrationRules = {
    name: /^[A-Za-z]+(?:[ '\u2019-][A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

registrationForm.addEventListener("submit", event => {
    event.preventDefault();
    let isFormValid = true;
    Object.entries(registrationRules).forEach(([fieldName, rule]) => {
        const input = registrationForm.elements[fieldName];
        const error = document.querySelector(`#${fieldName}-error`);
        const isValid = rule.test(input.value.trim());
        input.classList.toggle("valid", isValid);
        input.classList.toggle("invalid", !isValid);
        error.textContent = isValid ? "" : `Please enter a valid ${fieldName}.`;
        isFormValid &&= isValid;
    });
    document.querySelector("#registration-result").textContent = isFormValid ? "Registration details are valid." : "Please fix the highlighted fields.";
});
