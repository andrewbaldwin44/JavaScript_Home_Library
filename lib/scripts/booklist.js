class BookList {
  constructor() {
    this.currentlyReading = null;
    this.nextUp = [];
    this.recentlyRead = [];
    this.library = [];
  }

  add(book) {
    if (!this.currentlyReading) this.currentlyReading = book;

    if (!book.isRead && book != this.currentlyReading) {
      this.nextUp.unshift(book);
    }
    if (book.isRead) this.recentlyRead.unshift(book);

    this.library.push(book);
  }

  lookupBook(bookTitle) {
    return this.books.find((book) => book.title === bookTitle);
  }

  startReading(bookTitle) {
    this.currentlyReading = this.lookupBook(bookTitle);
  }

  finishReading(bookTitle) {
    this.lastRead = this.lookupBook(bookTitle);
    this.lastRead.isRead = true;
    this.currentlyReading = null;
  }

  getNumRead() {
    return this.books.filter(book => book.isRead).length;
  }

  getNumUnread() {
    return this.books.filter(book => !book.isRead).length
  }
}
