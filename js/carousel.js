/**
 * carousel.js
 * Gestiona carruseles de imágenes en las project-cards.
 * Cada .project-img que contenga un .carousel-track se convierte
 * en un carrusel con navegación por flechas e indicadores de puntos.
 */

export function initCarousels() {
    const carousels = document.querySelectorAll('.project-img.has-carousel');
    if (!carousels.length) return;

    carousels.forEach((container) => {
        const track = container.querySelector('.carousel-track');
        const slides = Array.from(track.querySelectorAll('.carousel-slide'));
        const dotsWrap = container.querySelector('.carousel-dots');
        const btnPrev = container.querySelector('.carousel-btn.prev');
        const btnNext = container.querySelector('.carousel-btn.next');

        if (slides.length <= 1) return; // Sin carrusel si solo hay 1 imagen

        let current = 0;

        // Crear dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goTo(i);
            });
            dotsWrap.appendChild(dot);
        });

        function goTo(index) {
            slides[current].classList.remove('active');
            dotsWrap.children[current].classList.remove('active');
            current = (index + slides.length) % slides.length;
            slides[current].classList.add('active');
            dotsWrap.children[current].classList.add('active');
        }

        btnPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            goTo(current - 1);
        });

        btnNext.addEventListener('click', (e) => {
            e.stopPropagation();
            goTo(current + 1);
        });

        // Swipe táctil
        let startX = 0;
        track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
        track.addEventListener('touchend', (e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
        });

        // Inicializar primera slide
        slides[0].classList.add('active');
    });
}