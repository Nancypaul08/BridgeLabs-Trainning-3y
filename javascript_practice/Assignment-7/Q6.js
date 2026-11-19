const studentSearch = document.querySelector("#student-search");
const studentRows = [...document.querySelectorAll("#student-table tbody tr")];
const noResultsMessage = document.querySelector("#no-results");

studentSearch.addEventListener("input", () => {
    const searchTerm = studentSearch.value.trim().toLowerCase();
    let visibleRows = 0;
    studentRows.forEach(row => {
        const matches = row.textContent.toLowerCase().includes(searchTerm);
        row.hidden = !matches;
        if (matches) visibleRows += 1;
    });
    noResultsMessage.hidden = visibleRows !== 0;
});
