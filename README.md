# 🌐 Portfolio — Raúl Labrador Pérez

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)

> Sitio web personal desarrollado **desde cero sin frameworks** — HTML, CSS y JavaScript puro.

🔗 **[Ver portfolio en vivo →](https://raul-labrador.github.io)**

---

## ✨ Características técnicas

- **Canvas API** — sistema de partículas animadas en el fondo
- **Cursor personalizado** con anillo de inercia
- **Reveal on scroll** — animaciones de entrada al hacer scroll
- **Efecto typewriter** — escritura letra a letra en el hero
- **Diseño responsive** — adaptado a tablet (≤900px) y móvil (≤600px)
- **Arquitectura modular** — JS organizado en módulos ES6 con `import/export`
- **Custom properties CSS** — paleta de colores centralizada en `:root`

---

## 📁 Estructura del proyecto

```
portfolio/
├── index.html              ← Markup puro, sin lógica ni estilos inline
│
├── css/
│   ├── base.css            ← Custom properties, reset, utilidades globales
│   ├── background.css      ← Canvas de partículas y grid overlay
│   ├── animations.css      ← Reveal on scroll y cursor personalizado
│   ├── nav.css             ← Barra de navegación
│   ├── hero.css            ← Sección Hero (#home)
│   ├── about.css           ← Sección Perfil (#about): timeline, barras, terminal
│   ├── skills.css          ← Sección Stack (#skills)
│   ├── projects.css        ← Sección Proyectos (#projects)
│   ├── contact.css         ← Sección Contacto (#contact) y footer
│   └── responsive.css      ← Media queries (≤900px tablet, ≤600px mobile)
│
├── js/
│   ├── main.js             ← Punto de entrada: importa e inicializa módulos
│   ├── background.js       ← Sistema de partículas (Canvas API)
│   ├── cursor.js           ← Cursor personalizado con anillo de inercia
│   ├── nav.js              ← Enlace activo en navbar según sección visible
│   ├── scroll.js           ← Reveal on scroll + animación de barras de habilidad
│   └── typewriter.js       ← Efecto de escritura letra a letra
│
└── assets/
    ├── img/
    └── docs/
        └── CV_Raul_Labrador.pdf
```

---

## 🚀 Desarrollo local

> ⚠️ Los módulos JS usan `import/export` (ES Modules). No abras el `index.html`
> directamente en el navegador — necesitas servirlo desde un servidor HTTP.

```bash
# Opción 1 — npx serve
npx serve .

# Opción 2 — extensión Live Server de VS Code
# Clic derecho en index.html → "Open with Live Server"
```

---

## 🛠️ Guía de mantenimiento

### Añadir un nuevo proyecto
1. Coloca la imagen en `assets/img/`.
2. Copia un bloque `.project-card` en `index.html` dentro del `.projects-grid`.
3. Rellena nombre, descripción, tags y links.
4. Si ocupa todo el ancho, añade la clase `wip` a `.project-card`.

### Añadir una nueva sección
1. Crea `css/mi-seccion.css` y enlázalo en el `<head>` **antes** de `responsive.css`.
2. Escribe el HTML de la sección en `index.html`.
3. Si necesita lógica JS, crea `js/mi-seccion.js` y expórtala en `main.js`.

### Cambiar la paleta de colores
Todos los colores están en las custom properties de `css/base.css` (bloque `:root`).
Editar ahí propaga el cambio a todo el sitio.

---

## 📄 Licencia

Proyecto personal de portfolio. Puedes inspirarte en el código, pero no copies el diseño ni el contenido tal cual.
