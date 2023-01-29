import React from 'react'
import {FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ROHIT</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>

        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/rohit.koner.353"><FaFacebookF /></a>
        <a href="http://instagram.com"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/rohit-koner-7a21961a0/"><FaLinkedinIn /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; made with &hearts; by Roko. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer