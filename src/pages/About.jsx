import'../styles/about.css'

function About() {
  return (
    <section className='about'>
      <div className='photo'>
        <img src="https://live.staticflickr.com/65535/52517045412_19ee80b259_b.jpg" alt="a dog wearing sunglasses"/>
      </div>
      <div className='about-box'>
        <h2>A bit about me...</h2>
        <div className='about-text'>
          <p>I’m a software engineer with a background in nonprofits and artmaking. I am interested in working with a broad range of high-impact technologies to build innovative products. I want to use creativity and responsive design as tools that empower users to communicate ideas, find resources, and connect in meaningful ways. I know the important things take hard work, and I bring those values with me when I take on new projects.</p>
          <br/>
          <p> In my spare time, I enjoy outdoor adventures like hiking and rock climbing, petting every dog I meet, and watercolor painting</p>
        </div>
      </div>
    </section>
  )
}

export default About