import '../styles/projects.css'
import ProjectPreview from './ProjectPreview'

const ProjectList = (props) => {

  return (
    <section className='projects'>
    <h1>Projects</h1>
    <ul className="project-list">
      {props.allProjects.map(prop=>
        <li key={prop.id}>
          <ProjectPreview
          title={prop.title}
          image={prop.image}
          description={prop.description}
          repositoryLink={prop.repositoryLink}
          deploymentLink={prop.deploymentLink}
          />
        </li> 
      )}
    </ul>
    </section>
  )
}

export default ProjectList