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
    return this.library.find(book => book.title === bookTitle);
  }

  index(book, shelf) {
    return shelf.findIndex(book => book === book);
  }

  startReading(book) {
    let bookIndex = this.index(book, this.recentlyRead);

    this.currentlyReading = book;
    this.nextUp.splice(bookIndex, 1);
  }

  finishReading(book) {
    this.currentlyReading = null;
    book.isRead = true;
    this.recentlyRead.unshift(book);
  }

  getNumRead() {
    return this.library.filter(book => book.isRead).length;
  }

  getNumUnread() {
    return this.library.filter(book => !book.isRead).length
  }
}
