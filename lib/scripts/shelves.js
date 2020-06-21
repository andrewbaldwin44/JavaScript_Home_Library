function getBookCover(book) {
  let lookupTitle = book.title.toLowerCase().replace(/[' ']/g, '');
  book.cover = `assets/images/bookcovers/${lookupTitle}.jpeg`;
}

function createBookFor(shelf, book) {
  let bookElements = document.createElement('div');
  let bookElement = document.createElement('img');

  if (!book.cover) getBookCover(book);

  bookElements.classList.add('book-elements');
  bookElement.classList.add('book');
  bookElement.src = book.cover;
  bookElement.alt = book.title;

  bookElement.addEventListener('click', () => showBookStatus(book));

  bookElements.appendChild(bookElement);
  shelf.appendChild(bookElements);
}

const currentlyReading = document.querySelector('#currently-reading');
const nextUp = document.querySelector('#next-up');
const recentlyRead = document.querySelector('#recently-read');
const library = document.querySelector('#library');

createBookFor(currentlyReading, bookList.currentlyReading);

bookList.nextUp.forEach(book => createBookFor(nextUp, book));
bookList.recentlyRead.forEach(book => createBookFor(recentlyRead, book));
bookList.library.forEach(book => createBookFor(library, book));
