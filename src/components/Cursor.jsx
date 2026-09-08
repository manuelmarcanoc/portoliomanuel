import { useEffect, useRef } from 'react'

// Cursor propio: un punto que va pegado al ratón y un aro que lo persigue con
// retraso. Crece sobre lo que se puede pulsar. Solo en ratón de verdad: en
// táctil y si el sistema pide menos movimiento, no se activa.

export default function Cursor() {
  const punto = useRef(null)
  const aro = useRef(null)

  useEffect(() => {
    const fino = window.matchMedia?.('(pointer: fine)').matches
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!fino || reducido) return

    document.documentElement.classList.add('cursor-propio')

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let ax = x
    let ay = y
    let raf

    const mover = (e) => {
      x = e.clientX
      y = e.clientY
      if (punto.current) punto.current.style.transform = `translate(${x}px, ${y}px)`

      const sobre = e.target.closest?.('a, button, .shot, .lang, .tool, .chip')
      aro.current?.classList.toggle('is-activo', Boolean(sobre))
    }

    const bucle = () => {
      ax += (x - ax) * 0.16
      ay += (y - ay) * 0.16
      if (aro.current) aro.current.style.transform = `translate(${ax}px, ${ay}px)`
      raf = requestAnimationFrame(bucle)
    }

    const salir = () => aro.current?.classList.add('is-fuera')
    const entrar = () => aro.current?.classList.remove('is-fuera')

    window.addEventListener('pointermove', mover, { passive: true })
    document.addEventListener('mouseleave', salir)
    document.addEventListener('mouseenter', entrar)
    raf = requestAnimationFrame(bucle)

    return () => {
      window.removeEventListener('pointermove', mover)
      document.removeEventListener('mouseleave', salir)
      document.removeEventListener('mouseenter', entrar)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('cursor-propio')
    }
  }, [])

  return (
    <>
      <div className="cur cur--punto" ref={punto} aria-hidden="true" />
      <div className="cur cur--aro" ref={aro} aria-hidden="true" />
    </>
  )
}
