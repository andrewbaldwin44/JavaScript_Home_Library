const newBook = document.querySelector('#new-book');
const formOverlay = document.querySelector('#form-overlay');
const closeForm = document.querySelector('#close-form');

newBook.addEventListener('click', () => {
  formOverlay.style.display = "flex";
});

closeForm.addEventListener('click', () => {
  formOverlay.style.display = "none";
})
