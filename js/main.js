/**
 * main.js
 * Punto de entrada del portfolio.
 * Importa e inicializa todos los módulos cuando el DOM está listo.
 *
 * Para añadir una nueva funcionalidad:
 *   1. Crea el archivo en /js/
 *   2. Exporta una función init*
 *   3. Impórtala e invócala aquí
 */

import { initBackground }  from './background.js';
import { initCursor }      from './cursor.js';
import { initNav }         from './nav.js';
import { initReveal, initSkillBars } from './scroll.js';
import { initTypewriter }  from './typewriter.js';
import { initCarousels }  from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initBackground();   // Canvas de partículas
  initCursor();       // Cursor personalizado
  initNav();          // Enlace activo en navbar
  initReveal();       // Animación de entrada en scroll
  initSkillBars();    // Barras de habilidad animadas
  initTypewriter();   // Efecto máquina de escribir en hero
  initCarousels();
});
