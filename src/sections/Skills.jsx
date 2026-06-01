import { useFadeIn } from '../hooks/useFadeIn'
import SectionLabel from '../components/SectionLabel'
import { SKILLS } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useFadeIn()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>competências técnicas</SectionLabel>
        <div ref={ref} className={`${styles.cats} fade-in`}>
          {SKILLS.map(({ category, items }) => (
            <div key={category} className={styles.cat}>
              <p className={styles.catTitle}>{category}</p>
              <div className={styles.chips}>
                {items.map(item => (
                  <span key={item} className={styles.chip}>
                    <span className={styles.dot} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
