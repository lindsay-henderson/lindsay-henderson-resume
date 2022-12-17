import React from 'react'
import '../styles/resume.css'
import pdf from '../data/pdfs/Lindsay-N-Henderson-Resume.pdf'
import { NavLink } from 'react-router-dom'


function Resume() {
  return (
    <div className='resume-details' id='resume'>
      <div className="resume">
        <NavLink to={pdf} target="_blank" id='resume-link'>
        <div id='test2'><h1>Check Out My Resume</h1>
        <img className="gold" src="./leaves-gold.png" alt="leaf silouette" />
        </div>
        <div className='test1'>
        <img className='light' src='./leaves-light.png' alt='leaf silouette'/>
        </div>
        </NavLink>


      </div>
    </div>
  )
}

/* text="See my resume"
newTab={true}
href={pdf} */

export default Resume
/* <a href="/Lindsay-N-Henderson-Resume-22.pdf" download>Click Here</a>
to Download My Resume */