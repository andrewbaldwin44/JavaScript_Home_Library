function changeBookStatus(book) {
  if (bookList.currentlyReading.includes(book)) {
    bookList.finishReading(book);
    moveCurrentlyReading(book);
  }
  else {
    bookList.startReading(book);
    moveToCurrentlyReading(book);
  }
  serialize();
}

function moveCurrentlyReading(book) {
  let bookElement = [...currentlyReading.children][0];

  recentlyRead.prepend(bookElement);
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

  currentlyReading.appendChild(bookElement);
}
