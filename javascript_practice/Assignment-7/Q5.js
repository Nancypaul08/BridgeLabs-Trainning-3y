const galleryModal = document.querySelector("#gallery-modal");
const modalImage = document.querySelector("#modal-image");

document.querySelector("#image-gallery").addEventListener("click", event => {
    const selectedImage = event.target.closest("img[data-large]");
    if (!selectedImage) return;
    modalImage.src = selectedImage.dataset.large;
    modalImage.alt = selectedImage.alt;
    galleryModal.hidden = false;
    galleryModal.setAttribute("aria-hidden", "false");
});

galleryModal.addEventListener("click", () => {
    galleryModal.hidden = true;
    galleryModal.setAttribute("aria-hidden", "true");
});
document.querySelector("#modal-content").addEventListener("click", event => {
    // Keep clicks on the enlarged image from bubbling to the backdrop.
    event.stopPropagation();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        galleryModal.hidden = true;
        galleryModal.setAttribute("aria-hidden", "true");
    }
});
