import { idiomas, nivelesCEFR } from '../content'
import Flag from './Flags'

// Banderitas tipo pegatina. Al pasar el ratón (o al enfocarlas con el teclado
// o tocarlas en móvil) salta un globo con el nivel y una barra del marco
// europeo que se rellena sola.

export default function Languages() {
  return (
    <div className="langs">
      <p className="langs__label">
        IDIOMAS <span>· pásate por encima</span>
      </p>
      <ul className="langs__list">
        {idiomas.map((l, i) => (
          <li key={l.codigo} style={{ '--i': i }}>
            <button
              type="button"
              className="lang"
              aria-label={`${l.nombre}: ${l.nivel}. ${l.detalle}`}
            >
              <Flag codigo={l.codigo} />
              <span className="lang__code">{l.codigo}</span>

              <span className="lang__pop" role="tooltip">
                <span className="lang__pop-top">
                  <b>{l.nombre}</b>
                  <em>{l.nivel}</em>
                </span>
                <span className="lang__meter" aria-hidden="true">
                  {nivelesCEFR.map((n, j) => (
                    <i key={n} className={j < l.paso ? 'is-on' : ''} style={{ '--j': j }}>
                      {n}
                    </i>
                  ))}
                </span>
                <small>{l.detalle}</small>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
