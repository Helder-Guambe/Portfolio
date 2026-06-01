import { useState, useEffect } from 'react'
import { NAV_LINKS, SOCIAL } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import styles from './Navbar.module.css'

const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''))

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            hj<span>.</span>guambe
          </a>

          <ul className={styles.links}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={activeId === href.replace('#', '') ? styles.active : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.social}>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8.01"/><path d="M12 16v-5M16 16v-3a2 2 0 00-4 0"/></svg>
            </a>
            <a href={SOCIAL.github} target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            </a>
          </div>

          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener" onClick={closeMenu}>LinkedIn ↗</a>
          <a href={SOCIAL.github}   target="_blank" rel="noopener" onClick={closeMenu}>GitHub ↗</a>
        </div>
      )}
    </>
  )
}
