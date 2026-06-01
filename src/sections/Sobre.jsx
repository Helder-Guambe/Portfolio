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
            <p>Desenvolvedor de software focado na construção de soluções escaláveis, seguras e de alto desempenho. Com experiência em desenvolvimento backend, APIs REST, autenticação e bases de dados relacionais, trabalho na criação de sistemas que aliam eficiência técnica e valor de negócio.
Sou motivado por desafios que exigem pensamento analítico, resolução de problemas e inovação. Tenho interesse em arquitetura de software, automação e integração de sistemas, áreas nas quais busco aprimorar continuamente os meus conhecimentos e competências.
Acredito que grandes soluções nascem da combinação entre tecnologia, estratégia e execução, e procuro refletir essa visão em cada projeto que desenvolvo.</p>
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
