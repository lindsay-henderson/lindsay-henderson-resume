import { findProject } from '../utilities/findProject'
import { useParams } from "react-router-dom"

const ProjectDetails = () => {

  let { projectDetails } = useParams()
  let project = findProject(projectDetails)

  return (
    <section>
        <img src={project.image} alt="" />
        <a href={ project.deploymentLink }><h1>{project.title}</h1></a>
        <p>{project.description}</p>
        <a href={ project.repositoryLink }>github</a>
      </section>

    )
  }

export default ProjectDetails