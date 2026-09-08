// Elementos gráficos originales (pegatinas, sellos, garabatos) que dan el aire
// de collage recortado. Todo es SVG inline: no pesa nada y escala perfecto.

export function Squiggle({ className = '', color = '#1b2cf0' }) {
  return (
    <svg
      className={`doodle doodle--squiggle ${className}`}
      viewBox="0 0 300 18"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2,12 C22,2 42,2 62,10 C82,18 102,18 122,9 C142,1 162,1 182,10 C202,18 222,18 242,10 C262,3 282,4 298,11"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ArrowDoodle({ className = '', color = '#101010' }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 120 80" aria-hidden="true">
      <path
        d="M8,10 C34,4 62,10 78,30 C90,45 90,58 84,68"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M70,54 L84,70 L96,52"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StarBurst({ className = '', color = '#1b2cf0' }) {
  const puntas = 12
  const pts = []
  for (let i = 0; i < puntas * 2; i++) {
    const r = i % 2 === 0 ? 50 : 32
    const a = (Math.PI * i) / puntas - Math.PI / 2
    pts.push(`${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`)
  }
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <polygon points={pts.join(' ')} fill={color} stroke="#101010" strokeWidth="3" />
    </svg>
  )
}

export function CodeSticker({ className = '' }) {
  return (
    <span className={`sticker sticker--code ${className}`} aria-hidden="true">
      &lt;/&gt;
    </span>
  )
}

// Sello circular de QA, con el texto girando alrededor
export function QAStamp({ className = '' }) {
  return (
    <div className={`stamp ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="stampPath" d="M100,100 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0" />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          stroke="#101010"
          strokeWidth="5"
          strokeDasharray="12 9"
        />
        <text className="stamp__text">
          <textPath href="#stampPath">
            {'QA · TESTED · SHIPPED · QA · TESTED · SHIPPED · '}
          </textPath>
        </text>
      </svg>
      <svg className="stamp__check" viewBox="0 0 40 40">
        <path
          d="M6,21 L16,31 L34,9"
          fill="none"
          stroke="#1b2cf0"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// Trama de puntos tipo impresión offset
export function Halftone({ className = '', color = '#101010' }) {
  return (
    <svg className={`doodle doodle--halftone ${className}`} aria-hidden="true">
      <defs>
        <pattern id="ht" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2.6" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ht)" />
    </svg>
  )
}
