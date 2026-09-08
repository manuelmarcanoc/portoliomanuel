# Portfolio — Manuel Marcano (2026)

Portfolio personal: desarrollo de software, diseño web y QA. React + Vite, sin
dependencias más allá de React.

## Identidad visual

Cartel / fanzine recortado con guiño a manual técnico. **Naranja eléctrico
`#ff6a13` + azul klein `#1b2cf0` + negro + papel crema.** Tipografía condensada
gigante (Anton) y mono en versalitas (Space Mono). Bordes de papel rasgado,
cintas de texto en bucle, sombras duras y doble impresión desalineada.

La paleta está elegida **a propósito lejos del verde lima**, que es la de
kooz.es: el portfolio y los proyectos que enseña tienen que leerse como cosas
distintas. Por el mismo motivo, los huecos de imagen no imitan el diseño de las
webs enlazadas — usan el lenguaje del propio portfolio.

Todos los colores salen de variables CSS en `src/styles.css` (`--brand`,
`--accent`, `--paper`…). Cambias esas cuatro líneas y cambia la web entera.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist listo para subir
```

Para publicar: sube la carpeta `dist/` a Netlify, Vercel o GitHub Pages
(arrastrando la carpeta funciona en los tres).

## Lo que tienes que tocar

1. **`public/img/`** → tus imágenes. Nombres exactos y medidas en
   [`public/img/LEEME-IMAGENES.md`](public/img/LEEME-IMAGENES.md).
2. **`src/content.js`** → todo el texto de la web, en un solo archivo. Email,
   LinkedIn, idiomas y niveles, proyectos y trayectoria están ahí.

Mientras no haya capturas, cada proyecto enseña una **portada tipográfica
diseñada** (no un hueco vacío), y las miniaturas de detalle simplemente no se
dibujan. En cuanto dejes el archivo con su nombre, sustituye a la portada.

Las herramientas igual: sin logos usan un **símbolo propio** dibujado a línea.
Si quieres los logos de marca, descárgalos tú y déjalos en
`public/img/tools/<id>.svg` — aparecen solos.

## Estructura

```
src/
  content.js              ← TODO EL COPY (edita aquí)
  styles.css              ← toda la estética y la paleta
  App.jsx
  components/
    Hero.jsx              Cabecera: apellido a doble tinta + sello giratorio
    Rotativo.jsx          La frase que va cambiando sola bajo el titular
    About.jsx             Sobre mí + foto + idiomas + stats
    Languages.jsx         Banderitas con globo (nivel + barra del marco europeo)
    Flags.jsx             Banderas en SVG (no emoji: en Windows no se ven)
    Experience.jsx        «Por dónde he pasado»: Cofidis, Vibbe Labs y Kooz
    SkillsBlock.jsx       Bloque azul: Skills / Forma de trabajar
    Tools.jsx             Rejilla de herramientas con filtros y globos
    Projects.jsx          Kooz, Vibbe Labs e ISTQBeasy
    Encaje.jsx            «Dónde encajo»: el argumento de cierre
    Contact.jsx           CTA final, tarjeta de contacto y footer
    Shot.jsx              Captura enlazada al dominio (con portada de respaldo)
    Cover.jsx             Portada tipográfica de cada proyecto
    Nav.jsx               Barra superior con el progreso de lectura
    Cursor.jsx            Cursor propio (punto + aro)
    Split.jsx             Titulares que entran palabra a palabra
    Glyphs.jsx            Símbolos propios de las herramientas
    Doodles.jsx           Pegatinas, sello de QA y garabatos en SVG
    TornEdge.jsx          Bordes de papel rasgado
    Marquee.jsx           Cintas de texto en bucle
```

## Requisito de diseño ya aplicado

Las tres capturas de proyecto son **enlaces reales** a sus dominios y se abren
en pestaña nueva: `vibbelabs.es`, `istqbeasy.com` y `kooz.es`. Cada dominio
aparece además en la barra del navegador falso del mockup, en el botón bajo la
descripción, en la tarjeta de contacto y en el footer.

## Cosas que se mueven

- Cursor propio: punto pegado al ratón y aro que lo persigue y crece sobre lo
  que se puede pulsar (solo con ratón de verdad).
- Barra superior que aparece al pasar el hero, con el progreso de lectura.
- Paralaje suave del nombre, la cinta y el sello al mover el ratón por el hero.
- Los titulares entran palabra a palabra.
- Frase rotativa bajo el titular del hero.
- Los bloques aparecen al llegar a ellos al hacer scroll.
- Idiomas: globo con el nivel y una barra A1→C1/Nativo que se rellena sola.
- Herramientas: filtros por categoría y globo con para qué usas cada una.
- Cintas de texto en bucle, sello de QA giratorio y el sello del hero.

Todo se desactiva solo si el sistema pide `prefers-reduced-motion`.

## Aviso sobre la lista de herramientas

En `src/content.js`, el array `tools` viene con 24 entradas. **Repásalo y borra
lo que no uses de verdad**: en una candidatura una lista corta y cierta vale más
que una larga. Las categorías de los filtros salen del campo `cat`.

## Publicar la web en un dominio

`npm run build` genera la carpeta `dist/`. Esa carpeta es la web entera.

- **Netlify Drop** (lo más rápido, sin cuenta ni git): entra en
  app.netlify.com/drop y arrastra la carpeta `dist`. En segundos tienes una URL
  del tipo `algo.netlify.app` que ya puedes mandar.
- **Vercel** o **Cloudflare Pages**: conecta el repositorio de GitHub y pon
  `npm run build` como comando y `dist` como carpeta de salida. Cada push
  republica solo.
- **Dominio propio**: en cualquiera de los tres, en la sección de dominios,
  añade el tuyo (por ejemplo un subdominio de los que ya tienes) y apunta el
  registro DNS que te indiquen.

Antes de publicar, comprueba que `site.email` y `site.linkedin` en
`src/content.js` son los correctos, y deja `og-cover.jpg` en `public/img/` para
que el enlace se vea bien al compartirlo.

## Accesibilidad y rendimiento

- Sin dependencias más allá de React.
- Animaciones desactivadas si el sistema pide `prefers-reduced-motion`.
- Banderitas y herramientas son botones enfocables: los globos se abren también
  con teclado y al tocarlos en móvil.
- Si el JavaScript no llega a arrancar, no se esconde ningún bloque: la web
  sigue siendo legible entera.
- Responsive de 360 px a 2560 px, sin scroll horizontal.
