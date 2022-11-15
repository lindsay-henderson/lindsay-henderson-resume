import '../App.css'
import hyphenateWords from '../utilities/hyphenateWords'
import { Link } from 'react-router-dom'

const ProjectPreview = (props) => {
  let path = hyphenateWords(props.title)
    
  return(
  <div>
    <img 
      src={props.image} 
      alt={props.title}
    />

    <section>
      <h3>
        {props.title}
      </h3>
      <Link to={`/projects/${path}`}>
        <button>Learn more</button>
      </Link>
    </section>
  </div>
  )
}

export default ProjectPreview