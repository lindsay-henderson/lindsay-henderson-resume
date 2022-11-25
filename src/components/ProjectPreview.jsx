import '../styles/projects.css'
import hyphenateWords from '../utilities/hyphenateWords'
import { Link } from 'react-router-dom'

const ProjectPreview = (props) => {
  let path = hyphenateWords(props.title)
    
  return(
    <div className='preview'>
      <img 
        src={props.image} 
        alt={props.title}
      />
      <section className ='title'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.techs}</p>
        {/* <Link to={`/projects/${path}`}>
          <button>Learn more</button>
        </Link> */}
      </section>
    </div>
  )
}

export default ProjectPreview