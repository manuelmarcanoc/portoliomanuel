import { useEffect, useRef, useState } from 'react'

// Cuenta hasta el número cuando el bloque entra en pantalla.
// Respeta lo que hay alrededor del número: '+400', '8 h', '10 °C'.
// Si el valor no tiene dígitos ('DAM', 'QA'), lo escribe tal cual.

// Solo cuenta si el número va al principio (o tras un '+'): así '+400',
// '8 h' o '65 min' animan, pero 'B2B' o 'DAM' se escriben tal cual.
const PARTES = /^(\+?)(\d[\d.,]*)(.*)$/s

export default function Contador({ valor, duracion = 1100 }) {
  const ref = useRef(null)
  const m = String(valor).match(PARTES)
  const objetivo = m ? Number(m[2].replace(',', '.')) : null
  const [n, setN] = useState(objetivo === null ? null : 0)

  useEffect(() => {
    if (objetivo === null || !ref.current) return

    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reducido || !('IntersectionObserver' in window)) {
      setN(objetivo)
      return
    }

    let raf
    const obs = new IntersectionObserver(
      (entradas) => {
        if (!entradas[0].isIntersecting) return
        obs.disconnect()
        const t0 = performance.now()
        const paso = (t) => {
          const k = Math.min(1, (t - t0) / duracion)
          setN(objetivo * (1 - Math.pow(1 - k, 3)))
          if (k < 1) raf = requestAnimationFrame(paso)
        }
        raf = requestAnimationFrame(paso)
      },
      { threshold: 0.4 }
    )
    obs.observe(ref.current)
    return () => {
      obs.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [objetivo, duracion])

  if (objetivo === null) return <span ref={ref}>{valor}</span>

  const decimales = (m[2].split(/[.,]/)[1] || '').length
  return (
    <span ref={ref}>
      {m[1]}
      {n.toFixed(decimales).replace('.', ',')}
      {m[3]}
    </span>
  )
}
