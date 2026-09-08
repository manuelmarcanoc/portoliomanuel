import { skills } from '../content'

export default function SkillsBlock() {
  const { columnaSkills, columnaApproach } = skills

  return (
    <section className="skills" aria-label="Skills y forma de trabajar">
      <div className="skills__paper">
        <div className="skills__panel reveal">
          <div className="skills__col">
            <h3 className="skills__title">{columnaSkills.titulo}</h3>
            <ul className="skills__list">
              {columnaSkills.items.map((s, i) => (
                <li key={i} style={{ '--i': i }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__col skills__col--wide">
            <h3 className="skills__title skills__title--multiline">
              {columnaApproach.titulo}
            </h3>
            <p className="skills__approach">
              <b>{columnaApproach.destacado}</b> {columnaApproach.texto}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
