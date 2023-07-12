import './App.css'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Experience from './components/Experience'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )

}

export default App
