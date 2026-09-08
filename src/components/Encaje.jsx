import { encaje } from '../content'
import Split from './Split'
import { ArrowDoodle } from './Doodles'

// Bloque que traduce el perfil a lo que necesita una tienda de artista o una
// línea de merch. Es el argumento de cierre antes del contacto.
export default function Encaje() {
  return (
    <section className="encaje" id="encaje" aria-label="Dónde encajo">
      <div className="encaje__head">
        <h2 className="encaje__h reveal">
          <Split texto={encaje.titulo} />
        </h2>
        <p className="encaje__intro">{encaje.intro}</p>
      </div>

      <ol className="encaje__grid">
        {encaje.items.map((it, i) => (
          <li
            className="encaje__card reveal"
            key={it.n}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="encaje__n">{it.n}</span>
            <h3 className="encaje__t">{it.t}</h3>
            <p className="encaje__d">{it.d}</p>
          </li>
        ))}
      </ol>

      <p className="encaje__cierre reveal">
        <ArrowDoodle className="encaje__flecha" color="#ff6a13" />
        {encaje.cierre}
      </p>
    </section>
  )
}
