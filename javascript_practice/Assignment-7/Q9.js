const validationForm = document.querySelector("#validation-form");
const validationFields = {
    name: {
        input: validationForm.elements.name,
        error: document.querySelector("#name-error"),
        message: "Name is required.",
        isValid: value => value.trim() !== ""
    },
    email: {
        input: validationForm.elements.email,
        error: document.querySelector("#email-error"),
        message: "Enter an email address containing @.",
        isValid: value => value.trim() !== "" && value.includes("@")
    },
    password: {
        input: validationForm.elements.password,
        error: document.querySelector("#password-error"),
        message: "Password must be at least 6 characters.",
        isValid: value => value.length >= 6
    }
};

function validateField(field) {
    const isValid = field.isValid(field.input.value);
    field.error.textContent = isValid ? "" : field.message;
    field.input.setAttribute("aria-invalid", String(!isValid));
    return isValid;
}

Object.values(validationFields).forEach(field => {
    field.input.addEventListener("input", () => {
        validateField(field);
        document.querySelector("#form-success").textContent = "";
    });
});

validationForm.addEventListener("submit", event => {
    event.preventDefault(); // Keep the demo on this page and show inline feedback.
    const isFormValid = Object.values(validationFields).map(validateField).every(Boolean);
    document.querySelector("#form-success").textContent = isFormValid ? "Form Submitted Successfully" : "";
});
