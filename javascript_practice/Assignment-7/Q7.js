const coordinateBox = document.querySelector("#coordinate-box");
const coordinateReadout = document.querySelector("#coordinate-readout");

coordinateBox.addEventListener("mousemove", event => {
    coordinateReadout.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

coordinateBox.addEventListener("dblclick", event => {
    const boxBounds = coordinateBox.getBoundingClientRect();
    const redDot = document.createElement("span");
    redDot.className = "click-dot";
    redDot.setAttribute("aria-label", "Double-click marker");
    redDot.style.left = `${event.clientX - boxBounds.left}px`;
    redDot.style.top = `${event.clientY - boxBounds.top}px`;
    coordinateBox.append(redDot);
});
