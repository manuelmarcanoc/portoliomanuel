import { useEffect, useRef } from 'react'
import { hero, site } from '../content'
import Marquee from './Marquee'
import { ArrowDoodle, CodeSticker } from './Doodles'
import Rotativo from './Rotativo'

export default function Hero() {
  const ref = useRef(null)

  // Paralaje suave con el ratón: el nombre, la cinta y el sello se mueven
  // un poco a distinta velocidad. Se apaga en táctil y con movimiento reducido.
  useEffect(() => {
    const fino = window.matchMedia?.('(pointer: fine)').matches
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (!fino || reducido || !el) return

    let raf = null
    let mx = 0
    let my = 0

    const mover = (e) => {
      const r = el.getBoundingClientRect()
      mx = (e.clientX - r.left) / r.width - 0.5
      my = (e.clientY - r.top) / r.height - 0.5
      if (raf) return
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', mx.toFixed(3))
        el.style.setProperty('--my', my.toFixed(3))
        raf = null
      })
    }

    el.addEventListener('pointermove', mover, { passive: true })
    return () => {
      el.removeEventListener('pointermove', mover)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className="hero" id="inicio" ref={ref}>
      {/* Cinta diagonal, en el lugar del rotulador de la referencia */}
      <div className="hero__tape" aria-hidden="true">
        <span>PORTFOLIO</span>
        <span>·</span>
        <span>{site.anio}</span>
        <span>·</span>
        <span>PORTFOLIO</span>
        <span>·</span>
        <span>{site.anio}</span>
      </div>

      {/* Nav mínima */}
      <nav className="hero__nav">
        <a href="#inicio" className="hero__brand">
          MM<i>.</i>
        </a>
        <ul>
          <li>
            <a href="#sobre-mi">SOBRE MÍ</a>
          </li>
          <li>
            <a href="#proyectos">PROYECTOS</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </nav>

      <div className="hero__body">
        <p className="hero__kicker">{hero.kicker}</p>

        <div className="hero__title">
          <span className="hero__script">{hero.nombrePequeno}</span>
          {/* Doble impresión desalineada: negro debajo, rojo encima */}
          <h1 className="hero__word">
            <span className="hero__word-black">{hero.palabraGigante}</span>
            <span className="hero__word-accent" aria-hidden="true">
              {hero.palabraGigante}
            </span>
          </h1>
          <span className="hero__year">{hero.anio || site.anio}</span>
        </div>

        <p className="hero__claim">{hero.claim}</p>

        <Rotativo label={hero.rotativoLabel} frases={hero.rotativo} />

        <div className="hero__ctas">
          <a className="btn btn--black magnetico" href={hero.ctaPrimario.href}>
            {hero.ctaPrimario.texto} <b>→</b>
          </a>
          <a className="btn btn--ghost magnetico" href={hero.ctaSecundario.href}>
            {hero.ctaSecundario.texto}
          </a>
          <ArrowDoodle className="hero__arrow" />
          <CodeSticker className="sticker--hero" />
        </div>

        <dl className="hero__datos">
          {hero.datos.map((d, i) => (
            <div key={i}>
              <dt>{d.k}</dt>
              <dd>{d.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Gif de PC de fondo */}
      <img src="./img/gif.gif" alt="" className="hero__pc-gif" aria-hidden="true" />

      {/* Sello circular giratorio */}
      <div className="seal" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <defs>
            <path
              id="sealCircle"
              d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
            />
          </defs>
          <text className="seal__text">
            <textPath href="#sealCircle">{hero.sello.repeat(2)}</textPath>
          </text>
        </svg>
        <span className="seal__star">★</span>
      </div>

      <Marquee items={hero.ticker} variant="dark" speed={30} className="hero__ticker" />
    </header>
  )
}
