/**
 * scroll.js
 * Gestiona dos comportamientos basados en IntersectionObserver:
 *  1. Reveal on scroll: añade .visible a elementos .reveal cuando entran en viewport.
 *  2. Animación de barras de habilidad: activa la transición CSS cuando
 *     el contenedor #bars-container entra en viewport.
 */

/* Reveal on scroll */
export function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Opcional: dejar de observar después del primer reveal
          // observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* Animación de barras */
export function initSkillBars() {
  const container = document.getElementById('bars-container');
  if (!container) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;

      document.querySelectorAll('.bar-fill').forEach((bar, i) => {
        // Leer el valor --w definido en el style inline de cada barra
        const targetScale = parseFloat(bar.style.getPropertyValue('--w')) || 1;

        setTimeout(() => {
          bar.style.transform = `scaleX(${targetScale})`;
        }, i * 120); // stagger de 120ms por barra
      });

      observer.disconnect(); // Solo animar una vez
    },
    { threshold: 0.3 }
  );

  observer.observe(container);
}
