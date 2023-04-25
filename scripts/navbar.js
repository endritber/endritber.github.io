const sidebar = document.querySelector('#sidebar');
const navbar = document.querySelector('nav');

navbar.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});