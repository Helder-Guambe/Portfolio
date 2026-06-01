import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>feito com <span>♥</span> por Hélder James Guambe &nbsp;·&nbsp; <span>{new Date().getFullYear()}</span></p>
    </footer>
  )
}
