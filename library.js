
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
    let {title, author} = book;
    this.books.forEach((book) => {
      console.log(`${title} by ${author}`);
    });
  };
}


export default Library;
