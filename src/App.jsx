import { useEffect } from 'react'
import Intro from './components/Intro'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import SkillsBlock from './components/SkillsBlock'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Encaje from './components/Encaje'
import Contact from './components/Contact'

// --- Aparición de bloques al llegar a ellos ------------------------------ //
function useReveal() {
  useEffect(() => {
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const nodos = document.querySelectorAll('.reveal')
    if (reducido || !('IntersectionObserver' in window)) {
      nodos.forEach((n) => n.classList.add('is-in'))
      return
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            obs.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )
    nodos.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])
}

// --- Efectos ligados al scroll ------------------------------------------- //
// Un solo bucle para todo: velocidad de scroll (inclina las cintas), salida
// del hero y paralaje de las imágenes dentro de su marco.
function useScrollFx() {
  useEffect(() => {
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reducido) return

    const raiz = document.documentElement
    let previo = window.scrollY
    let vel = 0
    let raf = null
    let pendiente = false

    const pintar = () => {
      raf = null
      const y = window.scrollY
      const vh = window.innerHeight

      // Velocidad suavizada, acotada para que no se dispare
      const bruta = Math.max(-60, Math.min(60, y - previo))
      previo = y
      vel += (bruta - vel) * 0.18
      raiz.style.setProperty('--vel', vel.toFixed(2))

      // El hero se va apagando conforme sales de él
      const hero = document.querySelector('.hero')
      if (hero) hero.style.setProperty('--sy', Math.min(1, y / (vh * 0.9)).toFixed(3))

      // Paralaje de cada imagen respecto al centro de la pantalla
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.bottom < -200 || r.top > vh + 200) return
        const p = (r.top + r.height / 2 - vh / 2) / vh
        el.style.setProperty('--p', p.toFixed(3))
      })

      if (Math.abs(vel) > 0.05) pedir()
      else pendiente = false
    }

    const pedir = () => {
      if (raf) return
      raf = requestAnimationFrame(pintar)
    }
    const alScroll = () => {
      pendiente = true
      pedir()
    }

    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', alScroll)
    return () => {
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', alScroll)
      if (raf) cancelAnimationFrame(raf)
      raiz.style.removeProperty('--vel')
    }
  }, [])
}

// --- Botones que se acercan al ratón ------------------------------------- //
function useMagnetico() {
  useEffect(() => {
    const fino = window.matchMedia?.('(pointer: fine)').matches
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!fino || reducido) return

    const nodos = [...document.querySelectorAll('.magnetico')]
    const limpiar = []

    nodos.forEach((el) => {
      const mover = (e) => {
        const r = el.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height
        el.style.setProperty('--mx', (dx * 14).toFixed(1) + 'px')
        el.style.setProperty('--my', (dy * 10).toFixed(1) + 'px')
      }
      const salir = () => {
        el.style.setProperty('--mx', '0px')
        el.style.setProperty('--my', '0px')
      }
      el.addEventListener('pointermove', mover)
      el.addEventListener('pointerleave', salir)
      limpiar.push(() => {
        el.removeEventListener('pointermove', mover)
        el.removeEventListener('pointerleave', salir)
      })
    })

    return () => limpiar.forEach((f) => f())
  }, [])
}

export default function App() {
  useReveal()
  useScrollFx()
  useMagnetico()

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />
      <Intro />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <SkillsBlock />
      <Tools />
      <Projects />
      <Encaje />
      <Contact />
    </div>
  )
}
