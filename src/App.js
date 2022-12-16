import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import {Main} from './components/main/Main'


function App() {
  return (
    <div className="bg-img">
    <Nav />
    <main>
      <Routes>
        <Route path='/' 
        element={<Main/>} />
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