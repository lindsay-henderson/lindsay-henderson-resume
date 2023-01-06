import '../styles/projects.css'
import ProjectList from './ProjectList'
import { allProjects } from '../data/allProjects'

const Projects = () => {
  return (
    <div id='projects'>
      <section className='spacer'></section>
    <ProjectList
      allProjects={allProjects} 
      />
      </div>
  )
}

export default Projects