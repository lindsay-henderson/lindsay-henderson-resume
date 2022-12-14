import '../styles/projectDetails.css'
import { findProject } from '../utilities/findProject'
import { useParams } from "react-router-dom"


const ProjectDetails = () => {

  let { projectDetails } = useParams()
  let project = findProject(projectDetails)

  return (
    <section>
      <h1>{project.title}</h1>
      <div className='project-display'>
        <div className='image'>
          <img src={project.image} alt="screenshots of the project" />
        </div>
        <div className='details'>
            <p>{project.description}</p>
            <div className='gitlaunch'>

            </div>
        </div>
      </div>
    </section>
    )
  }

export default ProjectDetails