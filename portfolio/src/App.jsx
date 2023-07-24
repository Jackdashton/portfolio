import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Cabinn from "./components/projects/Cabinn";
import Trex from "./components/projects/Trex";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Cabinn" element={<Cabinn />} />
        <Route path="/Trex" element={<Trex />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
