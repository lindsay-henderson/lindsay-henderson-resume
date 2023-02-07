import '../styles/projects.css'
import ProjectPreview from './ProjectPreview'
import ShowTechs from './ShowTechs'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectList = (props) => {
    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <section className='projects' data-aos='fade-up' data-aos-duration="1000" >
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