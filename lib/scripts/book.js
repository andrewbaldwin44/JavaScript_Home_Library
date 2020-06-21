class Book {
  constructor(title, genre, author, isRead = false) {
    this.cover = null;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isRead = isRead;
    this.startedReading = new Date();
    this.finishedReading = null;
  }
}
