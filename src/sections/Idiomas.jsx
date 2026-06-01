import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { LANGUAGES } from '../data/portfolio'
import styles from './Idiomas.module.css'

export default function Idiomas() {
  const sectionRef = useRef(null)
  const barsRef    = useRef([])
  const animated   = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          barsRef.current.forEach((bar, i) => {
            if (bar) bar.style.width = LANGUAGES[i].pct + '%'
          })
        }
      },
      { threshold: 0.4 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="idiomas" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>idiomas</SectionLabel>
        <div ref={sectionRef} className={styles.list}>
          {LANGUAGES.map((lang, i) => (
            <div key={lang.name} className={styles.item}>
              <div className={styles.top}>
                <span className={styles.name}>{lang.name}</span>
                <span className={styles.level}>{lang.level}</span>
              </div>
              <div className={styles.bar}>
                <div
                  ref={el => barsRef.current[i] = el}
                  className={styles.fill}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
