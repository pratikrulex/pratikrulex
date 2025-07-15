const toggleBtn = document.getElementById('toggle-menu');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
