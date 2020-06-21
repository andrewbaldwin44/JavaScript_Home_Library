const bookList = new BookList();

if (localStorage.booksObject) {
  unserialize();
}
else {
  bookList.add(new Book('The Shining', 'Stephen King', 'Horror'));
  bookList.add(new Book('American Gods', 'Neil Gaiman', 'Fiction'));
  bookList.add(
    new Book('Eloquent JavaScript', 'Marijn Haverbeke', 'Programming', true)
  );
  bookList.add(new Book('The Eire Affair', 'Jasper Fforde', 'Fantasy'));
  bookList.add(
    new Book('The Revisionists', 'Thomas Mullen', 'Science-fiction')
  );
  bookList.add(new Book('Harry Potter', 'J.K. Rowling', 'Fantasy', true));
  bookList.add(new Book('The Murder of Roger Ackroyd', 'Agatha Christie', 'Mystery', true));
  bookList.add(new Book('Death on the Nile', 'Agatha Christie', 'Mystery', false));
  bookList.add(new Book('A Fine Balance', 'Rohinton Mistry', 'Fiction', true));
  bookList.add(new Book('Cutting for Stone', 'Abraham Verghese', 'Fiction', false));
  serialize();
}
