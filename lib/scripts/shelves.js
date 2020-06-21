function createCheckOff() {
  let checkOffContainer = document.createElement('span');
  let checkOff = document.createElement('i');

  checkOffContainer.classList.add('check-off-container');
  checkOff.classList.add('fas');
  checkOff.classList.add('fa-check');

  checkOffContainer.addEventListener('click', changeBookStatus);

  checkOffContainer.appendChild(checkOff);
  return checkOffContainer;
}

function createBookFor(shelf, book) {
  let bookElements = document.createElement('div');
  let bookElement = document.createElement('img');
  let bookTitle = book.title.toLowerCase().replace(/[' ']/g, '');

  let checkOffContainer = createCheckOff();

  bookElements.classList.add('book-elements');
  bookElement.classList.add('book');
  bookElement.src = `assets/images/bookcovers/${bookTitle}.jpeg`
  bookElement.alt = book.title;

  bookElement.addEventListener('click', () => changeBookStatus(book));

  bookElements.appendChild(bookElement);
  bookElements.appendChild(checkOffContainer);
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
