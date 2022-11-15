import '../App.css'
import ProjectPreview from './ProjectPreview'

const ProjectList = (props) => {

  return (
    <>
    <h1>Projects</h1>
    <ul className="project-list">
      {props.allProjects.map(prop=>
        <li key={prop.id}>
          <ProjectPreview
          title={prop.title}
          image={prop.image}
          />
        </li> 
      )}
    </ul>
    </>
  )
}

export default ProjectList