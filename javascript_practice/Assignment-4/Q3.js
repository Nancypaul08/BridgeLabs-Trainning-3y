// Library model and ISBN-based issuing.
class Book {
    constructor(title, author, isbn, isIssued = false) {
        Object.assign(this, { title, author, isbn, isIssued });
    }
    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }
    returnBook() {
        if (!this.isIssued) return false;
        this.isIssued = false;
        return true;
    }
}

const books = [
    new Book("The Hobbit", "J.R.R. Tolkien", "9780547928227"),
    new Book("Pride and Prejudice", "Jane Austen", "9780141439518"),
    new Book("Dune", "Frank Herbert", "9780441172719", true)
];

function displayAvailableBooks() {
    const available = books.filter(book => !book.isIssued);
    console.log("Available books:", available.map(({ title, author, isbn }) => `${title} by ${author} (ISBN ${isbn})`));
}

function issueBookByISBN(isbn) {
    const book = books.find(item => item.isbn === isbn.trim());
    if (!book) return "No book found with that ISBN.";
    return book.issueBook() ? `Issued: ${book.title}` : `${book.title} is already issued.`;
}

displayAvailableBooks();
console.log(issueBookByISBN("9780547928227"));
