import '../styles/projects.css'
import ProjectList from './ProjectList'
import { allProjects } from '../data/allProjects'

const Projects = () => {
  return (

    <ProjectList
      allProjects={allProjects} 
    />
  )
}

export default Projects