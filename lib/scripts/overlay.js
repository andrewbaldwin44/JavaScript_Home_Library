function hideOverlay() {
  formOverlay.style.display = 'none';

  formOverlay.removeEventListener('animationend', hideOverlay);
}

const formOverlay = document.querySelector('#form-overlay');
const newBook = document.querySelector('#new-book');
const form = document.querySelector('#form');
const closeForm = document.querySelector('#close-form');
const main = document.querySelector('main');


newBook.addEventListener('click', () => {
  formOverlay.style.display = 'flex';
  formOverlay.style.animationName = '';
  form.style.animationName = 'form-in';
  main.style.filter = 'blur(2px)';
});

closeForm.addEventListener('click', () => {
  formOverlay.style.animationName = 'overlay-out';
  form.style.animationName = 'form-out';

  formOverlay.addEventListener('animationend', hideOverlay);

  main.style.filter = 'none';
})
