import { useEffect, useState } from 'react'
import { about, site } from '../content'
import TornEdge from './TornEdge'
import Languages from './Languages'
import { CodeSticker, StarBurst, Squiggle } from './Doodles'
import Split from './Split'
import Contador from './Contador'

// Foto de perfil -> coloca el archivo en: public/img/retrato.jpg
const RETRATO = './img/retrato.jpg'

export default function About() {
  const [sinFoto, setSinFoto] = useState(false)

  useEffect(() => {
    let vivo = true
    const test = new Image()
    test.onerror = () => vivo && setSinFoto(true)
    test.onload = () => vivo && setSinFoto(test.naturalWidth === 0)
    test.src = RETRATO
    return () => {
      vivo = false
    }
  }, [])

  return (
    <section className="about" id="sobre-mi">
      <div className="about__sheet">
        <TornEdge position="top" color="#f4f1e8" />

        <div className="about__grid">
          <div className="about__text">
            <h2 className="h-display about__title reveal">
              <Split texto={about.titulo} />
              <Squiggle className="about__squiggle" />
            </h2>
            <p className="about__sub">{about.subtitulo}</p>
            {about.parrafos.map((p, i) => (
              <p className="about__p" key={i}>
                {p}
              </p>
            ))}

            <Languages />
          </div>

          <div className="about__aside reveal">
            <div className="about__card">
              <div className="about__photo">
                {!sinFoto ? (
                  <img src={RETRATO} alt={`${site.nombre} ${site.apellido}`} />
                ) : (
                  <div className="about__photo-fallback">
                    <span>MM</span>
                    <small>public/img/retrato.jpg</small>
                  </div>
                )}
              </div>
              <p className="about__badge">{about.badge}</p>
              <span className="about__star">★</span>
            </div>

            <CodeSticker className="sticker--about" />
            <StarBurst className="doodle--burst" color="#ff6a13" />
          </div>
        </div>

        <ul className="about__stats reveal">
          {about.stats.map((s, i) => (
            <li key={i}>
              <strong><Contador valor={s.valor} /></strong>
              <span>{s.etiqueta}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
