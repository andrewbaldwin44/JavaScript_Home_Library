function changeBookStatus(book) {
  if (book === bookList.currentlyReading) {
    updateStatus(book, true);
    moveCurrentlyReading(book);
  }
  else {
    updateStatus(book, false, true);
    moveToCurrentlyReading(book);
  }
  serialize();
}

function updateStatus(book, isRead, currentlyReading = false) {
  book.isRead = isRead;

  bookList.currentlyReading = currentlyReading ? book : null;
}

function moveCurrentlyReading(book) {
  let bookElement = [...currentlyReading.children][0];

  recentlyRead.prepend(bookElement);
  bookList.recentlyRead.unshift(book);
}

function findBookElement(bookTitle, bookBar) {
  return [...bookBar.children].find(bookElement => {
    return bookElement.firstChild.alt == bookTitle;
  });
}

function moveToCurrentlyReading(book) {
  let bookElement =
    book.isRead
      ? findBookElement(book.title, recentlyRead)
      : findBookElement(book.title, nextUp);

  console.log(bookElement);
  currentlyReading.appendChild(bookElement);
}


// const currentlyReading = document.querySelector('#currently-reading');
// const nextUp = document.querySelector('#next-up');
// const recentlyRead = document.querySelector('#recently-read');
// const library = document.querySelector('#library');
