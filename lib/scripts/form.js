const newBook = document.querySelector('#new-book');
const formOverlay = document.querySelector('#form-overlay');
const closeForm = document.querySelector('#close-form');
const main = document.querySelector('main');

newBook.addEventListener('click', () => {
  formOverlay.style.display = "flex";
  main.style.filter = 'blur(2px)';
});

closeForm.addEventListener('click', () => {
  formOverlay.style.display = "none";
  main.style.filter = 'none';
})
