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

function showBookStatus(book) {
  if (book == bookList.currentlyReading) {
    bookStatusLabel.textContent = 'Have you finished reading?';
  }
  else if (!book.isRead) {
    bookStatusLabel.textContent = 'Would you like to start reading?';
  }
  else {
    bookStatusLabel.textContent = 'Would you like to read again?';
  }

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
const bookStatusYes = document.querySelector('#book-status-yes');
const bookStatusNo = document.querySelector('#book-status-no');

newBook.addEventListener('click', () => {
  overlay();
  hide(bookStatus);
  show(form);
});

closeForm.addEventListener('click', closeWindow);
bookStatusNo.addEventListener('click', closeWindow);
