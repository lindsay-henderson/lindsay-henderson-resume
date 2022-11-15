import '../App.css'
import ProjectList from '../components/ProjectList'
import { allProjects } from '../data/allProjects'

const Projects = () => {
  return (
    <ProjectList
      allProjects={allProjects} 
    />
  )
}

export default Projects