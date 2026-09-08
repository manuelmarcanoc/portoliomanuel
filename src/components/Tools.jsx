import { useEffect, useMemo, useState } from 'react'
import { tools, filtrosTools } from '../content'
import TornEdge from './TornEdge'
import Glyph, { GLIFOS } from './Glyphs'
import Split from './Split'

// Pastilla de herramienta. Si existe public/img/tools/<id>.svg se usa ese
// archivo; si no, se pinta un monograma sobre el color de la herramienta.
function Icono({ tool }) {
  const [falla, setFalla] = useState(false)
  const src = `./img/tools/${tool.id}.svg`

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

  // Sin logo: usamos el símbolo propio de la herramienta.
  if (falla) return <Glyph nombre={GLIFOS[tool.id]} />
  return <img className="tool__img" src={src} alt="" aria-hidden="true" />
}

export default function Tools() {
  const [filtro, setFiltro] = useState('todo')

  const visibles = useMemo(
    () => (filtro === 'todo' ? tools : tools.filter((t) => t.cat === filtro)),
    [filtro]
  )

  return (
    <section className="tools" id="herramientas" aria-label="Herramientas">
      <div className="tools__paper">
        <div className="tools__head">
          <h2 className="tools__h reveal">
            <Split texto="HERRAMIENTAS" />
            <span className="accent">.</span>
          </h2>
          <p className="tools__lead">
            Pasa el ratón por encima (o tócalas) para ver para qué uso cada una.
          </p>
        </div>

        <div className="tools__filtros" role="tablist" aria-label="Filtrar herramientas">
          {filtrosTools.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filtro === f.id}
              className={`chip ${filtro === f.id ? 'is-on' : ''}`}
              onClick={() => setFiltro(f.id)}
            >
              {f.label}
              <b>{f.id === 'todo' ? tools.length : tools.filter((t) => t.cat === f.id).length}</b>
            </button>
          ))}
        </div>

        <ul className="tools__grid">
          {visibles.map((t, i) => (
            <li key={t.id} style={{ '--i': i }}>
              <button type="button" className="tool" aria-label={`${t.nombre}: ${t.nota}`}>
                <span className="tool__cara" style={{ '--c': t.color }}>
                  <Icono tool={t} />
                </span>
                <span className="tool__nombre">{t.nombre}</span>
                <span className="tool__pop" role="tooltip">
                  <b>{t.nombre}</b>
                  <small>{t.nota}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <TornEdge position="bottom" color="#f4f1e8" />
      </div>
    </section>
  )
}
