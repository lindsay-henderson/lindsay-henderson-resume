//import { allProjects } from "../data/allProjects"
import { findProject } from '../utilities/findProject'
import { useParams } from "react-router-dom"

const ProjectDetails = () => {

let { projectDetails } = useParams()

console.log ('params', projectDetails)

let project = findProject(projectDetails)

console.log('the project i need to display is', project)
console.log('type', typeof project)
  
return (
  <section>
      <img src={project.image} alt="" />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </section>

  )
}

export default ProjectDetails