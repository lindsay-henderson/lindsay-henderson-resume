import './App.css';
import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'
// import Resume from './pages/Resume.jsx'
// import Projects from './pages/Projects.jsx'
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
        element={<Main />} />
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