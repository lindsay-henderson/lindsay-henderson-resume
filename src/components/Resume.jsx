import React from 'react'
// import '../styles/resume.css'
import pdf from '../data/pdfs/Lindsay-N-Henderson-Resume.pdf'


function Resume() {
  return (
    <div className='resume-details'>
      <div className="resume">
        <h2><a href="/Lindsay-N-Henderson-Resume-22.pdf" download>Click Here </a>
        to Download My Resume</h2>
        <img src="/under-construction.png" alt="traffic cone" />
      </div>

      <button>
                  {/* text="See my resume"
                  newTab={true}
                  href={pdf} */}
                  <a href={pdf}> here</a>
                  </button>
    </div>
  )
}


export default Resume