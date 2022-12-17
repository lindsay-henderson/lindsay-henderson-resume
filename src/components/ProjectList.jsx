import '../styles/projects.css'
import ProjectPreview from './ProjectPreview'
import ShowTechs from './ShowTechs'

const ProjectList = (props) => {

  return (
    <section className='projects' id='projects'>
    <h1>Projects</h1>
    <ul className="project-list">
      {props.allProjects.map(prop=>
        <li key={prop.title}>
          <ProjectPreview
          title={prop.title}
          image={prop.image}
          description={prop.description}
          repositoryLink={prop.repositoryLink}
          deploymentLink={prop.deploymentLink}
          />
          <ShowTechs techs={prop.techs}/>
        </li> 
      )}
    </ul>
    </section>
  )
}

export default ProjectList