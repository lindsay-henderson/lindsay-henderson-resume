import '../styles/contact.css'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section>
    <section className='contact-box'id='contact' data-aos='fade-up' data-aos-duration="1000">
      <h1>Let's Stay in Touch</h1>
      
      <div className="chat">
        <div className="contact">
          <p> <img src="/envelope-light.png" alt="mail icon"/>LindsayNHenderson@gmail.com</p>
            <div className='icons'>
            <a href="https://www.linkedin.com/in/lindsay-n-henderson/" rel="noreferrer" target="_blank"> <img src="/linkedin-light.png" alt="linkedin logo" /></a>
            <a href="https://github.com/lindsay-henderson" rel="noreferrer" target="_blank"><img src="/github-white.png" alt="github logo" /></a>
          </div>
        </div>
      </div>
      </section>
      </section>
  )
}

export default Contact