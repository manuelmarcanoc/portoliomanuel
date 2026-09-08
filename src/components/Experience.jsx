import { useEffect, useState } from 'react'
import { experiencia } from '../content'
import { QAStamp } from './Doodles'
import Split from './Split'

// Logo de la empresa. Si no existe el archivo en /public/img/, se pinta un
// sello con las iniciales y no se rompe nada.
function Logo({ src, iniciales, nombre }) {
  const [falla, setFalla] = useState(false)

  useEffect(() => {
    let vivo = true
    const test = new Image()
    test.onerror = () => vivo && setFalla(true)
    test.onload = () => vivo && setFalla(test.naturalWidth === 0)
    test.src = src
    return () => {
      vivo = false
    }
  }, [src])

  return (
    <div className="exp__logo">
      {!falla ? (
        <img src={src} alt={`Logo de ${nombre}`} />
      ) : (
        <span className="exp__initials">{iniciales}</span>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="exp" aria-label="Trayectoria">
      <div className="exp__paper">
      <div className="exp__head">
        <h2 className="exp__h reveal">
          <Split texto={experiencia.titulo} />
        </h2>
        <QAStamp className="stamp--exp" />
      </div>

        <div className="exp__grid">
        {experiencia.items.map((e, i) => (
          <article className="exp__card reveal" key={e.id} style={{ transitionDelay: `${i * 90}ms` }}>
            <Logo src={e.logo} iniciales={e.iniciales} nombre={e.empresa} />
            <div className="exp__body">
              <h3 className="exp__empresa">{e.empresa}</h3>
              <p className="exp__puesto">{e.puesto}</p>
              <p className="exp__texto">{e.texto}</p>
              <ul className="exp__tags">
                {e.tags.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}
