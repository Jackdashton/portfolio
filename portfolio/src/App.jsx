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
import Movie from "./components/projects/Movie";
import Owl from "./components/projects/Owl";
import Drum from "./components/projects/Drum";
import Task from "./components/projects/Task";
import PageNotFound from "./components/PageNotFound"
import Esolperth from "./components/projects/Esolperth";
import WordGame from "./components/projects/WordGame";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cabinn" element={<Cabinn />} />
        <Route path="/trex" element={<Trex />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/owl" element={<Owl />} />
        <Route path="/drum" element={<Drum />} />
        <Route path="/task" element={<Task />} />
        <Route path="/esolperth" element={<Esolperth />} />
        <Route path="/wordgame" element={<WordGame />} />
        <Route path="*" element={<PageNotFound />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
