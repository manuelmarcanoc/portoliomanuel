// Cinta / tira negra con texto en bucle infinito, como el washi tape
// y los tickers de la referencia.

export default function Marquee({
  items = [],
  variant = 'dark', // 'dark' | 'lime' | 'red'
  speed = 28, // segundos por vuelta
  reverse = false,
  className = '',
}) {
  const run = [...items, ...items, ...items]

  return (
    <div className={`marquee marquee--${variant} ${className}`} aria-hidden="true">
      <div
        className={`marquee__track ${reverse ? 'is-reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {run.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <i className="marquee__dot">✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
