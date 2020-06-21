function overlay() {
  formOverlay.style.display = 'flex';
}

function hideOverlay() {
  formOverlay.style.display = 'none';
  formOverlay.style.animationName = '';
  formOverlay.removeEventListener('animationend', hideOverlay);
}

function hide(element) {
  element.style.display = 'none';
}

function show(element) {
  element.style.display = 'flex';
  element.style.animationName = 'form-in';
  main.style.filter = 'blur(2px)';
}

function closeWindow() {
  formOverlay.style.animationName = 'overlay-out';
  form.style.animationName = 'form-out';
  bookStatus.style.animationName = 'form-out';

  formOverlay.addEventListener('animationend', hideOverlay);

  main.style.filter = 'none';
}

function getBookStatus(book) {
  if (book == bookList.currentlyReading) return 'Have you finished reading?';
  else if (!book.isRead) return 'Would you like to start reading?';
  else return 'Would you like to read again?';
}

function getBookReadingStatus(book) {
  if (book.startedReading) {
    return `Started: ${book.startedReading}`;
  }
  if (book.finishedReading) {
    return `Finished: ${book.finishedReading}`;
  }
}

function showBookStatus(book) {
  bookStatusLabel.textContent = getBookStatus(book);

  bookStatusCover.src = book.cover;
  bookStatusCover.alt - book.title;
  bookStatusTitle.textContent = book.title;
  bookStatusAuthor.textContent = book.author;
  bookStatusReading.textContent = getBookReadingStatus(book);

  overlay();
  hide(form);
  show(bookStatus);

  buttonAction(bookStatusYes, book);
}

function buttonAction(element, book) {
  element.addEventListener('click', () => {
    closeWindow();
    changeBookStatus(book);
  });
}

const newBook = document.querySelector('#new-book');
const formOverlay = document.querySelector('#form-overlay');
const form = document.querySelector('#form');
const bookStatus = document.querySelector('#book-status');
const bookStatusLabel = document.querySelector('#book-status-label');
const closeForm = document.querySelector('#close-overlay');
const main = document.querySelector('main');

const bookStatusCover = document.querySelector('#book-status-cover');
const bookStatusTitle = document.querySelector('#book-status-title');
const bookStatusAuthor = document.querySelector('#book-status-author');
const bookStatusReading = document.querySelector('#book-status-reading');
const bookStatusYes = document.querySelector('#book-status-yes');
const bookStatusNo = document.querySelector('#book-status-no');

newBook.addEventListener('click', () => {
  overlay();
  hide(bookStatus);
  show(form);
});

closeForm.addEventListener('click', closeWindow);
bookStatusNo.addEventListener('click', closeWindow);
submitBookButton.addEventListener('click', closeWindow);
