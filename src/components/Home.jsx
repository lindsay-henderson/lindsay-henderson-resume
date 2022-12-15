import'../styles/home.css'

function Home() {
  return (
    <section className='home-page' id='home-page'>
    <div className="home-card">
      <div className='text'>
        <h1>Lindsay Henderson</h1>
        <div className='subtext'>
          <h2>Software Engineer</h2> 
          <h2>Web Developer</h2>
          <div id='under-construction'>
          <img src="/under-construction.png" alt="traffic cone" />
          <p>Please excuse the mess, I'm currently making my site look cooler than it was originally</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Home