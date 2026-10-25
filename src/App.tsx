import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ProjectGrid from './components/ProjectGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Skills />
        <ProjectGrid/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
