import '../styles/projects.css'
// import hyphenateWords from '../utilities/hyphenateWords'
// import { Link } from 'react-router-dom'

const ProjectPreview = (props) => {
  // let path = hyphenateWords(props.title)
    
  return(
    <div className='preview'>
      <img 
        src={props.image} 
        alt={props.title}
      />
      <section className ='title'>
        <h3>{props.title}</h3>
        <p className='project-description'>{props.description}</p>
        <div className='link-icons'>
              <a href={ props.repositoryLink } rel="noreferrer" target="_blank"> <img src="/github.png" alt="github logo" /></a>
              <br/>
              <a href={ props.deploymentLink } rel="noreferrer" target="_blank">Try it out</a>
            </div>
        <p>{props.techs}</p>
        {/* <Link to={`/projects/${path}`}>
          <button>Learn more</button>
        </Link> */}
      </section>
    </div>
  )
}

export default ProjectPreview