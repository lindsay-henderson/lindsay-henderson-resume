import '../App.css'
import ProjectList from '../components/ProjectList'
import { allProjects } from '../data/allProjects'

const Projects = () => {
  console.log('allprojects', allProjects)
  return (
    <ProjectList
    allProjects={allProjects} 
    />
  )
}

export default Projects