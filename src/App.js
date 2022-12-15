import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Projects.jsx'
import Nav from './components/Nav.jsx'
// import {allProjects} from './data/allProjects';
// import ProjectDetails from './pages/ProjectDetails'
import {Main} from './components/main/Main'

function App() {
  return (
    <div class="bg-img">
    <Nav />
    <main>
      <Routes>
        <Route path='/' 
        element={<Main/>} />
        <Route path='/'
        element={<Home/>} />
        <Route path='/'
        element={<About/>} />
                <Route path='/'
        element={<About/>} />
                <Route path='/'
        element={<Projects/>}/>

      </Routes>
    </main>
    </div>
  );
}

export default App

// {/* <Route path='about' 
// element={<About/>} /> */}
// {/* <Route path='contact' 
// element={<Contact/>} />
// <Route path='projects' 
// element={<Projects
// allProjects={allProjects}/>}/>
// <Route path='projects/:projectDetails' 
// element={<ProjectDetails/>}/>
// <Route path='resume' 
// element={<Resume/>}/> */}