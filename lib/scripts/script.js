function createBookFor(shelf, book) {
  let bookElement = document.createElement('div');
  let bookTitle = document.createElement('p');

  bookElement.classList.add('book');
  bookTitle.classList.add('book-title');

  bookTitle.textContent = book.title;

  bookElement.appendChild(bookTitle);
  shelf.appendChild(bookElement);
}

const currentlyReading = document.querySelector('#currently-reading');
const nextUp = document.querySelector('#next-up');
const recentlyRead = document.querySelector('#recently-read');
const library = document.querySelector('#library');

const bookList = new BookList();

bookList.add(new Book('The Shining', 'Horror', 'Stephen King'));
bookList.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
bookList.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);
bookList.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
bookList.add(
  new Book('The Revisionists', 'Science-fiction', 'thomas Mullen')
);
bookList.add(new Book('Harry Potter', 'Fantasy', 'J.K. Rowling', true));
bookList.add(new Book('The Murder of Roger Ackroyd', 'Mystery', 'Agatha Christie', true));
bookList.add(new Book('Death on the Nile', 'Mystery', 'Agatha Christie', false));
bookList.add(new Book('A Fine Balance', 'Fiction', 'Rohinton Mistry', true));
bookList.add(new Book('Cutting for Stone', 'Fiction', 'Abraham Verghese', false));

createBookFor(currentlyReading, bookList.currentlyReading);

bookList.nextUp.forEach(book => createBookFor(nextUp, book));
bookList.recentlyRead.forEach(book => createBookFor(recentlyRead, book));
bookList.library.forEach(book => createBookFor(library, book));
