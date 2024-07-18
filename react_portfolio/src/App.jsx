import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HeroText from "./Components/HeroText/HeroText";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="md:flex">
        <Hero />
        <HeroText />
      </div>
      <Projects />
      <Footer />
    </>
  );
}

export default App;
