# Portfolio — Raúl Labrador

## Estructura del proyecto

```
portfolio/
├── index.html              ← Markup puro, sin lógica ni estilos inline
│
├── css/
│   ├── base.css            ← Custom properties, reset, utilidades globales (btn, tag, section-title…)
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
│   ├── main.js             ← Punto de entrada: importa e inicializa todos los módulos
│   ├── background.js       ← Sistema de partículas (Canvas API)
│   ├── cursor.js           ← Cursor personalizado con anillo de inercia
│   ├── nav.js              ← Enlace activo en navbar según sección visible
│   ├── scroll.js           ← Reveal on scroll + animación de barras de habilidad
│   └── typewriter.js       ← Efecto de escritura letra a letra
│
└── assets/
    ├── img/
    │   ├── profile-raul.jpg
    │   ├── plugin-LAE.png
    │   └── skills-chart.png
    └── docs/
        └── CV_Raul_Labrador.pdf
```

## Añadir un nuevo proyecto

1. Coloca la imagen del proyecto en `assets/img/`.
2. Copia un bloque `.project-card` en `index.html` dentro del `.projects-grid`.
3. Rellena nombre, descripción, tags y links.
4. Si ocupa todo el ancho, añade la clase `wip` a `.project-card`.

## Añadir una nueva sección

1. Crea el archivo CSS en `css/mi-seccion.css`.
2. Enlázalo en el `<head>` de `index.html` **antes** de `responsive.css`.
3. Escribe el HTML de la sección en `index.html`.
4. Si necesita lógica JS, crea `js/mi-seccion.js`, expórtala e impórtala en `main.js`.

## Cambiar la paleta de colores

Todos los colores están centralizados en las custom properties de `css/base.css` (bloque `:root`).
Editar ahí es suficiente para que el cambio se propague a todo el sitio.

## Despliegue

El proyecto es estático: solo HTML, CSS y JS.
Compatible con GitHub Pages, Netlify, Vercel o cualquier hosting con servidor de archivos.

> **Nota:** Los módulos JS usan `import/export` (ES Modules). Para desarrollo local
> necesitas servirlo desde un servidor HTTP (no abrir el `index.html` directamente
> en el navegador). Usa `npx serve .` o la extensión Live Server de VS Code.
