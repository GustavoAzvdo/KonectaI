import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Mvv from "../components/mvv/Mvv"
import Navbar from "../components/navbar/Navbar"
import Projects from "../components/projects/Projects"


const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero />
        <About />
        <Projects />
        <Mvv/>
        <Footer />
    </>
  )
}

export default Home