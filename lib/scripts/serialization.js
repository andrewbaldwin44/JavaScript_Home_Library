function serialize() {
  let booksObject = {};

  booksObject.currentlyReading = bookList.currentlyReading;
  booksObject.nextUp = bookList.nextUp;
  booksObject.recentlyRead = bookList.recentlyRead;
  booksObject.library = bookList.library;

  localStorage.setItem('booksObject', JSON.stringify(booksObject));
}

function unserialize() {
  let booksObject = JSON.parse(localStorage.booksObject);

  bookList.currentlyReading = booksObject.currentlyReading;
  bookList.nextUp = booksObject.nextUp;
  bookList.recentlyRead = booksObject.recentlyRead;
  bookList.library = booksObject.recentlyRead;
}
