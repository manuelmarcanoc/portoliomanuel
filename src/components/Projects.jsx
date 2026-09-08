import { proyectos } from '../content'
import Shot from './Shot'
import Marquee from './Marquee'
import Split from './Split'
import Contador from './Contador'

export default function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects__head">
        <h2 className="projects__h reveal">
          <Split texto="PROYECTOS" />{' '}
          <span className="accent">
            <Split texto="DESTACADOS" />
          </span>
        </h2>
        <p className="projects__lead">
          Tres webs online, con usuarios de verdad entrando cada día. Haz clic en
          cualquier captura para abrirlas.
        </p>
      </div>

      <div className="projects__list">
        {proyectos.map((p, i) => (
          <article
            className={`project reveal ${i % 2 === 1 ? 'project--flip' : ''}`}
            key={p.id}
            id={p.id}
          >
            <div className="project__media">
              {/* NOTA DE DISEÑO: mockup principal. Enlazado a {p.url} */}
              <Shot
                proyecto={p}
                src={p.imagen}
                alt={`Captura de ${p.nombre} — ${p.dominio}`}
                ratio="16 / 10"
              />

              {p.detalles?.length > 0 && (
                <div className="project__thumbs">
                  {p.detalles.map((d, j) => (
                    /* NOTA DE DISEÑO: mockups secundarios, también enlazados */
                    <Shot
                      key={j}
                      proyecto={p}
                      src={d}
                      alt={`${p.nombre} — detalle ${j + 1}`}
                      ratio="4 / 3"
                      chrome={false}
                      esThumb
                      className="shot--thumb"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="project__info">
              <div className="project__meta">
                <span className="project__num">{p.numero}</span>
                <span className="project__rol">{p.rol}</span>
              </div>

              <h3 className="project__name">{p.nombre}</h3>
              <p className="project__tagline">{p.tagline}</p>

              <p className="project__desc">{p.descripcion}</p>
              <p className="project__desc">{p.descripcion2}</p>

              <ul className="project__metrics">
                {p.metricas.map((m, j) => (
                  <li key={j}>
                    <strong><Contador valor={m.k} /></strong>
                    <span>{m.v}</span>
                  </li>
                ))}
              </ul>

              <ul className="project__tags">
                {p.tags.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>

              <a
                className="project__link magnetico"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.dominio} <b>↗</b>
              </a>
            </div>
          </article>
        ))}
      </div>

      <Marquee
        items={['KOOZ.ES', 'VIBBELABS.ES', 'ISTQBEASY.COM']}
        variant="accent"
        speed={22}
        reverse
        className="projects__ticker"
      />
    </section>
  )
}
