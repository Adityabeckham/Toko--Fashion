
function toggleMenu() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');

  
  
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';

  
  document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
          nav.style.display = 'none';
      });
  });
}


window.onload = () => {
  window.scrollTo(0, 0);
};
