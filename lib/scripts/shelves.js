function getBookCover(book) {
  let lookupTitle = book.title.toLowerCase().replace(/[' ']/g, '');
  book.cover = `assets/images/bookcovers/${lookupTitle}.jpeg`;
}

function createBookFor(shelf, book, prepend = false) {
  if (!book) return;

  let bookElements = document.createElement('div');
  let bookElement = document.createElement('img');
  let bookID = book.title.replace(/[' ']/g, '-');

  if (!book.cover) getBookCover(book);

  bookElements.classList.add('book-elements');
  bookElement.classList.add('book');
  bookElement.src = book.cover;
  bookElement.alt = book.title;
  bookElement.id = bookID;

  bookElement.addEventListener('click', () => showBookStatus(book));
  bookElement.addEventListener('dragstart', drag);
  bookElements.appendChild(bookElement);

  prepend ? shelf.prepend(bookElements) : shelf.appendChild(bookElements);
}

function createBook() {
  let bookTitle = document.querySelector('#book-title-input').value;
  let bookAuthor = document.querySelector('#book-author-input').value;
  let bookGenre = document.querySelector('#book-genre-input').value;
  let isRead = document.querySelector('#is-read-check').checked;

  let newBook = new Book(bookTitle, bookAuthor, bookGenre, isRead);
  bookList.add(newBook);

  createBookFor(library, newBook);

  let shelf = isRead ? recentlyRead : nextUp ;
  createBookFor(shelf, newBook, true);
  serialize();
}

const currentlyReading = document.querySelector('#currently-reading');
const nextUp = document.querySelector('#next-up');
const recentlyRead = document.querySelector('#recently-read');
const library = document.querySelector('#library');
const submitBookButton = document.querySelector('#submit-button');

createBookFor(currentlyReading, bookList.currentlyReading);

bookList.nextUp.forEach(book => createBookFor(nextUp, book));
bookList.recentlyRead.forEach(book => createBookFor(recentlyRead, book));
bookList.library.forEach(book => createBookFor(library, book));

submitBookButton.addEventListener('click', createBook)
