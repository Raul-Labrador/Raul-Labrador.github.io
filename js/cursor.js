/**
 * cursor.js
 * Cursor personalizado con punto inmediato y anillo con inercia.
 * Se desactiva automáticamente en dispositivos táctiles.
 */

export function initCursor() {
  // No inicializar en touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0; // posición del ratón
  let rx = 0, ry = 0; // posición del anillo (con inercia)

  /* Seguimiento del ratón */
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = `${mx}px`;
    dot.style.top  = `${my}px`;
  });

  /* Anillo con interpolación suave */
  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = `${rx}px`;
    ring.style.top  = `${ry}px`;
    requestAnimationFrame(animRing);
  })();

  /* Expandir ring sobre elementos interactivos */
  const interactiveSelector = 'a, button, [role="button"]';
  document.querySelectorAll(interactiveSelector).forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hovering'));
  });
}
