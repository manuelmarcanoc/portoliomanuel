import { useEffect, useState } from 'react'
import Cover from './Cover'

// ---------------------------------------------------------------------------
//  CAPTURA DEL PROYECTO
//  · Intenta cargar la imagen real de /public/img/...
//  · Si todavía no existe: en la grande se pinta una portada tipográfica
//    diseñada, y las miniaturas simplemente no se dibujan (mejor nada que un
//    hueco vacío). En cuanto dejes el archivo, aparece la captura.
//  · La imagen SIEMPRE va enlazada al dominio del proyecto (requisito).
// ---------------------------------------------------------------------------

export default function Shot({
  proyecto,
  src,
  alt,
  ratio = '16 / 10',
  chrome = true,
  esThumb = false,
  className = '',
}) {
  // Comprobamos la imagen fuera del DOM: así el respaldo aparece aunque la
  // captura esté muy abajo en la página.
  const [estado, setEstado] = useState('cargando')

  useEffect(() => {
    let vivo = true
    const test = new Image()
    test.onerror = () => vivo && setEstado('falta')
    test.onload = () => vivo && setEstado(test.naturalWidth === 0 ? 'falta' : 'ok')
    test.src = src
    return () => {
      vivo = false
    }
  }, [src])

  // Miniatura sin archivo: no se dibuja nada.
  if (esThumb && estado === 'falta') return null

  return (
    <a
      className={`shot ${className} ${estado === 'falta' ? 'shot--cover' : ''}`}
      href={proyecto.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${proyecto.nombre} en ${proyecto.dominio}`}
    >
      {chrome && (
        <div className="shot__chrome">
          <i /> <i /> <i />
          <span className="shot__url">{proyecto.dominio}</span>
          <span className="shot__go">ABRIR ↗</span>
        </div>
      )}

      <div className="shot__frame" style={{ aspectRatio: ratio }}>
        {estado === 'falta' ? (
          <Cover proyecto={proyecto} />
        ) : (
          <img src={src} alt={alt} decoding="async" data-parallax />
        )}
      </div>

      {!esThumb && (
        <span className="shot__hover">
          VER EN {proyecto.dominio.toUpperCase()} ↗
        </span>
      )}
    </a>
  )
}
