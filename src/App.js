import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Pofrfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
// import { tsParticles } from "tsparticles";

function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
                params={{
                    particles: {
                      number: {
                        value: 30,
                        density: {
                          enable: true,
                          value_area: 900
                        }
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                          width: 6,
                          color: "#f9ab00"
                        }
                      }
                    }
                }} />
    <Navbar />
    <Header />
    <AboutMe />
    <Skills />
    <Experience />
    <Pofrfolio />
    {/* <Testimonials /> */}
    <Contacts />
    </>
  );
}

export default App;
