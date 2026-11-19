// Validate a booking, then display a ticket summary.
const bookingForm = document.querySelector("#booking-form");
bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = bookingForm.elements.name.value.trim();
    const email = bookingForm.elements.email.value.trim();
    const seatsText = bookingForm.elements.seats.value;
    const errors = [];
    if (!/^[A-Za-z]+(?:[ '\u2019-][A-Za-z]+)*$/.test(name)) errors.push("Enter a name using letters only.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email address.");
    if (!/^\d+$/.test(seatsText) || Number(seatsText) < 1 || Number(seatsText) > 10) errors.push("Choose between 1 and 10 seats.");

    const output = document.querySelector("#booking-result");
    if (errors.length) {
        output.textContent = errors.join(" ");
        return;
    }
    const booking = { name, email, seats: Number(seatsText) };
    output.textContent = `Ticket booked for ${booking.name} (${booking.email}) — ${booking.seats} seat(s).`;
});
