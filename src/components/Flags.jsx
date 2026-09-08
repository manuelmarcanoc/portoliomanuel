// Banderas dibujadas en SVG, no emoji: los emoji de bandera no se ven en
// Windows (salen como dos letras) y aquí tienen que verse igual en todas partes.

const box = { viewBox: '0 0 60 40', role: 'img' }

function ES() {
  return (
    <svg {...box} aria-label="España">
      <rect width="60" height="40" fill="#AA151B" />
      <rect y="10" width="60" height="20" fill="#F1BF00" />
    </svg>
  )
}

function GB() {
  return (
    <svg {...box} aria-label="Reino Unido">
      <rect width="60" height="40" fill="#012169" />
      <g clipPath="url(#ukClip)">
        <clipPath id="ukClip">
          <rect width="60" height="40" />
        </clipPath>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      </g>
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  )
}

function FR() {
  return (
    <svg {...box} aria-label="Francia">
      <rect width="60" height="40" fill="#fff" />
      <rect width="20" height="40" fill="#002395" />
      <rect x="40" width="20" height="40" fill="#ED2939" />
    </svg>
  )
}

function DE() {
  return (
    <svg {...box} aria-label="Alemania">
      <rect width="60" height="13.34" fill="#000" />
      <rect y="13.34" width="60" height="13.33" fill="#DD0000" />
      <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
    </svg>
  )
}

const MAPA = { ES, EN: GB, GB, FR, DE }

export default function Flag({ codigo }) {
  const C = MAPA[codigo]
  return <span className="flag">{C ? <C /> : codigo}</span>
}
