/**
 * Maison de Santé de Polliat - Navigation & UI Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');
  const urgentBar = document.querySelector('.urgent-bar');

  // Mesure et mise à jour de la hauteur dynamique du bandeau d'appel au 15
  const updateUrgentBarHeight = () => {
    if (urgentBar) {
      const h = urgentBar.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty('--urgent-bar-height', `${h}px`);
      }
    }
  };

  updateUrgentBarHeight();
  window.addEventListener('resize', () => {
    updateUrgentBarHeight();
    if (window.innerWidth > 900) {
      document.body.classList.remove('urgent-retracted');
    }
  }, { passive: true });

  // Rétractation du bandeau d'appel au 15 lors du scroll vers le bas sur mobile
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;

  const onScroll = () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Actif sur mobile / tablette (écran <= 900px)
    if (window.innerWidth <= 900) {
      // Si le menu burger est ouvert, ne pas rétracter le bandeau
      if (navMenu && navMenu.classList.contains('nav-open')) {
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      // Tout en haut de page (y compris rebond iOS) : toujours visible
      if (currentScrollY <= 15) {
        document.body.classList.remove('urgent-retracted');
        lastScrollY = Math.max(0, currentScrollY);
        ticking = false;
        return;
      }

      // Protection contre le rebond en bas de page (iOS Safari)
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      if (currentScrollY >= maxScrollY - 10) {
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      const barHeight = (urgentBar && urgentBar.offsetHeight) ? urgentBar.offsetHeight : 50;
      const diff = currentScrollY - lastScrollY;

      // Défilement vers le bas : on rétracte le bandeau dès qu'on dépasse sa hauteur
      if (diff > 6 && currentScrollY > barHeight) {
        document.body.classList.add('urgent-retracted');
      } else if (diff < -6) {
        // Défilement vers le haut -> réapparition immédiate
        document.body.classList.remove('urgent-retracted');
      }
    } else {
      document.body.classList.remove('urgent-retracted');
    }

    lastScrollY = Math.max(0, currentScrollY);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

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
