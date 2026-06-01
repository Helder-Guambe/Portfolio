import { SOCIAL, CONTACT } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.inner}>

          {/* AVATAR */}
          <div className={styles.avatarWrap}>
            <img src="/perfil linkedin.jpeg" alt="Foto de perfil" className={styles.avatar} />
          </div>

          {/* TEXT */}
          <div className={styles.text}>
            <p className={styles.greeting}>olá, eu sou</p>
            <h1 className={styles.name}>
              Hélder <span>James</span><br />Guambe
            </h1>
            <p className={styles.role}>
              Apaixonado por backend, APIs REST e código limpo.
            </p>

            <div className={styles.contacts}>
              <a href={`mailto:${CONTACT.email}`} className={styles.contactItem}>
                <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
                {CONTACT.email}
              </a>
              <span className={styles.contactItem}>
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {CONTACT.location}
              </span>
              <a href={`tel:${CONTACT.phone1.replace(/\s/g,'')}`} className={styles.contactItem}>
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                {CONTACT.phone1}
              </a>
            </div>

            <div className={styles.ctas}>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener" className={`${styles.btn} ${styles.btnPrimary}`}>
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8.01"/><path d="M12 16v-5M16 16v-3a2 2 0 00-4 0"/></svg>
                LinkedIn
              </a>
              <a href={SOCIAL.github} target="_blank" rel="noopener" className={`${styles.btn} ${styles.btnOutline}`}>
                <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                GitHub
              </a>
              <a href="#contacto" className={`${styles.btn} ${styles.btnOutline}`}>contactar</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
