// ============================================================================
//  TODO EL TEXTO DE LA WEB VIVE AQUÍ.
//  Edita este archivo para cambiar cualquier copy sin tocar los componentes.
// ============================================================================

export const site = {
  nombre: 'MANUEL',
  apellido: 'MARCANO',
  anio: '2026',
  rol: 'E-commerce · Diseño · Desarrollo web',
  email: 'manuelmarcanocubillas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manuelmarcanoc/',
  // CV en public/img/. Si lo renombras, cámbialo aquí.
  cv: './img/ManuelMarcanoCV_ENG.pdf',
}

// --- HERO --------------------------------------------------------------- //
export const hero = {
  kicker: 'E-COMMERCE · DISEÑO · DESARROLLO WEB',
  // La palabra gigante se imprime dos veces (negro + azul desplazado)
  palabraGigante: 'MARCANO',
  nombrePequeno: 'Manuel',
  claim:
    'Monto tiendas online, las diseño y también las programo. Vengo del desarrollo y del control de calidad, y me muevo igual de cómodo en Figma que dentro del catálogo de una Shopify. Con paso por Excelencia Operativa en Cofidis España.',
  ticker: [
    'SHOPIFY',
    'E-COMMERCE',
    'DISEÑO WEB',
    'MERCH & PRODUCTO',
    'REACT',
    'UI/UX',
    'CONTENIDO & RRSS',
    'QA & TESTING',
    'IA GENERATIVA',
  ],
  // Frase que va cambiando sola debajo del titular
  rotativo: [
    'MONTANDO UNA FICHA DE PRODUCTO',
    'DISEÑANDO INTERFACES',
    'ESCRIBIENDO REACT',
    'ROMPIENDO MI PROPIO CÓDIGO',
    'SACANDO PIEZAS PARA REDES',
    'MIDIENDO QUÉ PASA DESPUÉS',
  ],
  rotativoLabel: 'AHORA MISMO',
  ctaPrimario: { texto: 'VER PROYECTOS', href: '#proyectos' },
  ctaSecundario: { texto: 'HABLEMOS', href: '#contacto' },
  sello: 'CÓDIGO · DISEÑO · QA · 2026 · CÓDIGO · DISEÑO · QA · 2026 · ',
  datos: [
    { k: 'BASE', v: 'BCN-SDR' },
    { k: 'FOCO', v: 'E-commerce & diseño' },
    { k: 'STACK', v: 'Shopify · React · Figma' },
    { k: 'AHORA', v: 'Máster en BI & Big Data' },
  ],
}

// --- SOBRE MÍ ------------------------------------------------------------ //
export const about = {
  titulo: 'SOBRE MÍ',
  subtitulo: 'DISEÑO LA TIENDA, ESCRIBO EL CÓDIGO Y LUEGO INTENTO ROMPERLO',
  parrafos: [
    'Soy Manuel Marcano. Vengo del código —Grado Superior en Desarrollo de Aplicaciones Multiplataforma— y ahora me estoy especializando en datos con un Máster en Inteligencia de Negocio y Big Data Analytics. La parte que más me gusta del oficio es esa en la que una idea deja de ser un Figma bonito y se convierte en algo que de verdad funciona.',
    'En Cofidis España, dentro de Excelencia Operativa, he trabajado en gestión de incidencias, flujos de trabajo y automatización de procesos internos. Ahí se aprende rápido qué es lo que de verdad rompe un producto: casi nunca el diseño, casi siempre el día a día de quien lo usa. De ahí me viene la manía por el QA y por dejarlo todo medido.',
    'En paralelo colaboro con Vibbe Labs, un estudio donde diseño y desarrollo productos digitales de punta a punta. Y en Kooz entré como diseñador principal: identidad visual y web completa para una marca de merch pensada para festivales, con su ficha de producto y su embudo de solicitud de muestras.',
    'Por eso me interesa el e-commerce dentro de la música: es donde coinciden las tres cosas que sé hacer. Diseñar la pieza, montarla en la tienda y entender qué pasa después con los datos. Y uso IA generativa a diario para acortar la parte aburrida —primeras versiones, variantes, guiones— y dedicar el tiempo a lo que sí se nota.',
  ],
  badge: 'DISEÑO\nY CÓDIGO',
  stats: [
    { valor: '3', etiqueta: 'PROYECTOS ONLINE\nEN LOS QUE HE TRABAJADO' },
    { valor: 'DAM', etiqueta: 'GRADO SUPERIOR +\nMÁSTER EN BI & BIG DATA' },
    { valor: 'QA', etiqueta: 'TESTING Y\nEXCELENCIA OPERATIVA' },
    { valor: 'IA', etiqueta: 'GENERATIVA\nEN EL DÍA A DÍA' },
  ],
}

// --- IDIOMAS (banderitas con globo al pasar el ratón) -------------------- //
// La bandera se dibuja en SVG a partir del código (ES / EN / FR / DE).
// 'paso' es la casilla del marco europeo que se enciende: A1 A2 B1 B2 C1 C2
// (6 = nativo). Se usa para la barrita del globo.
export const idiomas = [
  { codigo: 'ES', nombre: 'Español', nivel: 'Nativo', paso: 6, detalle: 'Lengua materna' },
  { codigo: 'EN', nombre: 'Inglés', nivel: 'C1', paso: 5, detalle: 'Avanzado · entorno profesional' },
  { codigo: 'FR', nombre: 'Francés', nivel: 'B2', paso: 4, detalle: 'Intermedio alto' },
  { codigo: 'DE', nombre: 'Alemán', nivel: 'B1.1', paso: 3, detalle: 'Intermedio' },
]
export const nivelesCEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'NAT']

// --- TRAYECTORIA --------------------------------------------------------- //
// Los logos son opcionales: si el archivo no existe, sale un sello con las
// iniciales. Deja los tuyos en /public/img/ con estos nombres.
export const experiencia = {
  titulo: 'POR DÓNDE HE PASADO',
  items: [
    {
      id: 'cofidis',
      empresa: 'Cofidis España',
      puesto: 'Excelencia Operativa',
      iniciales: 'CE',
      logo: './img/cofidis.png',
      texto:
        'Gestión de incidencias, flujos de trabajo y automatización de procesos internos. Dashboards y reporting para que el equipo deje de mirar hojas de cálculo y empiece a mirar datos.',
      tags: ['PROCESOS', 'AUTOMATIZACIÓN', 'REPORTING'],
    },
    {
      id: 'vibbe',
      empresa: 'Vibbe Labs',
      puesto: 'Colaborador · Diseño y desarrollo',
      iniciales: 'VL',
      logo: './img/vibbe.png',
      texto:
        'Estudio con el que colaboro en proyectos digitales: interfaz en Figma, construcción en React y pruebas a fondo antes de que salga a producción.',
      tags: ['REACT', 'UI/UX', 'FRONT-END'],
    },
    {
      id: 'kooz',
      empresa: 'Kooz',
      puesto: 'Diseñador principal · Web e identidad',
      iniciales: 'KZ',
      logo: './img/kooz.png',
      texto:
        'Marca de merch para festivales. Diseñé su identidad visual y la web completa, de la home a la ficha de producto y al embudo de solicitud de muestras.',
      tags: ['DISEÑO WEB', 'IDENTIDAD', 'UI/UX'],
    },
  ],
}

// --- SKILLS / TOOLS / APPROACH ------------------------------------------ //
export const skills = {
  columnaSkills: {
    titulo: 'SKILLS',
    items: [
      'E-COMMERCE & SHOPIFY',
      'DISEÑO WEB Y UI/UX',
      'DISEÑO GRÁFICO Y PIEZAS PARA REDES',
      'DESARROLLO FRONT-END (REACT)',
      'IA GENERATIVA APLICADA',
      'QA, TESTING Y AUTOMATIZACIÓN',
      'ANALÍTICA, BI & BIG DATA',
    ],
  },
  columnaApproach: {
    titulo: 'MI FORMA\nDE TRABAJAR',
    destacado: 'PRIMERO QUE FUNCIONE.',
    texto:
      'Diseño en Figma, construyo en React y después intento romperlo yo antes de que lo rompa nadie. Prefiero sacar algo pequeño que funcione y hacerlo crecer con datos, a entregar algo enorme que se cae el primer lunes. Un diseño bonito que falla es un póster caro.',
  },
}

// --- HERRAMIENTAS -------------------------------------------------------- //
// REVISA ESTA LISTA Y BORRA LO QUE NO USES: en una candidatura es mejor una
// lista corta y verdadera que una larga. 'cat' agrupa para los filtros,
// 'color' es el color de la pastilla y 'nota' es lo que sale en el globo.
// Si dejas un SVG en public/img/tools/<id>.svg, se usa en vez del monograma.
export const filtrosTools = [
  { id: 'todo', label: 'TODO' },
  { id: 'ecommerce', label: 'E-COMMERCE' },
  { id: 'diseno', label: 'DISEÑO' },
  { id: 'ia', label: 'IA & CONTENIDO' },
  { id: 'codigo', label: 'CÓDIGO' },
  { id: 'qa', label: 'QA & DATOS' },
]

export const tools = [
  // E-commerce
  { id: 'shopify', nombre: 'Shopify', mono: 'Sh', cat: 'ecommerce', color: '#7ab55c', nota: 'Catálogo, fichas de producto, stock y promociones.' },
  { id: 'fichas', nombre: 'Fichas de producto', mono: 'FP', cat: 'ecommerce', color: '#ff6a13', nota: 'Foto, copy y datos: que se entienda qué se compra.' },
  { id: 'analitica', nombre: 'Analítica web', mono: 'AN', cat: 'ecommerce', color: '#e37400', nota: 'Mirar qué pasa después de publicar, no solo publicar.' },

  // Diseño
  { id: 'figma', nombre: 'Figma', mono: 'Fg', cat: 'diseno', color: '#a259ff', nota: 'Donde diseño antes de escribir una línea de código.' },
  { id: 'canva', nombre: 'Canva', mono: 'Cv', cat: 'diseno', color: '#00c4cc', nota: 'Piezas rápidas y material de marca del día a día.' },
  { id: 'photoshop', nombre: 'Photoshop', mono: 'Ps', cat: 'diseno', color: '#31a8ff', nota: 'Retoque, fotografía de producto y composición.' },
  { id: 'illustrator', nombre: 'Illustrator', mono: 'Ai', cat: 'diseno', color: '#ff9a00', nota: 'Vectores, identidad y artes para producto físico.' },

  // IA y contenido
  { id: 'chatgpt', nombre: 'ChatGPT', mono: 'GPT', cat: 'ia', color: '#10a37f', nota: 'Guiones, copys y primeras versiones en minutos.' },
  { id: 'claude', nombre: 'Claude', mono: 'Cl', cat: 'ia', color: '#d97757', nota: 'Textos largos, análisis y apoyo al desarrollo.' },
  { id: 'ia-imagen', nombre: 'IA de imagen', mono: 'IM', cat: 'ia', color: '#8b5cf6', nota: 'Bocetos visuales y variantes antes de producir.' },
  { id: 'ia-video', nombre: 'IA de vídeo', mono: 'VD', cat: 'ia', color: '#ec4899', nota: 'Pruebas de formato para lyric videos y piezas cortas.' },

  // Código
  { id: 'react', nombre: 'React', mono: 'Re', cat: 'codigo', color: '#61dafb', nota: 'Mi stack principal para construir interfaces.' },
  { id: 'javascript', nombre: 'JavaScript', mono: 'JS', cat: 'codigo', color: '#f7df1e', nota: 'El idioma en el que pienso cuando programo web.' },
  { id: 'html', nombre: 'HTML5', mono: '<>', cat: 'codigo', color: '#e34f26', nota: 'Semántica y accesibilidad, no solo divs.' },
  { id: 'css', nombre: 'CSS3', mono: '#', cat: 'codigo', color: '#2965f1', nota: 'Layout, animación y responsive a mano.' },
  { id: 'vite', nombre: 'Vite', mono: 'V', cat: 'codigo', color: '#a259ff', nota: 'Con lo que monto y compilo los proyectos.' },
  { id: 'git', nombre: 'Git', mono: 'Gt', cat: 'codigo', color: '#f05033', nota: 'Control de versiones en todo lo que toco.' },

  // QA y datos
  { id: 'istqb', nombre: 'ISTQB CTFL', mono: 'QA', cat: 'qa', color: '#6c63ff', nota: 'La metodología de testing que hay detrás de ISTQBeasy.' },
  { id: 'testing', nombre: 'Testing funcional', mono: '✓', cat: 'qa', color: '#1b2cf0', nota: 'Casos de prueba, regresión y reporte de incidencias.' },
  { id: 'devtools', nombre: 'DevTools', mono: 'DT', cat: 'qa', color: '#4285f4', nota: 'Depurar, medir rendimiento y cazar lo que falla.' },
  { id: 'powershell', nombre: 'PowerShell', mono: 'PS', cat: 'qa', color: '#5391fe', nota: 'Automatizo procesos y genero informes solos.' },
  { id: 'excel', nombre: 'Excel & VBA', mono: 'XL', cat: 'qa', color: '#217346', nota: 'Macros y tratamiento de datos a escala de oficina.' },
  { id: 'sql', nombre: 'SQL', mono: 'SQ', cat: 'qa', color: '#e38c00', nota: 'Consultar y cruzar datos donde de verdad viven.' },
  { id: 'chartjs', nombre: 'Chart.js', mono: '||', cat: 'qa', color: '#ff6384', nota: 'Gráficas para dashboards y reporting.' },
]

// --- DÓNDE ENCAJO -------------------------------------------------------- //
// Bloque pensado para ofertas de e-commerce en música / merch: traduce lo que
// sé hacer a lo que necesita una tienda de artista.
export const encaje = {
  titulo: 'DÓNDE ENCAJO',
  intro:
    'Traducido a lo que necesita una tienda de artista o una línea de merch en marcha:',
  items: [
    {
      n: '01',
      t: 'LA TIENDA, POR DENTRO',
      d: 'Catálogo, fichas de producto, stock, promociones y todo lo que pasa entre que alguien entra y termina el pedido. Shopify desde el panel, y también el código cuando hay que tocarlo de verdad.',
    },
    {
      n: '02',
      t: 'LÍNEAS DE PRODUCTO',
      d: 'Sacar una línea nueva de merch entera: nombre, identidad, acabados, fotos, ficha y puesta en marcha. En Kooz lo hice de principio a fin, para festivales y eventos en directo.',
    },
    {
      n: '03',
      t: 'DISEÑO Y CONTENIDO',
      d: 'Banners, fichas, piezas para redes y material de evento. Diseño rápido y consistente, respetando la identidad de cada artista en lugar de imponer la mía.',
    },
    {
      n: '04',
      t: 'IA DENTRO DEL FLUJO',
      d: 'Uso IA generativa a diario para las primeras versiones: guiones, variantes de diseño, pruebas de vídeo. Acelera la parte mecánica; la decisión y el criterio siguen siendo míos.',
    },
  ],
  cierre:
    'Y si hay que sentarse con los partners de programación, CRO o SEO, hablo su idioma: vengo de ahí.',
}

// --- PROYECTOS ----------------------------------------------------------- //
// NOTA DE DISEÑO: cada proyecto lleva su captura en /public/img/.
// Si el archivo no existe todavía, sale un hueco con el nombre que falta —a
// propósito no imita el diseño de la web enlazada—. La captura SIEMPRE va
// enlazada al dominio del proyecto.
export const proyectos = [  {
    id: 'kooz',
    numero: '01',
    nombre: 'KOOZ',
    tagline: 'Identidad y web para una marca de merch de festival',
    dominio: 'kooz.es',
    url: 'https://kooz.es',
    // Imagen principal -> public/img/kooz-cover.jpg
    imagen: './img/koozprincipal.png',
    detalles: [],
    rol: 'DISEÑADOR PRINCIPAL · WEB E IDENTIDAD',
    descripcion:
      'Marca de fundas térmicas de neopreno para vasos de festival. Entré como diseñador principal: definí la identidad visual y diseñé la web completa, de la home a la ficha de producto.',
    descripcion2:
      'El reto era vender producto físico a promotoras y marcas de bebidas. Había que explicar el porqué —el merch que resuelve algo se queda ocho horas en la mano de alguien— y llevar al visitante hasta la solicitud de muestra sin fricción por el camino.',
    tags: ['DISEÑO WEB', 'IDENTIDAD VISUAL', 'UI/UX', 'FESTIVALES'],
    metricas: [
      { k: '8 h', v: 'de marca en la mano' },
      { k: '10 °C', v: 'más fría la bebida' },
      { k: 'B2B', v: 'venta a promotoras' },
    ],
  },
  {
    id: 'vibbelabs',
    numero: '02',
    nombre: 'VIBBE LABS',
    tagline: 'Estudio de producto digital con el que colaboro',
    dominio: 'vibbelabs.es',
    url: 'https://vibbelabs.es',
    // Imagen principal -> public/img/vibbelabs-cover.jpg
    imagen: './img/vibbeprincipal.png',
    detalles: [],
    rol: 'COLABORACIÓN · DISEÑO Y DESARROLLO',
    descripcion:
      'Estudio de desarrollo con el que colaboro. Trabajo en proyectos que van de la primera conversación al despliegue en producción: webs a medida, software de negocio, dashboards y analítica.',
    descripcion2:
      'Mi parte es diseñar la interfaz en Figma, construirla en React y probarla a fondo antes de que salga. Un proyecto no está terminado cuando se ve bien: está terminado cuando aguanta.',
    tags: ['REACT', 'UI/UX', 'DESARROLLO WEB', 'DATA & DASHBOARDS'],
    metricas: [
      { k: 'E2E', v: 'concepto a producción' },
      { k: 'React', v: 'stack principal' },
      { k: 'Figma', v: 'diseño propio' },
    ],
  },
  {
    id: 'istqbeasy',
    numero: '03',
    nombre: 'ISTQBEASY',
    tagline: 'Simulador ISTQB CTFL v4.0 · gratuito',
    dominio: 'istqbeasy.com',
    url: 'https://istqbeasy.com',
    // Imagen principal -> public/img/istqbeasy-cover.jpg
    imagen: './img/istqbeasyprincipal.png',
    detalles: [],
    rol: 'PRODUCTO COMPLETO DESDE CERO',
    descripcion:
      'Plataforma web funcional para preparar la certificación ISTQB CTFL v4.0. Más de 400 preguntas reales organizadas por capítulo, modo examen oficial con cronómetro de 65 minutos, cuatro idiomas y explicación de cada fallo.',
    descripcion2:
      'Seguimiento de progreso por capítulo, estadísticas y minijuegos para fijar conceptos. La construí de cero, y es también la prueba más directa de que el QA no es algo que hago de oídas: es el tema del producto.',
    tags: ['PRODUCTO', 'FRONT-END', 'QA', 'GAMIFICACIÓN', 'MULTIIDIOMA'],
    metricas: [
      { k: '+400', v: 'preguntas reales' },
      { k: '4', v: 'idiomas' },
      { k: '65 min', v: 'modo examen oficial' },
    ],
  },
  {
    id: 'cofidis',
    numero: '04',
    nombre: 'COFIDIS ESPAÑA',
    tagline: 'Excelencia Operativa y automatización',
    dominio: 'cofidis.es',
    url: 'https://www.cofidis.es',
    imagen: './img/cofidisprincipal.jpg',
    detalles: [],
    rol: 'EXCELENCIA OPERATIVA',
    descripcion:
      'Gestión de incidencias, flujos de trabajo y automatización de procesos internos. Diseño de cuadros de mando (dashboards) y reporting para facilitar la toma de decisiones basada en datos y dejar atrás las hojas de cálculo.',
    descripcion2:
      'El objetivo principal era optimizar el día a día del equipo: sustituir procesos manuales repetitivos por flujos automatizados y asegurar un control de calidad riguroso en las operaciones diarias.',
    tags: ['PROCESOS', 'AUTOMATIZACIÓN', 'REPORTING', 'DATOS', 'QA'],
    metricas: [
      { k: 'Reporting', v: 'dashboards visuales' },
      { k: 'Procesos', v: 'optimización' },
      { k: 'Flujos', v: 'automatizados' },
    ],
  },
]

// --- CONTACTO ------------------------------------------------------------ //
export const contacto = {
  titulo1: 'TRABAJEMOS',
  titulo2: 'JUNTOS',
  texto:
    'Diseño la pieza, la monto en la tienda y luego me ocupo de que funcione. Vengo del desarrollo y del control de calidad, y de una experiencia real en operaciones, así que sé lo que le pasa a un producto cuando lo usa gente de verdad todos los días. Si eso os encaja, escribidme.',
  ctaTexto: 'ESCRÍBEME',
}

export const footer = {
  disciplinas: ['E-COMMERCE', 'SHOPIFY', 'DISEÑO', 'DESARROLLO', 'QA'],
}
