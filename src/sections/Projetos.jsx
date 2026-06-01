import { useFadeIn } from '../hooks/useFadeIn'
import SectionLabel from '../components/SectionLabel'
import Tag from '../components/Tag'
import { PROJECTS } from '../data/portfolio'
import styles from './Projetos.module.css'

const ICONS = {
  1: <svg viewBox="0 0 24 24"><path d="M12 3l9 4.5-9 4.5-9-4.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 16.5l9 4.5 9-4.5"/></svg>,
  2: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  3: <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
}

export default function Projetos() {
  const ref = useFadeIn()

  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>projectos</SectionLabel>
        <div ref={ref} className={`${styles.grid} fade-in`}>
          {PROJECTS.map(proj => (
            <div key={proj.id} className={styles.card}>
              <div className={styles.icon}>{ICONS[proj.id]}</div>
              <div className={styles.statusRow}>
                <span className={`${styles.dot} ${proj.active ? styles.active : ''}`} />
                <span className={styles.statusText}>{proj.status}</span>
              </div>
              <p className={styles.name}>{proj.name}</p>
              <p className={styles.desc}>{proj.desc}</p>
              <div className={styles.tags}>
                {proj.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
