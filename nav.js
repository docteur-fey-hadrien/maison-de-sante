/**
 * Maison de Santé de Polliat - Navigation & UI Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('nav-open');
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burgerBtn.innerHTML = isOpen ? '✕ <span>Fermer</span>' : '☰ <span>Menu</span>';
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        navMenu.classList.remove('nav-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.innerHTML = '☰ <span>Menu</span>';
      }
    });

    // Fermer lors du clic sur un lien du menu
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.innerHTML = '☰ <span>Menu</span>';
      });
    });
  }

  // Marquer le lien actif selon l'URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
