import { useFadeIn } from '../hooks/useFadeIn'
import SectionLabel from '../components/SectionLabel'
import { STATS } from '../data/portfolio'
import styles from './Sobre.module.css'

export default function Sobre() {
  const textRef  = useFadeIn()
  const statsRef = useFadeIn()

  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>sobre mim</SectionLabel>
        <div className={styles.grid}>

          <div ref={textRef} className={`${styles.text} fade-in`}>
            <p>Sou estudante finalista de Sistemas e Redes Computacionais na Universidade Wutivi, com foco em desenvolvimento de software backend. Tenho experiência prática adquirida no estágio na North Digits, onde desenvolvi APIs REST, implementei autenticação e trabalhei com bases de dados PostgreSQL.</p>
            <p>Gosto de criar soluções que funcionam — código limpo, bem estruturado e que resolve problemas reais. Tenho interesse crescente em arquitecturas de sistemas, automação e integração de serviços.</p>
            <p>Quando não estou a programar, estou a explorar novas tecnologias e a construir projectos pessoais que me desafiam a crescer.</p>
          </div>

          <div ref={statsRef} className={`${styles.stats} fade-in`}>
            {STATS.map(({ num, label }) => (
              <div key={label} className={styles.statItem}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLbl}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
