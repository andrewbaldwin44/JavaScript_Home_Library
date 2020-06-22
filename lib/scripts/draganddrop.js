function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
  currentlyReading.addEventListener('drop', drop);
  currentlyReading.addEventListener('dragover', allowDrop);
}

function drop(e) {
  e.preventDefault();
  let bookID = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(bookID));

  currentlyReadingDrop(bookID);
  serialize();
}

function currentlyReadingDrop(bookID) {
  let bookTitle = bookID.replace(/[-]/g, ' ');

  bookList.startReading(bookList.lookupBook(bookTitle));
}
