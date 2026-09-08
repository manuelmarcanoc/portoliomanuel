import { useEffect, useState } from 'react'
import { site } from '../content'

const SECCIONES = [
  { href: '#sobre-mi', txt: 'SOBRE MÍ' },
  { href: '#herramientas', txt: 'HERRAMIENTAS' },
  { href: '#proyectos', txt: 'PROYECTOS' },
  { href: '#encaje', txt: 'ENCAJO' },
  { href: '#contacto', txt: 'CONTACTO' },
]

// Barra que aparece al pasar el hero, con el porcentaje de página leído.
export default function Nav() {
  const [visible, setVisible] = useState(false)
  const [avance, setAvance] = useState(0)

  useEffect(() => {
    let raf = null
    const alScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        const alto = document.documentElement.scrollHeight - window.innerHeight
        setVisible(y > window.innerHeight * 0.75)
        setAvance(alto > 0 ? Math.min(1, y / alto) : 0)
        raf = null
      })
    }
    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', alScroll)
    return () => {
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', alScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={`navbar ${visible ? 'is-visible' : ''}`}>
      <span className="navbar__barra" style={{ transform: `scaleX(${avance})` }} />
      <div className="navbar__fila">
        <a className="navbar__marca" href="#inicio">
          {site.nombre} {site.apellido}
          <i>.</i>
        </a>
        <nav className="navbar__links">
          {SECCIONES.map((s) => (
            <a key={s.href} href={s.href}>
              {s.txt}
            </a>
          ))}
        </nav>
        <span className="navbar__acciones">
          <a className="navbar__cv" href={site.cv} download>
            CV ↓
          </a>
          <a className="navbar__cta magnetico" href={`mailto:${site.email}`}>
            ESCRÍBEME
          </a>
        </span>
      </div>
    </div>
  )
}
