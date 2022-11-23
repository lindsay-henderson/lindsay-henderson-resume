import'../styles/home.css'

function Home() {
  return (
    <section className='home-page'>
    <div className="home-card">
      <div className="headshot">
        <img src="https://live.staticflickr.com/65535/52517586536_d1e1debd7e_b.jpg" alt="Lindsay"/>
      </div>
      <div className='text'>
        <h2>Hi, My name is Lindsay Henderson</h2>
        <h4>Welcome to my website.  Please check out the links above to learn more about me.</h4>
      </div>
    </div>
    </section>
  )
}

export default Home