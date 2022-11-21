import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'
import Nav from './components/Nav.jsx'
import {allProjects} from './data/allProjects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <>
    <Nav/>
    <main>
      <Routes>
        <Route path='/' 
        element={<Home />} />
        <Route path='about' 
        element={<About/>} />
        <Route path='contact' 
        element={<Contact/>} />
        <Route path='projects' 
        element={<Projects
        allProjects={allProjects}/>}/>
        <Route path='projects/:projectDetails' 
        element={<ProjectDetails/>}/>
        <Route path='resume' 
        element={<Resume/>}/>
      </Routes>
    </main>
    </>
  );
}

export default App
