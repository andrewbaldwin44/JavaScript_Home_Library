function scale(element, value) {
  element.style.transform = `scale(${value})`;
}

function formOut() {
  scale(formOverlay, 0);
  event.target.removeEventListener('animationend', formOut);
}

const newBook = document.querySelector('#new-book');
const formOverlay = document.querySelector('#form-overlay');
const form = document.querySelector('#form');
const closeForm = document.querySelector('#close-form');
const main = document.querySelector('main');

newBook.addEventListener('click', () => {
  scale(formOverlay, 1);
  form.style.animationName = 'form-in';
  main.style.filter = 'blur(2px)';
});

closeForm.addEventListener('click', () => {
  form.style.animationName = 'form-out';
  form.addEventListener('animationend', formOut);
  main.style.filter = 'none';
})
