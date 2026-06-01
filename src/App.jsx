import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Hero     from './sections/Hero'
import Sobre    from './sections/Sobre'
import Skills   from './sections/Skills'
import Projetos from './sections/Projetos'
import Formacao from './sections/Formacao'
import Idiomas  from './sections/Idiomas'
import Contacto from './sections/Contacto'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
        <Formacao />
        <Idiomas />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
