const wizardForm = document.querySelector("#wizard-form");
const wizardSteps = [...document.querySelectorAll("[data-step]")];
const wizardSummary = document.querySelector("#wizard-summary");
let currentStepIndex = 0;

function showWizardStep(stepIndex) {
    wizardSteps.forEach((step, index) => { step.hidden = index !== stepIndex; });
    wizardSummary.hidden = true;
    currentStepIndex = stepIndex;
    document.querySelector("#step-number").textContent = String(stepIndex + 1);
}

function validateCurrentStep() {
    const activeStep = wizardSteps[currentStepIndex];
    const field = activeStep.querySelector("input");
    const errorMessage = activeStep.querySelector(".field-error");
    let isValid = field.value.trim() !== "";
    if (field.type === "email") isValid = field.checkValidity() && field.value.trim() !== "";
    errorMessage.textContent = isValid ? "" : (field.type === "email" ? "Enter a valid email address." : "This field is required.");
    return isValid;
}

wizardForm.addEventListener("input", event => {
    const errorMessage = event.target.closest("[data-step]")?.querySelector(".field-error");
    if (errorMessage) errorMessage.textContent = "";
});

wizardForm.addEventListener("click", event => {
    if (event.target.matches("[data-next]")) {
        if (!validateCurrentStep()) return;
        if (currentStepIndex < wizardSteps.length - 1) {
            showWizardStep(currentStepIndex + 1);
        } else {
            const values = Object.fromEntries(new FormData(wizardForm).entries());
            document.querySelector("#summary-name").textContent = values.name;
            document.querySelector("#summary-email").textContent = values.email;
            document.querySelector("#summary-password").textContent = "•".repeat(values.password.length);
            wizardSteps.forEach(step => { step.hidden = true; });
            wizardSummary.hidden = false;
        }
    }
    if (event.target.matches("[data-back]") && currentStepIndex > 0) {
        showWizardStep(currentStepIndex - 1);
    }
});

document.querySelector("#wizard-restart").addEventListener("click", () => {
    wizardForm.reset();
    wizardForm.querySelectorAll(".field-error").forEach(error => { error.textContent = ""; });
    showWizardStep(0);
});
