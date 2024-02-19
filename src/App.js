import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from './components/Header';
// import Particles from "react-particles";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
<>

<Router>
        <Routes>
          {/* Define route for PrivacyPolicy component */}
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_conditions" element={<Terms />} />

          {/* Define route for other components */}
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </>
  );
}

// MainContent component to encapsulate all other components
function MainContent() {
  return (
    <>
    <Navbar />
        <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Contacts />
      <Footer />

    </>
  );
}

export default App;
