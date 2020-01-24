
class Library  {
  constructor (books = []) {
    this.books = books;
  }
}




Library.bookCount = function () {
  return this.books.length;
};

Library.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

Library.printInventory = function () {
  this.books.forEach((book) => {
    console.log(`${book.title} by ${book.author}`);
  });
};

module.exports = Library;
