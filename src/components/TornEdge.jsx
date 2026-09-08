// Borde de papel rasgado. Se coloca en el borde superior o inferior
// de un bloque para simular el collage recortado de la referencia.

const PATH_TOP =
  'M0,42 L38,20 L74,36 L112,14 L150,30 L188,10 L224,28 L262,8 L300,26 L338,6 ' +
  'L376,24 L414,10 L452,30 L490,12 L528,32 L566,14 L604,34 L642,16 L680,36 ' +
  'L718,18 L756,38 L794,20 L832,40 L870,22 L908,42 L946,24 L984,44 L1022,26 ' +
  'L1060,46 L1098,28 L1136,44 L1174,24 L1200,38 L1200,60 L0,60 Z'

const PATH_BOTTOM =
  'M0,0 L1200,0 L1200,22 L1162,42 L1124,20 L1086,40 L1048,18 L1010,38 L972,16 ' +
  'L934,36 L896,14 L858,34 L820,12 L782,32 L744,10 L706,30 L668,8 L630,28 ' +
  'L592,6 L554,26 L516,8 L478,28 L440,10 L402,30 L364,12 L326,32 L288,14 ' +
  'L250,34 L212,16 L174,36 L136,18 L98,38 L60,20 L22,40 L0,24 Z'

export default function TornEdge({ position = 'top', color = '#eae7dd', className = '' }) {
  return (
    <svg
      className={`torn torn--${position} ${className}`}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={position === 'top' ? PATH_TOP : PATH_BOTTOM} fill={color} />
    </svg>
  )
}
