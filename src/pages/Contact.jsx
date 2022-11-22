import '../styles/contact.css'

function Contact() {
  return (
    <section className='contact-box'>
      <h1>Stay in Touch</h1>
      <div className="chat">
        <div className="contact">
          <p>LindsayNHenderson@gmail.com</p>
            <div className='icons'>
            <a href="https://www.linkedin.com/in/lindsay-n-henderson/"><p>LinkedIn</p></a>
            <a href="https://github.com/lindsay-henderson"><p>GitHub</p></a>
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