// Movie tickets and an inherited online-ticket type.
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    return `${this.movieName} | Seat ${this.seatNo} | Ticket price: $${this.price.toFixed(2)}`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

const ticket = new OnlineTicket("The Grand Adventure", "B12", 14, 2.5);
print(ticket.printTicket());
print(`Convenience fee: $${ticket.convenienceFee.toFixed(2)}`);
print(`Total: $${ticket.getTotalAmount().toFixed(2)}`);
print(`printTicket inherited from MovieTicket.prototype: ${MovieTicket.prototype.isPrototypeOf(ticket)}`);
