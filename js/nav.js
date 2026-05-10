/**
 * nav.js
 * Marca como activo el enlace de la navbar que corresponde
 * a la sección actualmente visible en el viewport.
 */

export function initNav() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  function updateActive() {
    let currentId = '';

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 100) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('is-active', isActive);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive(); // Llamada inicial
}
