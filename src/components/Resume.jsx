import React from 'react'
import '../styles/resume.css'
import pdf from '../data/pdfs/Lindsay-N-Henderson-Resume.pdf'
import { NavLink } from 'react-router-dom'


function Resume() {
  return (
    <div className='resume-details' id='resume'>
      <div className="resume">
        <NavLink to={pdf} target="_blank"><h1>Check Out My Resume</h1></NavLink>
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