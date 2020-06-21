class Book {
  constructor(title, author, genre, isRead = false) {
    this.cover = null;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isRead = isRead;
    this.startedReading = new Date().toDateString();
    this.finishedReading = null;
  }
}
