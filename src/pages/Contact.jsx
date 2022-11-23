import '../styles/contact.css'

function Contact() {
  return (
    <section className='contact-box'>
      <h1>Let's Stay in Touch</h1>
      
      <div className="chat">
        <div className="contact">
          <p> <img src="/envelope.png" alt="mail icon" />LindsayNHenderson@gmail.com</p>
            <div className='icons'>
            <a href="https://www.linkedin.com/in/lindsay-n-henderson/"> <img src="/linkedin.png" alt="linkedin logo" /></a>
            <a href="https://github.com/lindsay-henderson"><img src="/github.png" alt="github logo" /></a>
          </div>
        </div>
        <div className='intro'>
          <img src="https://live.staticflickr.com/65535/52517201947_ddfbb7de4d_b.jpg"  alt="a cat wearing a lobster hat"/>
        </div>
      </div>
      </section>
  )
}

export default Contact