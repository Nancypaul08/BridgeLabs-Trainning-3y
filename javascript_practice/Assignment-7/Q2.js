const messageBox = document.querySelector("#message");
const characterCounter = document.querySelector("#character-counter");
const characterLimit = 100;

function updateCharacterCounter() {
    const remainingCharacters = characterLimit - messageBox.value.length;
    characterCounter.textContent = `${remainingCharacters} characters remaining`;
    characterCounter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
    characterCounter.classList.toggle("limit-reached", remainingCharacters === 0);
}

// beforeinput lets us cancel an insertion at the limit with preventDefault().
messageBox.addEventListener("beforeinput", event => {
    const addsText = event.inputType.startsWith("insert");
    const insertedText = event.data ?? event.dataTransfer?.getData("text") ?? "";
    if (addsText && messageBox.value.length + insertedText.length > characterLimit) {
        event.preventDefault();
    }
});
messageBox.addEventListener("input", updateCharacterCounter);
document.querySelector("#reset-message").addEventListener("click", () => {
    messageBox.value = "";
    updateCharacterCounter();
    messageBox.focus();
});
updateCharacterCounter();
