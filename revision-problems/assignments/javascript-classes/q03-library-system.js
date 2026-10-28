class Book {
  constructor(title, author, isbn) { Object.assign(this, { title, author, isbn, isIssued: false }); }
  issueBook() { if (this.isIssued) return false; this.isIssued = true; return true; }
  returnBook() { this.isIssued = false; }
}
const books = [new Book("Clean Code", "Robert C. Martin", "9780132350884"), new Book("You Don't Know JS", "Kyle Simpson", "9781491904244")];
const requestedIsbn = "9780132350884";
const requested = books.find((book) => book.isbn === requestedIsbn);
console.log(requested?.issueBook() ? `Issued: ${requested.title}` : "Book unavailable");
console.table(books.filter((book) => !book.isIssued));
