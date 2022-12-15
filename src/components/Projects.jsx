import '../styles/projects.css'
import ProjectList from './ProjectList'
import { allProjects } from '../data/allProjects'

const Projects = () => {
  return (
    <section id='projects'>
    <ProjectList
      allProjects={allProjects} 
    />
    </section>
  )
}

export default Projects