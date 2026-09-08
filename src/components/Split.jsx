// Parte un titular en palabras para que entren una detrás de otra.
// La animación la dispara la clase .is-in que pone el observador de App.jsx.
// El espacio va FUERA del envoltorio con overflow:hidden, si no se pierde
// (y con él se perdería también al copiar el texto o al leerlo un lector).

export default function Split({ texto, className = '', as: Tag = 'span' }) {
  const palabras = String(texto).split(' ')
  return (
    <Tag className={`split ${className}`}>
      {palabras.map((p, i) => (
        <span key={i}>
          <span className="split__w">
            <span className="split__i" style={{ '--k': i }}>
              {p}
            </span>
          </span>
          {i < palabras.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
