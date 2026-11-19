// Add, edit, and delete products through one delegated list click handler.
const productForm = document.querySelector("#product-form");
const productInput = document.querySelector("#product-name");
const productList = document.querySelector("#product-list");

function saveProductEdit(input) {
    const productName = input.value.trim();
    const productItem = input.closest("li");
    if (productName) {
        const nameLabel = document.createElement("span");
        nameLabel.className = "product-name";
        nameLabel.textContent = productName;
        input.replaceWith(nameLabel);
    } else {
        productItem.remove();
    }
}

productForm.addEventListener("submit", event => {
    event.preventDefault();
    const productName = productInput.value.trim();
    if (!productName) return;

    const productItem = document.createElement("li");
    productItem.innerHTML = `<span class="product-name"></span><button type="button" data-action="edit">Edit</button><button type="button" data-action="delete">Delete</button>`;
    productItem.querySelector(".product-name").textContent = productName;
    productList.append(productItem);
    productInput.value = "";
    productInput.focus();
});

// One parent listener handles controls for all current and future list items.
productList.addEventListener("click", event => {
    const actionButton = event.target.closest("button[data-action]");
    if (!actionButton || !productList.contains(actionButton)) return;
    const productItem = actionButton.closest("li");

    if (actionButton.dataset.action === "delete") {
        productItem.remove();
        return;
    }

    const currentName = productItem.querySelector(".product-name");
    if (!currentName) return; // Already editing.
    const editInput = document.createElement("input");
    editInput.value = currentName.textContent;
    editInput.setAttribute("aria-label", "Edit product name");
    currentName.replaceWith(editInput);
    editInput.focus();
    editInput.select();
    editInput.addEventListener("blur", () => saveProductEdit(editInput), { once: true });
    editInput.addEventListener("keydown", keyEvent => {
        if (keyEvent.key === "Enter") editInput.blur();
    });
});
