import { NavLink, Link } from "react-router-dom"
import pdf from '../data/pdfs/Lindsay-N-Henderson-Resume.pdf'

function Nav() {
  return (

        <nav className="nav-bar">
          <div className="home">
            <a href='#home-page'>
              <img src="/apple-touch-icon.png" alt="a square with the initials L & H"/>
            </a>

          <div className="links">
          <a href='#projects'>Projects</a>
          <a href='#about'>About</a>
          <a href='#resume'>Resume</a>
          </div>
          </div>
        </nav>
  )
}
          //   <NavLink to='/about'>About</NavLink>
          //   <NavLink to={pdf} target="_blank">Resume</NavLink>
          //   <NavLink to='/contact'>Contact</NavLink>

export default Nav