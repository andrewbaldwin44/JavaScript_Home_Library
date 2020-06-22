class BookList {
  constructor() {
    this.currentlyReading = [];
    this.nextUp = [];
    this.recentlyRead = [];
    this.library = [];
  }

  add(book) {
    if (this.currentlyReading.length === 0) {
      this.currentlyReading.push(book);
    }
    else if (book.isRead) {
      this.recentlyRead.unshift(book);
    }
    else {
      this.nextUp.unshift(book);
    }

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

    this.currentlyReading.push(book);
    this.nextUp.splice(bookIndex, 1);
  }

  finishReading(book) {
    let bookIndex = this.index(book, this.currentlyReading);

    book.isRead = true;
    this.currentlyReading.splice(bookIndex, 1);
    this.recentlyRead.unshift(book);
  }

  getNumRead() {
    return this.library.filter(book => book.isRead).length;
  }

  getNumUnread() {
    return this.library.filter(book => !book.isRead).length
  }
}
