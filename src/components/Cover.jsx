// Portada tipográfica de cada proyecto.
// Se muestra mientras no haya captura real en /public/img/. No es un hueco
// vacío ni una imitación de la web enlazada: es una pieza diseñada con el
// lenguaje del propio portfolio, para que la sección se vea bien desde ya.

export default function Cover({ proyecto }) {
  const { id, nombre, numero, dominio, tagline } = proyecto

  return (
    <div className={`cover cover--${id}`}>
      <span className="cover__trama" aria-hidden="true" />

      <div className="cover__pila" aria-hidden="true">
        <span className="cover__linea cover__linea--hueca">{nombre}</span>
        <span className="cover__linea cover__linea--solida">{nombre}</span>
        <span className="cover__linea cover__linea--hueca">{nombre}</span>
      </div>

      <div className="cover__pie">
        <span className="cover__num">{numero}</span>
        <span className="cover__tag">{tagline}</span>
        <span className="cover__dom">{dominio}</span>
      </div>
    </div>
  )
}
