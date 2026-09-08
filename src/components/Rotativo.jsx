import { useEffect, useState } from 'react'

// Frase que se va cambiando sola, con un giro tipo panel de aeropuerto.
export default function Rotativo({ label, frases, intervalo = 2600 }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reducido || frases.length < 2) return
    const id = setInterval(() => setI((n) => (n + 1) % frases.length), intervalo)
    return () => clearInterval(id)
  }, [frases.length, intervalo])

  return (
    <p className="rotativo">
      <span className="rotativo__label">{label}</span>
      <span className="rotativo__caja">
        <span className="rotativo__texto" key={i}>
          {frases[i]}
        </span>
      </span>
      <span className="rotativo__cursor" aria-hidden="true" />
    </p>
  )
}
