// Iconografía propia, dibujada a línea sobre una rejilla de 24×24.
// No son logos de marca: son símbolos genéricos (llaves, terminal, base de
// datos, bug…) para que la rejilla de herramientas tenga carácter sin
// reproducir la identidad de nadie.

const D = {
  componente:
    'M4 7h7v7H4zM13 4h7v7h-7zM13 13h7v7h-7zM4 16h7v4H4z',
  llaves:
    'M9 4C7 4 7 8 5 8c2 0 2 4 4 4M15 4c2 0 2 4 4 4-2 0-2 4-4 4M9 12c-2 0-2 4-4 4 2 0 2 4 4 4M15 12c2 0 2 4 4 4-2 0-2 4-4 4',
  etiqueta: 'M9 6 4 12l5 6M15 6l5 6-5 6M13 4l-2 16',
  capas: 'M12 3 3 8l9 5 9-5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5',
  rayo: 'M13 2 4 14h6l-1 8 9-12h-6l1-8z',
  grafica: 'M4 20V4M4 20h16M8 20v-7M12 20V8M16 20v-4M20 20V11',
  vector:
    'M6 6h.01M18 6h.01M6 18h.01M18 18h.01M6 6h12v12H6zM4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z',
  formas: 'M4 4h7v7H4zM17.5 4 21 11h-7l3.5-7zM7.5 14a3.5 3.5 0 1 0 .01 0M14 14h7v7h-7z',
  carro: 'M3 4h2l2.5 11h10L20 7H6M9 20h.01M17 20h.01',
  sello:
    'M12 3l2.3 1.7 2.8-.4 1 2.7 2.4 1.6-1 2.7 1 2.7-2.4 1.6-1 2.7-2.8-.4L12 20l-2.3-1.7-2.8.4-1-2.7L3.5 14l1-2.7-1-2.7 2.4-1.6 1-2.7 2.8.4z',
  checklist: 'M4 6h3l1.5 1.5L12 4M4 13h3l1.5 1.5L12 11M4 20h3l1.5 1.5L12 18M15 6h5M15 13h5M15 20h5',
  bicho:
    'M9 5a3 3 0 0 1 6 0M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0zM3 11h3M18 11h3M3.5 17h2.8M17.7 17h2.8M4.5 6.5 7 8.5M19.5 6.5 17 8.5',
  terminal: 'M3 4h18v16H3zM6.5 9.5 9.5 12l-3 2.5M13 15h5',
  tabla: 'M3 4h18v16H3zM3 9.5h18M3 15h18M9 4v16M15 4v16',
  base: 'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  rama: 'M6 4v10M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 10v1c0 3-3 4-6 4.5',
  etiquetaPrecio:
    'M3 6h8l9 9-8 8-9-9zM7.5 10.5h.01M13 4h8v8M14.5 3.5 21 10',
  chat: 'M4 5h16v11H9l-5 4V5zM8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01',
  chispa:
    'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z',
  imagen: 'M3 5h18v14H3zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3 16l5-4 4 3 3-2.5 6 4.5',
  video: 'M3 6h12v12H3zM15 10l6-3.5v11L15 14M6.5 9.5h.01',
  pincel:
    'M4 20c0-2 1-3 2.5-3S9 18 9 19.5 8 22 6 22c2 0 3-1.5 3-3.5M9.5 16.5 20 6a2 2 0 0 0-3-3L6.5 13.5',
}

// Qué símbolo le toca a cada herramienta (por su id en content.js)
export const GLIFOS = {
  // E-commerce
  shopify: 'carro',
  fichas: 'etiquetaPrecio',
  analitica: 'grafica',
  // Diseño
  figma: 'vector',
  canva: 'formas',
  photoshop: 'imagen',
  illustrator: 'pincel',
  // IA y contenido
  chatgpt: 'chat',
  claude: 'chispa',
  'ia-imagen': 'imagen',
  'ia-video': 'video',
  // Código
  react: 'componente',
  javascript: 'llaves',
  html: 'etiqueta',
  css: 'capas',
  vite: 'rayo',
  git: 'rama',
  // QA y datos
  istqb: 'sello',
  testing: 'checklist',
  devtools: 'bicho',
  powershell: 'terminal',
  excel: 'tabla',
  sql: 'base',
  chartjs: 'grafica',
}

export default function Glyph({ nombre, className = '' }) {
  const d = D[nombre] || D.componente
  return (
    <svg
      className={`glyph ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
