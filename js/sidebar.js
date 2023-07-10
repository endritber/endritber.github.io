const sidebar = document.querySelector('#sidebar');
const navbar = document.querySelector('nav');

console.log(navbar);

navbar.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});