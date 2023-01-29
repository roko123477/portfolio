import React,{ useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine,RiWhatsappLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gza9i3q', 'template_q79xy1e', form.current, 'yCsxMOHbjjul3IXPl');
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>rohitkoner5@gmail.com</h5>
            <a href="mailto:rohitkoner5@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>rohitkoner</h5>
            <a href="https://m.me/rohit.koner.353">Send a message</a>
          </article>

          <article className="contact_option">
            <RiWhatsappLine className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917908258092</h5>
            <a href="https://api.whatsapp.com/send?phone=917908258092">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact