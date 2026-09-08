import { useEffect, useState } from 'react'
import { site } from '../content'

// Cortinilla de entrada. Se ve una vez por sesión: cuenta hasta 100, el nombre
// entra desde abajo y el telón sube. Si el sistema pide menos movimiento o ya
// se ha visto, no aparece.

export default function Intro() {
  const [fase, setFase] = useState('inicio') // inicio -> subiendo -> fuera
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let vista = false
    try {
      vista = sessionStorage.getItem('intro-vista') === '1'
    } catch {
      vista = false
    }

    if (reducido || vista) {
      setFase('fuera')
      document.body.classList.remove('bloqueado')
      return
    }

    document.body.classList.add('bloqueado')
    try {
      sessionStorage.setItem('intro-vista', '1')
    } catch {
      /* modo privado: da igual, se verá otra vez */
    }

    const t0 = performance.now()
    const DURA = 1100
    let raf

    const contar = (t) => {
      const k = Math.min(1, (t - t0) / DURA)
      // Arranca rápido y frena al final
      setPct(Math.round((1 - Math.pow(1 - k, 3)) * 100))
      if (k < 1) raf = requestAnimationFrame(contar)
      else {
        setFase('subiendo')
        setTimeout(() => {
          setFase('fuera')
          document.body.classList.remove('bloqueado')
        }, 900)
      }
    }
    raf = requestAnimationFrame(contar)

    return () => {
      cancelAnimationFrame(raf)
      document.body.classList.remove('bloqueado')
    }
  }, [])

  if (fase === 'fuera') return null

  return (
    <div className={`intro ${fase === 'subiendo' ? 'is-subiendo' : ''}`} aria-hidden="true">
      <div className="intro__centro">
        <span className="intro__nombre">
          <span>{site.nombre}</span>
          <span>{site.apellido}</span>
        </span>
        <span className="intro__linea">
          <i style={{ transform: `scaleX(${pct / 100})` }} />
        </span>
        <span className="intro__pct">{String(pct).padStart(3, '0')}</span>
      </div>
    </div>
  )
}
