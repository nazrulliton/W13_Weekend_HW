
class Library  {
  constructor (books = []) {
    this.books = books;
  }

  bookCount = function () {
    return this.books.length;
  };

  addBook = function (newBook) {
    this.books.push(newBook);
  };

  addBooks = function (newBooks) {
    newBooks.forEach(book => this.books.push(book));
  };

  printInventory = function () {
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
    });
  };
}






module.exports = Library;
