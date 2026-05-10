/**
 * typewriter.js
 * Efecto de escritura letra a letra sobre un elemento del DOM.
 * Configurable: selector, velocidad e delay inicial.
 */

/**
 * @param {string} selector   - Selector CSS del elemento objetivo
 * @param {number} speed      - Milisegundos entre cada carácter (default: 40)
 * @param {number} startDelay - Delay inicial en ms antes de empezar (default: 800)
 */
export function initTypewriter(selector = '.hero-title', speed = 40, startDelay = 800) {
  const el = document.querySelector(selector);
  if (!el) return;

  const fullText = el.textContent.trim();
  el.textContent = '';

  let index = 0;

  function type() {
    if (index < fullText.length) {
      el.textContent += fullText[index++];
      setTimeout(type, speed);
    }
  }

  setTimeout(type, startDelay);
}
