import { contacto, footer, site, proyectos } from '../content'
import TornEdge from './TornEdge'
import Split from './Split'

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact__inner">
        <div className="contact__left">
          <h2 className="contact__h reveal">
            <span className="contact__l1">
              <Split texto={contacto.titulo1} />
            </span>
            <span className="contact__l2">
              {contacto.titulo2}
              <i className="contact__star">★</i>
            </span>
          </h2>

          <p className="contact__text">{contacto.texto}</p>

          <div className="contact__actions">
            <a className="btn btn--brand btn--big magnetico" href={`mailto:${site.email}`}>
              {contacto.ctaTexto} <b>→</b>
            </a>
            <a className="btn btn--ghost btn--big magnetico" href={site.cv} download>
              DESCARGAR CV <b>↓</b>
            </a>
            <span className="contact__mail">{site.email}</span>
          </div>

        </div>

        {/* Tarjeta de contacto tipo pegatina */}
        <aside className="card">
          <p className="card__head">CONTACTO DIRECTO</p>
          <ul className="card__list">
            <li>
              <span>EMAIL</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>LINKEDIN</span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                /manuelmarcanoc
              </a>
            </li>
            {proyectos.map((p) => (
              <li key={p.id}>
                <span>{p.nombre}</span>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.dominio} ↗
                </a>
              </li>
            ))}
          </ul>
          <a className="card__cv" href={site.cv} download>
            DESCARGAR CV <b>↓</b>
          </a>
          <p className="card__foot">PORTFOLIO · {site.anio}</p>
        </aside>
      </div>

      <div className="footer-wrap">
        <TornEdge position="top" color="#f4f1e8" />

        <footer className="footer">
          <div className="footer__left">
            <span className="footer__name">
              {site.nombre} {site.apellido}
            </span>
            <span className="footer__city">{site.rol.toUpperCase()}</span>
          </div>

          <ul className="footer__disciplinas">
            {footer.disciplinas.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <ul className="footer__links">
            {proyectos.map((p) => (
              <li key={p.id}>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.dominio}
                </a>
              </li>
            ))}
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="./img/ManuelMarcanoCV_ENG.pdf" download="ManuelMarcanoCV_ENG.pdf">
                Descargar CV
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  )
}
