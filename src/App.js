import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'
import Nav from './components/Nav.jsx'

function App() {
  return (
    <>
    <Nav/>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='Resume' element={<Resume/>} />
      </Routes>
    </main>
    </>
  );
}

export default App;
