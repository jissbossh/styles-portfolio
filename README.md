# Jorge Sierra Suárez — Portafolio

Sitio de portafolio personal de Jorge Sierra Suárez, desarrollado con HTML5 semántico y CSS moderno
(Grid, Flexbox, variables, gradientes) e interactividad ligera en JavaScript vanilla.

## Cómo ejecutarlo
1. Clona el repositorio.
2. Abre `index.html` en tu navegador.
3. O publica con **GitHub Pages** (Settings → Pages → Branch: main → Save).

## Resumen de cómo Microsoft Copilot me ayudó en cada paso

**1. Escribir y mejorar el CSS del portafolio fundacional.** Copilot generó la primera
versión de las variables CSS y el reset, y me sugirió refactorizar los estilos del header y del
hero para usar `clamp()` en la tipografía, lo que hizo el diseño más limpio y escalable.

**2. Generar e implementar sugerencias de diseño adaptable.** Copilot propuso los breakpoints
(860px y 480px) y la estrategia `auto-fit + minmax()` para la cuadrícula de proyectos, evitando
consultas de medios manuales innecesarias y mejorando el mantenimiento.

**3. Mejora del diseño de UI/UX.** Copilot sugirió añadir efectos `:hover` con transición
suave en tarjetas y enlaces, implementar modales accesibles (con cierre por `Escape` y por
overlay) y añadir tooltips CSS puros mediante el atributo `data-tooltip`. También propuso la
regla `prefers-reduced-motion` para accesibilidad.

**4. Mejoras visuales.** Se aplicaron gradientes de acento, sombras suaves y un anillo animado
en el avatar para lograr un acabado profesional y coherente con la identidad visual del proyecto.

## Créditos
- Tipografía: system-ui / Inter.
- Imagen de avatar: Unsplash (uso libre).