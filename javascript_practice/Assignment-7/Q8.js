const dropdown = document.querySelector("#custom-dropdown");
const dropdownToggle = document.querySelector("#dropdown-toggle");
const dropdownOptions = document.querySelector("#dropdown-options");

function closeDropdown() {
    dropdownOptions.hidden = true;
    dropdownToggle.setAttribute("aria-expanded", "false");
}

// Capture the click before it reaches descendants; close only for outside clicks.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) closeDropdown();
}, true);

dropdownToggle.addEventListener("click", () => {
    const isOpening = dropdownOptions.hidden;
    dropdownOptions.hidden = !isOpening;
    dropdownToggle.setAttribute("aria-expanded", String(isOpening));
});

dropdownOptions.addEventListener("click", event => {
    const option = event.target.closest("[data-option]");
    if (!option) return;
    dropdownToggle.textContent = option.dataset.option;
    closeDropdown();
});
