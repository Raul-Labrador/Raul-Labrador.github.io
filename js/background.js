/**
 * background.js
 * Sistema de partículas interconectadas sobre canvas fijo.
 * Se inicializa una sola vez y se adapta al resize de ventana.
 */

const PARTICLE_COUNT   = 80;
const MAX_CONNECT_DIST = 120;
const PARTICLE_SPEED   = 0.3;
const PARTICLE_COLOR   = '0,200,255';

export function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H;

  /* Dimensiones */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  /* Crear partículas */
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x:     Math.random() * window.innerWidth,
    y:     Math.random() * window.innerHeight,
    vx:    (Math.random() - 0.5) * PARTICLE_SPEED,
    vy:    (Math.random() - 0.5) * PARTICLE_SPEED,
    r:     Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  /* Loop de animación */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Movimiento con wrap de bordes
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Dibujar punto
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_COLOR},${p.alpha})`;
      ctx.fill();

      // Conexiones con partículas siguientes
      for (let j = i + 1; j < particles.length; j++) {
        const q    = particles[j];
        const dx   = p.x - q.x;
        const dy   = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_CONNECT_DIST) {
          const opacity = 0.06 * (1 - dist / MAX_CONNECT_DIST);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${PARTICLE_COLOR},${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}
