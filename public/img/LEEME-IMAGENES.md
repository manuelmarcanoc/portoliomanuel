# Imágenes que tienes que dejar en esta carpeta (`public/img/`)

Los nombres son **obligatorios**: el código los busca exactamente así.
Si un archivo no existe, la web no se rompe — sale un hueco con el nombre que
falta. En cuanto dejes el archivo aquí, aparece solo.

## Capturas de los proyectos

| Archivo | Qué es | Medida recomendada |
|---|---|---|
| `vibbelabs-cover.jpg` | Captura de la home de **vibbelabs.es** (desktop). Se recorta a 16:10. | 1600 × 1000 px |
| `vibbelabs-detalle-1.jpg` | Un trabajo de Vibbe Labs: dashboard, web de cliente o pantalla de proyecto. | 1200 × 900 px |
| `istqbeasy-cover.jpg` | Captura de la home de **istqbeasy.com** (desktop). | 1600 × 1000 px |
| `istqbeasy-detalle-1.jpg` | ISTQBeasy: el test en marcha o la pantalla de estadísticas. | 1200 × 900 px |
| `kooz-cover.jpg` | Captura de la home de **kooz.es** (desktop). | 1600 × 1000 px |
| `kooz-detalle-1.jpg` | Producto Kooz en contexto: la funda puesta en un vaso. | 1200 × 900 px |
| `kooz-detalle-2.jpg` | Kooz: logo de cliente sobre la funda, o packaging. | 1200 × 900 px |

## Foto y logos

| Archivo | Qué es | Medida recomendada |
|---|---|---|
| `retrato.jpg` | Tu foto. Vertical, plano medio, fondo limpio. Se recorta a 4:5. | 800 × 1000 px |
| `logo-cofidis.png` | Logo de Cofidis para «Por dónde he pasado». Fondo transparente. | 400 × 400 px |
| `logo-vibbelabs.png` | Logo de Vibbe Labs. Fondo transparente. | 400 × 400 px |
| `logo-kooz.png` | Logo de Kooz. Fondo transparente. | 400 × 400 px |
| `og-cover.jpg` | Imagen de previsualización al compartir el enlace (WhatsApp, LinkedIn). | 1200 × 630 px |

Mientras no pongas los logos, cada tarjeta muestra un sello con las iniciales
(**CE**, **VL** y **KZ**), así que la sección se ve bien igualmente.

## Logos de las herramientas (opcional)

La sección HERRAMIENTAS funciona sin ninguna imagen: cada pastilla enseña un
símbolo propio dibujado a línea dentro de un marco del color de la herramienta.
Si prefieres los logos de marca, descárgalos y déjalos en
**`public/img/tools/`** con el `id` que tienen en `src/content.js` y extensión
`.svg`. Estos son los que más se notan, por orden de importancia para esta
candidatura:

**Prioritarios** — `shopify.svg` · `figma.svg` · `photoshop.svg` ·
`illustrator.svg` · `canva.svg` · `chatgpt.svg` · `claude.svg`

**Después** — `react.svg` · `javascript.svg` · `html.svg` · `css.svg` ·
`vite.svg` · `git.svg` · `excel.svg` · `sql.svg` · `powershell.svg` ·
`chartjs.svg` · `istqb.svg` · `devtools.svg` · `analitica.svg`

`fichas.svg`, `testing.svg`, `ia-imagen.svg` y `ia-video.svg` no son marcas:
déjalos con su símbolo propio.

En cuanto exista el archivo sustituye al símbolo, sin tocar código. Bájalos de
la página de marca de cada producto o de simpleicons.org / devicon.dev, y
revisa las condiciones de uso antes de publicarlos.

## Cómo hacer las capturas de las tres webs

En Chrome, en cada dominio: `F12` → `Ctrl + Shift + M` (modo dispositivo) →
pon el ancho en **1440** → menú de los tres puntos arriba a la derecha del panel
→ **Capture screenshot**. Recorta la parte de arriba y guarda a 1600 px de ancho.

## Consejos rápidos

- Comprime todo antes de subirlo (squoosh.app o tinypng.com). Objetivo: menos de
  300 KB por imagen.
- Las capturas se muestran alineadas arriba (`object-position: top`), así que lo
  importante debe estar en la parte superior de la imagen.
- Si prefieres PNG o WebP, cambia también la extensión en `src/content.js`.
