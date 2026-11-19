const themeButtons = document.querySelectorAll("[data-theme-choice]");
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const themeName = button.dataset.themeChoice;
        // setAttribute updates both the theme class and the custom data attribute.
        document.body.setAttribute("class", `theme-${themeName}`);
        document.body.setAttribute("data-theme", themeName);
        document.querySelector("#active-theme").textContent = `Current theme: ${themeName}`;
    });
});
