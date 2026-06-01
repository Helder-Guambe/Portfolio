import { useFadeIn } from '../hooks/useFadeIn'
import SectionLabel from '../components/SectionLabel'
import Tag from '../components/Tag'
import { EXPERIENCE, EDUCATION } from '../data/portfolio'
import styles from './Formacao.module.css'

export default function Formacao() {
  const ref = useFadeIn()

  return (
    <section id="formacao" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>formação &amp; experiência</SectionLabel>
        <div ref={ref} className={`${styles.stack} fade-in`}>

          {EXPERIENCE.map(exp => (
            <div key={exp.role} className={styles.expCard}>
              <div className={styles.expTop}>
                <div>
                  <p className={styles.expTitle}>{exp.role}</p>
                  <p className={styles.expCompany}>{exp.company} — {exp.type}</p>
                </div>
                <span className={styles.badge}>{exp.type}</span>
              </div>
              <p className={styles.expDesc}>{exp.desc}</p>
              <div className={styles.tags}>
                {exp.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}

          {EDUCATION.map(edu => (
            <div key={edu.degree} className={styles.eduCard}>
              <div className={styles.eduIcon}>
                <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <p className={styles.eduDegree}>{edu.degree}</p>
                <p className={styles.eduSchool}>{edu.school}</p>
              </div>
              <span className={styles.eduStatus}>{edu.status}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
