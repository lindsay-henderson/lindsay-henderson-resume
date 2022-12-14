import { NavLink, Link } from "react-router-dom"
import pdf from '../data/pdfs/Lindsay-N-Henderson-Resume.pdf'

function Nav() {
  return (

        <nav className="nav-bar">
          <div className="home">
            <Link to='home'>
              <img src="/apple-touch-icon.png" alt="a square with the initials L & H"/>
              </Link>
          </div>
          <div className="links">
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to={pdf} target="_blank">Resume</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </nav>
  )
}

export default Nav