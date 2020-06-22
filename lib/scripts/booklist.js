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

  index(bookTitle, shelf) {
    return shelf.findIndex(book => book.title == bookTitle);
  }

  startReading(bookTitle) {
    let bookIndex = this.index(bookTitle, this.recentlyRead);

    this.currentlyReading = this.lookupBook(bookTitle);
    this.recentlyRead.splice(bookIndex, 1);
  }

  finishReading(bookTitle) {
    this.lastRead.isRead = true;
    this.currentlyReading = null;
    this.lastRead.unshift(this.lookupBook(bookTitle));
  }

  getNumRead() {
    return this.library.filter(book => book.isRead).length;
  }

  getNumUnread() {
    return this.library.filter(book => !book.isRead).length
  }
}
