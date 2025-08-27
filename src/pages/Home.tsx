import About from "../components/about/About"
import Hero from "../components/hero/Hero"
import Mvv from "../components/mvv/Mvv"
import Navbar from "../components/navbar/Navbar"


const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero />
        <About />
        <Mvv/>
    </>
  )
}

export default Home