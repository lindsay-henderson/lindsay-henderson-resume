import'../styles/about.css'
// import { useParams } from "react-router-dom"
// import { dadJoke } from '../components/DadJokes'



function About() {
  // let { jokeParts } = useParams()
  // let joke = dadJoke(jokeParts)

  return (
    <section className='about' id='about'>

        <h1>A Bit About Me...</h1>
        <div className='about-text'>
          <p>I’m a software engineer with a background in program development, client communications, and artmaking. I'm excited about using creativity and responsive design as tools that empower users to communicate, find resources, and connect in meaningful ways. I know the important things take hard work, and I bring those values with me when I take on new projects.</p>
          <p> In my spare time, I enjoy outdoor adventures like hiking and rock climbing, petting every dog I meet, and watercolor painting.</p>
        </div>
        <div className="headshot">
          <img src="https://live.staticflickr.com/65535/52517045412_19ee80b259_b.jpg"
          alt="a chihuahua wearing sunglasses and a red bandana"/>
          <figcaption>A portrait I painted of a sassy dog-friend</figcaption>
      </div>
    </section>
  )
}

export default About